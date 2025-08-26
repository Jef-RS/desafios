import { podcastsRepository } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/statuscode";

export const filterEpisodiesService = async (url: string | undefined) => {
  const queryString = url?.split("?podcast=")[1].split("&").join(" ") || "";
  const body = await podcastsRepository(queryString);
  const statusCode = body.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  return {
    statusCode,
    body,
  };
};
