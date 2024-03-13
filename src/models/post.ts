import { Schema, model, Document } from "mongoose";

interface IPost extends Document {
  categoryID: string;
  blogID: string;
  title: string;
  content: string;
  authorID: string;
  summary?: string;
  statusPost?: string;
  updatedAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  comments?: string[];
  tags?: string[];
}

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
    categoryID: { type: String, required: true, ref: "Category" },
    blogID: { type: String, ref: "Blog" },
    comments: [{ type: String, ref: "Comment" }],
    tags: [{ type: String, ref: "Tag" }],
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export default model<IPost>("Post", PostSchema);
