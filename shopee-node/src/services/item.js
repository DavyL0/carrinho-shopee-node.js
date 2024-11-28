
//casos de uso de itens 

async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: ()=> price * quantity,
    };
}

export default createItem;