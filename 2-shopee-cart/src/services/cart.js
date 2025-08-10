//Adicionar itens (produtos) ao carrinho
async function addItem(cart, item) {
  cart.push(...item);
}

//Listar todos os itens (produtos) do carrinho
async function listCartItens(itens) {
  console.log("📝 - Lista de Produtos do Carrinho");

  if (itens.length <= 0) {
    console.log("\n❌ Você ainda não tem nenhum item no carrinho ❌\n");
  }

  itens.forEach((item, index) => {
    const formattedIndex = index + 1;

    console.log(
      `${formattedIndex}.\nProduto: ${item.name} \nPreço: R$ ${
        item.price
      } \nQuantidade: ${
        item.quantity
      } \nSub-Total: R$ ${item.subTotal()}\n_______________________`
    );
  });
}

//Deletar item (produto) do carrinho (inclusive suas unidade)
async function deleteItem(itens, name) {
  const index = itens.findIndex((item) => item.name === name);

  if (index !== -1) {
    itens.splice(index, 1);
  }
}

//Remover um item (produto) especifico do carrinho (apenas as unidade e não o produto completo)
async function removeItem(itens, item) {
  const finder = await itens.findIndex((value) => value.name === item.name);
  if (finder === -1) {
    console.log("\n❌Item não encontrado!❌\n");
  }

  if (itens[finder].quantity > 1) itens[finder].quantity -= 1;
  else if (itens[finder].quantity === 1) itens.splice(finder, 1);
}

//Calcular o valor total dos itens (produtos)
async function totalPrice(cart) {
  let total = 0;
  cart.forEach((itens) => {
    total += itens.subTotal();
  });

  console.log(`Total: R$ ${total}`);
}

export { addItem, listCartItens, deleteItem, removeItem, totalPrice };
