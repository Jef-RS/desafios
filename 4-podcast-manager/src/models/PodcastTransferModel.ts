import { PodcastListModel } from "./PodcastListModel";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastListModel[];
}
