import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  likedByUser?: string | null;
  likedTweet?: string | null;
  user?: UserWhereUniqueInput | null;
};
