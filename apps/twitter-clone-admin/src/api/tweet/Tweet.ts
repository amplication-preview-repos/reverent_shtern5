export type Tweet = {
  author: string | null;
  comments: number | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes: number | null;
  retweets: number | null;
  updatedAt: Date;
};
