import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "likedByUser";

export const LikeTitle = (record: TLike): string => {
  return record.likedByUser?.toString() || String(record.id);
};
