import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  likedByUser?: StringNullableFilter;
  likedTweet?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
