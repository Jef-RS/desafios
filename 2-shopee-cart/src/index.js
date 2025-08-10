import {
  addItem,
  deleteItem,
  listCartItens,
  removeItem,
  totalPrice,
} from "./services/cart.js";
import { createItem } from "./services/item.js";

const nintendo = {
  name: "Nintendo Switch",
  price: 2000,
  quantity: 8,
};

const playstation = {
  name: "PlayStation 5",
  price: 3500,
  quantity: 1,
};

const cart = [];

console.log("🛒 - Carrinho da Shopee\n");

const item1 = await createItem(nintendo);
const item2 = await createItem(playstation);

await addItem(cart, [item1, item2]);
console.log(`✅ ${item1.name} adicionado ao carrinho!`);
console.log(`✅ ${item2.name} adicionado ao carrinho!\n`);

// await deleteItem(cart, "PlayStation 5");
// await deleteItem(cart, "Nintendo Switch");

await removeItem(cart, item1);

await listCartItens(cart);

await totalPrice(cart);
