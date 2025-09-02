import { Request, Response } from "express";
import { getClubsService } from "../services/clubsService";

export const getClubs = async (req: Request, res: Response) => {
  const { statusCode, body } = await getClubsService();
  res.status(statusCode)?.json(body);
};
