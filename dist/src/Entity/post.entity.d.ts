declare enum Status {
    canceled = 0,
    pending = 1,
    published = 2
}
export default class Post {
    readonly postID: string;
    title: string;
    content: string;
    summary: string;
    blogID: number;
    publisherID: number;
    statusPost: Status;
    constructor(postID: string, title: string, content: string, summary: string, blogID: number, publisherID: number, statusPost: Status);
}
export {};
