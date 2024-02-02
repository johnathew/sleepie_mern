import { InferSchemaType, Schema, model } from "mongoose";

const charmSchema = new Schema(
  {
    type: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);

type Charm = InferSchemaType<typeof charmSchema>;

export default model<Charm>("Charm", charmSchema);
