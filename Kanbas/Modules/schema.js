import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  course: { type: String, required: true },
  lessons: [
    {
      id: String,
      name: String,
      description: String,
      module: String,
    },
  ],
},
  { collection: "modules" }
);

export default moduleSchema;