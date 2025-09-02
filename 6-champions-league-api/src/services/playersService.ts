import { Request } from "express";
import {
  deletePlayerByIdRepository,
  insertPlayerRepository,
  selectPlayerByIdRepository,
  selectPlayersRepository,
  updatePlayerByIdRepository,
} from "../repositories/playersRepository";
import { StatusCodes } from "../utils/http-statusCode";

export const getPlayerService = async () => {
  const content = await selectPlayersRepository();
  const message = { message: "No players found" };

  const { statusCode, body } =
    content["champions_league_players"]?.length > 0
      ? StatusCodes.OK(content)
      : StatusCodes.OK(content, message);

  return {
    statusCode,
    body,
  };
};

export const getPlayerByIdService = async (id: number) => {
  const content = await selectPlayerByIdRepository(id);

  const { statusCode, body } = content
    ? StatusCodes.OK(content)
    : StatusCodes.NOT_FOUND();

  return {
    statusCode,
    body,
  };
};

export const postPlayerService = async (headerBody: Request["body"]) => {
  const exists = await selectPlayerByIdRepository(headerBody.id);

  if (exists) {
    const { statusCode, body } = StatusCodes.BAD_REQUEST();
    return {
      statusCode,
      body,
    };
  }

  const content = await insertPlayerRepository(headerBody);

  const { statusCode, body } = StatusCodes.CREATED(content);

  return {
    statusCode,
    body,
  };
};

export const patchPlayerByIdService = async (
  id: number,
  headerBody: Request["body"]
) => {
  const content = await updatePlayerByIdRepository(id, headerBody);

  const { statusCode, body } = content
    ? StatusCodes.OK(content)
    : StatusCodes.NOT_FOUND();

  return {
    statusCode,
    body,
  };
};

export const deletePlayerByIdService = async (id: number) => {
  const exists = await selectPlayerByIdRepository(id);
  const message = { message: "Player deleted successfully" };

  if (!exists) {
    const { statusCode, body } = StatusCodes.NOT_FOUND();
    return {
      statusCode,
      body,
    };
  }

  const content = await deletePlayerByIdRepository(id);

  const { statusCode, body } = StatusCodes.OK(content, message);

  return {
    statusCode,
    body,
  };
};
