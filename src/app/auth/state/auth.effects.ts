import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.action";

import { autoLogin, autoLogout, loginStart,  loginSuccess,  signupStart, signupSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>, private router: Router) { }
    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(map((data) => {
                this.store.dispatch(setLoadingSpinner({ status: false }))
                const user = this.authService.formatUser(data)
                this.authService.setUserInLocalStorage(user);
                return loginSuccess({ user });
            }),
                catchError((errResp) => {
                    //     console.log(errResp)
                    // console.log(errResp.error.error.message,"error");
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message)
                    return of()
                })

            )
        }))
    })
    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginSuccess), map((action) => {
            this.router.navigate(['/'])
        }))
    }, { dispatch: false })
    signUp$ = createEffect(() => {
        return this.actions$.pipe(ofType(signupStart), exhaustMap((action) => {
            return this.authService.signUp(action.email, action.password).pipe(map(data => {
                this.store.dispatch(setLoadingSpinner({ status: false }))
                const user = this.authService.formatUser(data);
                this.authService.setUserInLocalStorage(user);
                return signupSuccess({ user })
            }))
        }))
    })
    singUpRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(signupSuccess), map((action) => {
            this.router.navigate(['/'])
        }))
    }, { dispatch: false })

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(ofType(autoLogin), mergeMap((action) => {
            const user = this.authService.getUserfromLocalStorage();
            console.log(user)
            return of(loginSuccess({user}));
        }));
    }

   )
   logout$ = createEffect(()=>{
    return this.actions$.pipe(ofType(autoLogout),map((action)=>{
        this.authService.logOut()
        this.router.navigate(['auth'])
        
    }))
   },{dispatch:false})
}