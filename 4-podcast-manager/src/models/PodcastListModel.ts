export interface Episode {
  videoId: string;
  episode: string;
  podcastIcon: string;
  categories: string[];
  duration: string;
  url: string;
  cover: string;
}

export interface PodcastListModel {
  podcastName: string;
  episodies: Episode[];
}
