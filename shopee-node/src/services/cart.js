//açoes do carrinho 

async function addItem(userCart, item){
    userCart.push(item);
}
//deleta uma unidade do item da lista
async function deleteItem(userCart, index){
    const deleteIndex = index - 1;
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}
//remove item da lista
async function removeItem(userCart, name){
    //encontrou item
    const index = userCart.findIndex((item)=> item.name === name);
    //não encontrou item
    if(index === -1){
        console.log("Item não existe");
        return;
    }
    //Item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[index].quality > 1){
        userCart[index].quality-= 1;
        return;
    }
    if(userCart[index].quality === 1){
        userCart.splice(index, 1);
        return;
    }
}

//calcular o total do valor 
async function calcItem(userCart){
   const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
   console.log(result);
}

async function displayCart(userCart){
    console.log("Shoppe Cart list ");
    userCart.forEach((item, index) =>{
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    })
}

export { addItem, calcItem, deleteItem, removeItem, displayCart}