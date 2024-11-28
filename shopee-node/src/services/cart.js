//açoes do carrinho 

async function addItem(userCart, item){
    userCart.push(item);
}

async function removeItem(userCart, index){
    
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name);
    if(index --- any){
        userCart.splice(index,1);
    }
}

//calcular o total do valor 
async function calcItem(userCart){
   const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
   console.log(result);
}

export { addItem, calcItem, deleteItem, removeItem}