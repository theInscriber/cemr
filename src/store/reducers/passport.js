export default (state = [], action) => {
    switch(action.type){
        case "SET_PASSPORT":
            return action.value
        default:
            return state
    } 
}