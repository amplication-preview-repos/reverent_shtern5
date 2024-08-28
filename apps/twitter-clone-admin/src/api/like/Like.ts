import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  likedByUser: string | null;
  likedTweet: string | null;
  updatedAt: Date;
  user?: User | null;
};
