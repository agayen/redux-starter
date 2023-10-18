import * as actionType from './actionType'

let bugId = 0

const reducer = ( state = [], action ) =>{
    switch(action.type){
        case actionType.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++bugId,
                    description: action.payload.description,
                    resolved: false,
                }
            ]
        case actionType.BUG_REMOVED:
            return state.filter( bug => bug.id !== action.payload.id)
        case actionType.BUG_RESOLVED:
            return state.map( bug => bug.id === action.payload.id ? {...bug, resolved: true} : bug)
        default:
            return state
    }
    
    // if(action.type ==='BugAdded'){
    //     return [
    //         ...state,
    //         {
    //             id: ++bugId,
    //             description: action.payload.description,
    //             resolved: true,
    //         }
    //     ]
    // }
    // else if(action.type ==='BugRemoved'){
    //     return state.filter( bug => bug.id === action.payload.id )
    // }

    // return state
}

export default reducer