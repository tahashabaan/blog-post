import { model, Schema } from "mongoose";
import { IBlog } from "@/Interface";

const BlogSchema = new Schema<IBlog>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    categories: [{ type: String, ref: "Category" }],
    tags: [{ type: String, ref: "Tag" }],
    image: { type: String },
    user: { type: String, ref: "User" },
  },
  { timestamps: true }
);

export default model<IBlog>("Blog", BlogSchema);
