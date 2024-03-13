export default class Comment {
    readonly commentID: string;
    message: string;
    postID: number;
    parentCommentID: number;
    commentBYID: number;
    constructor(commentID: string, message: string, postID: number, parentCommentID: number, commentBYID: number);
}
