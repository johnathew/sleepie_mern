import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "An email address is required."],
    unique: true,
    select: false,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: false,
  },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
