import { podcastsRepository } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/statuscode";
import { PodcastTransferModel } from "../models/PodcastTransferModel";

export const listEpisodiesService = async (): Promise<PodcastTransferModel> => {
  const body = podcastsRepository();

  const statusCode = body.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  return {
    statusCode,
    body,
  };
};
