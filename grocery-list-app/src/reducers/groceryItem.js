
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
            return state.filter(item =>item.id !==action.payload.id)
        default:
            return state;
    }
}

export default groceryItemReducer;