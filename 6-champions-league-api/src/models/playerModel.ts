import { StatisticModel } from "./statisticModel";

export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: StatisticModel;
}
