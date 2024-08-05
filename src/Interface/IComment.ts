export default interface IComment {
  // blogID: Number;
  message: string;
  postID: string;
  // user: string;
  parentCommentID?: string;
  commentBYID: string;
  statusComment?: string;
}
