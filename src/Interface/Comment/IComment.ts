export interface IComment {
  // blogID: Number;
  message: string;
  postID: string;
  parentCommentID?: string;
  commentBYID: string;
  statusComment?: string;
}
