import { IncomingMessage, ServerResponse } from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";

export const app = async (req: IncomingMessage, res: ServerResponse) => {
  const baseUrl = req.url?.split("?")[0] || "";

  const route = {
    [Routes.LIST]: (req: IncomingMessage, res: ServerResponse) =>
      getListEpisodes(req, res),
    [Routes.FILTER]: (req: IncomingMessage, res: ServerResponse) =>
      getFilterEpisodes(req, res),
  };

  const isGet = req.method === "GET" && baseUrl;

  await route[isGet as keyof typeof route]?.(req, res);
};
