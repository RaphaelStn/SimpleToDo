import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("task", taskSchema);