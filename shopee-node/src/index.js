import createItem from "./services/item.js";
import * as cartSevice from "./services/cart.js";
const cart = [];
const wishlist = [];

const item1 = await createItem("hotwheels 2", 20.99, 2)
const item2 = await createItem("Hotweels 3", 40.99, 1)

await cartSevice.addItem(cart,item1);
await cartSevice.addItem(cart,item2);

await cartSevice.displayCart(cart);

console.log("Shopee Subtota: ")
await cartSevice.calcItem(cart);
