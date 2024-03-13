"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    constructor(commentID, message, 
    //forigen key to  post
    postID, 
    //forigen key to itsel
    parentCommentID, 
    //forigen key to publisher
    commentBYID) {
        this.commentID = commentID;
        this.message = message;
        this.postID = postID;
        this.parentCommentID = parentCommentID;
        this.commentBYID = commentBYID;
    }
}
exports.default = Comment;
//# sourceMappingURL=comment.entity.js.map