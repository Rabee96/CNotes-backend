import { STATUS } from "../../interfaces/NoteInterface";
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title of the note is required"],
    trim: true,
  },
  note: {
    type: String,
    required: [true, "The body of the note is required"],
    trim: true,
  },
  status: {
    type: String,
    required: [true, "The status of the note is required"],
    enum: STATUS,
    default: "TO_DO",
  },
});

const Note = mongoose.model("Notes", noteSchema);

export default Note;
