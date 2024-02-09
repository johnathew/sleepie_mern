import { InferSchemaType, Schema, model } from "mongoose";

const charmSchema = new Schema(
  {
    type: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

// charmSchema.pre("save", function (next) {
//   this.slug = slugify(this.name);
//   next();
// });

// // function slugify(name: string) {
// //   return name
// //     .toLowerCase()
// //     .toString()
// //     .replace(/\s+/g, "-") // Replace spaces with -
// //     .replace(/[^\w\-]+/g, "") // Remove all non-word chars
// //     .replace(/\-\-+/g, "-") // Replace multiple - with single -
// //     .replace(/^-+/, "") // Trim - from start of text
// //     .replace(/-+$/, ""); // Trim - from end of text
// // }

type Charm = InferSchemaType<typeof charmSchema>;

export default model<Charm>("Charm", charmSchema);
