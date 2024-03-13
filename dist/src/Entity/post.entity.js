"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["canceled"] = 0] = "canceled";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["published"] = 2] = "published";
})(Status || (Status = {}));
class Post {
    constructor(postID, title, content, summary, 
    //forigen key to  blog
    blogID, 
    //forigen key to publisher
    publisherID, statusPost) {
        this.postID = postID;
        this.title = title;
        this.content = content;
        this.summary = summary;
        this.blogID = blogID;
        this.publisherID = publisherID;
        this.statusPost = statusPost;
    }
}
exports.default = Post;
//# sourceMappingURL=post.entity.js.map