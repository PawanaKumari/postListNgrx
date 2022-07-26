import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import { initialState } from "src/app/counter/state/counter.state"
import { setErrorMessage, setLoadingSpinner } from "./shared.action"

const _sharedReducer = createReducer(initialState, on(setLoadingSpinner, (state: any, action) => {
    return {
        ...state,
        showLoading: action.status
    }
}),
on(setErrorMessage, (state,action) =>{
    return {
        ...state,
    errorMessage: action.massage,
    }
})
)
export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}