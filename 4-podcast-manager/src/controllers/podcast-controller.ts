import { IncomingMessage, ServerResponse } from "http";
import { listEpisodiesService } from "../services/list-episodes-service";
import { filterEpisodiesService } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/PodcastTransferModel";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await listEpisodiesService();

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content.body));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodiesService(req.url);

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
