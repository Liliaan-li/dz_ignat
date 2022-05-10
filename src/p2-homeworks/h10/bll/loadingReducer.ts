const initState = {
isLoading:false
}
export type initStateType = typeof initState;
export const loadingReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}
type LoadingType = {
    type:string,
    isLoading: boolean
}
export type ActionType = ReturnType <typeof loadingAC>
export const loadingAC = (isLoading:boolean): LoadingType => {
    return {
        type: "IS-LOADING",
        isLoading
    }as const
} // fix any