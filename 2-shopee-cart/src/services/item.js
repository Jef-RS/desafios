async function createItem(item) {
  return {
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    subTotal: () => item.price * item.quantity,
  };
}

export { createItem };
