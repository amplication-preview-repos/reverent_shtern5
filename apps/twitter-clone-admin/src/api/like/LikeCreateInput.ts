import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  likedByUser?: string | null;
  likedTweet?: string | null;
  user?: UserWhereUniqueInput | null;
};
