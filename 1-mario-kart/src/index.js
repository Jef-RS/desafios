const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

async function getRandomTrack() {
  //Determina o tipo de bloco que os jogadores irao se enfrentar
  const randomValue = Math.random();
  let track;

  if (randomValue < 0.33) track = "RETA";
  else if (randomValue > 0.66) track = "CURVA";
  else track = "CONFRONTO";

  return track;
}

async function getDrawnAmount() {
  //Sorteia o valor a ser somado com o atributo do personagem
  const value = Math.floor(Math.random() * 6) + 1;
  return value;
}

async function getRaceScore(
  player1,
  player2,
  track,
  player1Block,
  player2Block
) {
  //Gera os dados da corrida
  const diceValuePlayer1 = await getDrawnAmount();
  const diceValuePlayer2 = await getDrawnAmount();

  const resultPlayer1 = diceValuePlayer1 + player1Block;
  const resultPlayer2 = diceValuePlayer2 + player2Block;

  console.log(
    `${player1.NOME} 🎲 rolou um dado de ${track} ${diceValuePlayer1} + ${player1Block} = ${resultPlayer1}`
  );
  console.log(
    `${player2.NOME} 🎲 rolou um dado de ${track} ${diceValuePlayer2} + ${player2Block} = ${resultPlayer2}`
  );

  if (resultPlayer1 > resultPlayer2 && track !== "confronto") {
    console.log(`${player1.NOME} marcou 1 ponto`);
    player1.PONTOS++;
  } else if (resultPlayer2 > resultPlayer1 && track !== "confronto") {
    console.log(`${player2.NOME} marcou 1 ponto`);
    player2.PONTOS++;
  } else if (resultPlayer1 > resultPlayer2 && track === "confronto") {
    console.log(`${player1.NOME} venceu o confronto !`);
    console.log(`${player2.NOME} perdeu 1 ponto 🐢`);
    if (player2.PONTOS > 0) player2.PONTOS--;
  } else if (resultPlayer2 > resultPlayer1 && track === "confronto") {
    console.log(`${player2.NOME} venceu o confronto !`);
    console.log(`${player1.NOME} perdeu 1 ponto 🐢`);
    if (player1.PONTOS > 0) player1.PONTOS--;
  } else console.log("");
}

(async function main() {
  console.log(
    `🏁🏎️ Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );

  for (let round = 0; round <= 4; round++) {
    console.log(`🏁 Rodada ${round + 1}`);
    const track = await getRandomTrack();
    console.log(`Bloco: ${track}`);

    if (track === "CONFRONTO") {
      console.log(`${player1.NOME} confrontou com ${player2.NOME} 🥊`);
    }

    if (track === "RETA")
      await getRaceScore(
        player1,
        player2,
        "reta",
        player1.VELOCIDADE,
        player2.VELOCIDADE
      );
    else if (track === "CURVA")
      await getRaceScore(
        player1,
        player2,
        "manobrabilidade",
        player1.MANOBRABILIDADE,
        player2.MANOBRABILIDADE
      );
    else if (track === "CONFRONTO")
      await getRaceScore(
        player1,
        player2,
        "confronto",
        player1.PODER,
        player2.PODER
      );

    console.log("-------------------------------------");
  }
  console.log("Resultado final: ");
  console.log(`${player1.NOME}: ${player1.PONTOS} ponto(s)`);
  console.log(`${player2.NOME}: ${player2.PONTOS} ponto(s) \n`);

  if (player1.PONTOS > player2.PONTOS) {
    console.log(`${player1.NOME} venceu a corrida 🎉🏆`);
  } else if (player2.PONTOS > player1.PONTOS) {
    console.log(`${player2.NOME} venceu a corrida 🎉🏆`);
  } else console.log(`A corrida terminou empatada ❌`);
})();
