import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likedByUser?: SortOrder;
  likedTweet?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
