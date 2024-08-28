import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  comments?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  retweets?: SortOrder;
  updatedAt?: SortOrder;
};
