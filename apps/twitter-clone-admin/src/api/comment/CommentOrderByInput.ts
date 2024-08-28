import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetReference?: SortOrder;
  updatedAt?: SortOrder;
};
