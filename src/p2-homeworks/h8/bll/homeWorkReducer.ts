import {InitialPeopleType} from "../HW8";

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up')
            return [...state].sort((a,b)=>{
                if(a.name> b.name) return 1
                else if(a.name< b.name) return -1
                else return 0
            })
            else return [...state].sort((a,b)=>{
                if(a.name < b.name) return 1
                else if(a.name> b.name) return -1
                else return 0
            })
        }
        case 'check': {
            // need to fix
            return state.filter(el=> el.age >= action.payload)
        }
        default:
            return state
    }
}
type ActionType = SortUpACType | CheckACType
type SortUpACType = ReturnType<typeof sortUpAC>
type CheckACType = ReturnType<typeof checkAC>
const sortUpAC = (command: string) => {
    return {
        type: 'sort',
        payload: command
    } as const
}
const checkAC = (age:number) => {
    return {
        type: 'check',
        payload: age
    } as const
}