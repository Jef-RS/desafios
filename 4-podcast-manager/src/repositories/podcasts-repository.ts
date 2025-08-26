import fs from "fs";
import { PodcastListModel } from "../models/PodcastListModel";

export const podcastsRepository = (
  podcastName?: string
): PodcastListModel[] => {
  const data = fs.readFileSync(__dirname + "/podcasts-list.json", "utf-8");
  let jsonData = JSON.parse(data);

  if (podcastName) {
    jsonData = jsonData.filter((episode: PodcastListModel) =>
      episode.podcastName.toLowerCase().includes(podcastName.toLowerCase())
    );
  }
  return jsonData;
};
