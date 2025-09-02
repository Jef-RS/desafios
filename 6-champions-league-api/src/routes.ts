import { Router } from "express";
import {
  getPlayerById,
  getPlayers,
  patchPlayerById,
  postPlayer,
  deletePlayerById,
} from "./controllers/playersController";
import { getClubs } from "./controllers/clubsController";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);

router.post("/players", postPlayer);
router.patch("/players/:id", patchPlayerById);
router.delete("/players/:id", deletePlayerById);

router.get("/clubs", getClubs);

export default router;
