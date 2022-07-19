export const addItem=(nu)=>{
    return{
        type: 'itemAdded',
        payload: nu
    };
};
export const purchaseItem=()=>{
    return{
        type: 'itemPurchased'
    };
};



