import { Request, Response } from "express";
import {
  deletePlayerByIdService,
  getPlayerByIdService,
  getPlayerService,
  patchPlayerByIdService,
  postPlayerService,
} from "../services/playersService";

export const getPlayers = async (req: Request, res: Response) => {
  const { statusCode, body } = await getPlayerService();
  res.status(statusCode)?.json(body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { statusCode, body } = await getPlayerByIdService(Number(id));
  res.status(statusCode)?.json(body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const { statusCode, body } = await postPlayerService(req.body);
  res.status(statusCode)?.json(body);
};

export const patchPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { statusCode, body } = await patchPlayerByIdService(
    Number(id),
    req.body
  );
  res.status(statusCode)?.json(body);
};

export const deletePlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { statusCode, body } = await deletePlayerByIdService(Number(id));
  res.status(statusCode)?.json(body);
};
