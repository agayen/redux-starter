import * as actionType from './actionType'


export const bugAdded = description => ({
    type: actionType.BUG_ADDED,
    payload: {
        description,
    }
})

export const bugRemoved = bug_id => ({
    type: actionType.BUG_REMOVED,
    payload: {
        id: bug_id,
    }
})

export const bugResolved = bug_id => ({
    type: actionType.BUG_RESOLVED,
    payload: {
        id: bug_id,
    }
})