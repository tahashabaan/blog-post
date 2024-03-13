import { model, Schema } from "mongoose";
import { IBlog } from "@/Interface/Blog/IBlog";

const BlogSchema = new Schema<IBlog>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    categories: [{ type: String, ref: "Category" }],
  },
  { timestamps: true }
);

export default model<IBlog>("Blog", BlogSchema);
