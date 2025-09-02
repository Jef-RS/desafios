import fs from "fs";
import path from "path";
import { PlayerModel } from "../models";

export const selectPlayersRepository = async () => {
  const filePath = path.join(__dirname, "..", "data", "playersData.json");
  const players = fs.readFileSync(filePath, "utf-8");
  const playersData = JSON.parse(players);

  return playersData;
};

export const selectPlayerByIdRepository = async (id: number) => {
  const filePath = path.join(__dirname, "..", "data", "playersData.json");
  const players = fs.readFileSync(filePath, "utf-8");
  const playersData = JSON.parse(players);

  const player = playersData["champions_league_players"].find(
    (p: PlayerModel) => p.id === id
  );

  return player;
};

export const insertPlayerRepository = async (player: PlayerModel) => {
  const filePath = path.join(__dirname, "..", "data", "playersData.json");
  const players = fs.readFileSync(filePath, "utf-8");
  const playersData = await JSON.parse(players);

  playersData["champions_league_players"].push(player);

  fs.writeFileSync(filePath, JSON.stringify(playersData));

  return player;
};

export const updatePlayerByIdRepository = async (
  id: number,
  player: PlayerModel
) => {
  const filePath = path.join(__dirname, "..", "data", "playersData.json");
  const players = fs.readFileSync(filePath, "utf-8");
  const playersData = await JSON.parse(players);

  // Localiza o indice do jogador a ser atualizado
  const index = playersData["champions_league_players"].findIndex(
    (p: PlayerModel) => p.id === id
  );

  // Se nao localizar retorna null
  if (index === -1) return null;

  // Atualiza os dados do jogador
  playersData["champions_league_players"][index] = {
    ...playersData["champions_league_players"][index],
    ...player,
  };

  fs.writeFileSync(filePath, JSON.stringify(playersData));

  return playersData["champions_league_players"][index];
};

export const deletePlayerByIdRepository = async (id: number) => {
  const filePath = path.join(__dirname, "..", "data", "playersData.json");
  const players = fs.readFileSync(filePath, "utf-8");
  const playersData = await JSON.parse(players);

  const index = playersData["champions_league_players"].findIndex(
    (p: PlayerModel) => p.id === id
  );

  if (index === -1) return null;

  const deletedPlayer = playersData["champions_league_players"][index];

  playersData["champions_league_players"].splice(index, 1);

  fs.writeFileSync(filePath, JSON.stringify(playersData));

  return deletedPlayer;
};
