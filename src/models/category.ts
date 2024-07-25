import { Schema, model, Document } from "mongoose";
import { ICategory } from "@/Interface";

const CategorySchema = new Schema<ICategory>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    blogID: { type: String, ref: "Blog" },
  },
  { timestamps: true }
);

export default model<ICategory>("Category", CategorySchema);
