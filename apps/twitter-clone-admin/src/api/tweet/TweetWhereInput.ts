import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  comments?: IntNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  retweets?: IntNullableFilter;
};
