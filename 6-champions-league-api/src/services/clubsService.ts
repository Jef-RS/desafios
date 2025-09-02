import { selectClubsRepository } from "../repositories/clubsRepository";
import { StatusCodes } from "../utils/http-statusCode";

export const getClubsService = async () => {
  const content = await selectClubsRepository();
  const message = { message: "No clubs found" };

  const { statusCode, body } =
    content?.length > 0
      ? StatusCodes.OK(content)
      : StatusCodes.OK(content, message);

  return { statusCode, body };
};
