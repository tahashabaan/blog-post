import { Schema, model, Document } from "mongoose";

import { IPost } from "@/Interface";

const PostSchema = new Schema<IPost>(
  {
    // postID: { type: string, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String },
    authorID: { type: String, required: true, ref: "User" },
    statusPost: {
      type: String,
      required: true,
      enum: ["pending", "sending", "rehected", "published"],
      default: "pending",
    },
    user: { type: String, ref: "User", required: true }, // who write it post can know
    categoryID: { type: String, required: true, ref: "Category" }, // category of post econom, criem or sport
    blogID: { type: String, ref: "Blog" }, // home page can post include it
    comments: [{ type: String, ref: "Comment" }],
    tags: { type: [String] },
    // coments on post can do
    // tags: [{ type: String, ref: "Tag" }],
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export default model<IPost>("Post", PostSchema);
