import { model, Schema } from "mongoose";

import { ITag } from "@/Interface/Post/ITag";

const TagSchema = new Schema<ITag>(
  {
    // postId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default model<ITag>("Tag", TagSchema);
