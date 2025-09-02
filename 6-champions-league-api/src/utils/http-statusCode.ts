import { PlayerModel } from "../models/index";

export const StatusCodes = {
  OK: (data: PlayerModel, message?: { message: string }) => ({
    statusCode: 200,
    body: message ?? data,
  }),
  CREATED: (data: PlayerModel, message?: { message: string }) => ({
    statusCode: 201,
    body: message ?? { message: "Resource created successfully" },
  }),
  NO_CONTENT: () => ({
    statusCode: 204,
    body: null,
  }),
  BAD_REQUEST: (message?: { message: string }) => ({
    statusCode: 400,
    body: message ?? { message: "Bad request" },
  }),
  NOT_FOUND: (message?: { message: string }) => ({
    statusCode: 404,
    body: message ?? { message: "Resource not found" },
  }),
  INTERNAL_SERVER_ERROR: (message?: { message: string }) => ({
    statusCode: 500,
    body: message ?? { message: "Internal server error" },
  }),
};
