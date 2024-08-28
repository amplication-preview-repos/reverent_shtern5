import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  userPassword: string | null;
  userRoles?: Array<"Option1">;
  userUsername: string | null;
  username: string;
};
