export default (state = [], action) => {
    switch(action.type){
        case "SET_LIST":
            return action.value
        default:
            return state
    }
}