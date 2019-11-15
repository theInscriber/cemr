export default ( state = null, action) => {
    switch (action.type){
        case 'SET_ITEM':
            return action.value
        default:
            return state
    }
}