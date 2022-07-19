
let lastID=0;

const groceryItemReducer = (state = [], action) => {
    switch(action.type){
        case 'itemAdded':
            return [
                ...state,{
                    id: ++lastID,
                    itemTitle: action.payload.itemTitle,
                    purchased:false
                }
            ]
        case 'itemPurchased':
            return state-1;
        default:
            return state;
    }
}

export default groceryItemReducer;