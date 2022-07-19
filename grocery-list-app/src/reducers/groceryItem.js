const groceryItemReducer = (state = 2, action) => {
    switch(action.type){
        case 'itemAdded':
            return state+1;
        case 'itemPurchased':
            return state-1;
        default:
            return state;
    }
}

export default groceryItemReducer;