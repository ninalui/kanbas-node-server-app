import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  number: { type: String },
  name: { type: String, required: true },
  startDate: Date,
  endDate: Date,
  department: { type: String, default: "New Department" },
  credits: { type: Number, default: 4 },
  description: String,
},
  { collection: "courses" }
);

courseSchema.pre("save", async function (next) {
  if (this.isNew) {
    const count = await this.constructor.countDocuments();
    this.number = `WD${count + 1}`;
  }
  next();
});

export default courseSchema;
