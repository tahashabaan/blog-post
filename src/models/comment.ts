import { Schema, model, Document } from "mongoose";

import { IComment } from "@/Interface";

const CommentSchema = new Schema<IComment>(
  {
    // id: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    user: { type: String, ref: "User", required: true },

    postID: { type: String, required: true, ref: "Post" },
    commentBYID: { type: String, required: true, ref: "User" },
    parentCommentID: { type: String },
    statusComment: {
      type: String,
      enum: ["pending", "sending", "rejected", "published"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model<IComment>("Comment", CommentSchema);
