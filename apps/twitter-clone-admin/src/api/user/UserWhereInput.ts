import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  userEmail?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  userUsername?: StringNullableFilter;
  username?: StringFilter;
};
