import Note from "../db/models/NoteSchema";
import { Response, NextFunction } from "express";
import GenericError from "../helpers/GenericError";
import { NoteRequest } from "interfaces/NoteRequest";
import { isValidId } from "../helpers/utils";

class NoteController {
  createNewNote = async (
    req: NoteRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, note } = req.body;
      const isCreated = await Note.create({ title, note });
      if (!isCreated)
        next(
          new GenericError("Something went wrong while creating the note", 500)
        );
      else res.json(isCreated);
    } catch (error: any) {
      next(new GenericError("DB" + error.message, 500));
    }
  };

  getOneNote = async (req: NoteRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!isValidId(id))
        next(
          new GenericError(
            "The ID is incorrect please make sure to use the correct ID",
            404
          )
        );
      const note = await Note.findById(id);
      if (!note)
        next(new GenericError("The note you want dose not exists", 404));
      else res.json(note);
    } catch (error: any) {
      next(new GenericError("DB " + error.message, 500));
    }
  };
  getAllNotes = async (_: NoteRequest, res: Response, next: NextFunction) => {
    try {
      const notes = await Note.find();
      if (!notes.length) next(new GenericError("The note table is empty", 404));
      else res.json(notes);
    } catch (error: any) {
      next(new GenericError("DB " + error.message, 500));
    }
  };

  updateNote = async (req: NoteRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!isValidId(id))
        next(
          new GenericError(
            "The ID is incorrect please make sure to use the correct ID",
            404
          )
        );
      const { title, note, status } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(id, {
        title,
        note,
        status,
      });
      if (!updatedNote)
        next(
          new GenericError("The note you want to update dose not exists", 404)
        );
      else res.json({ updated: true });
    } catch (error: any) {
      next(new GenericError("DB " + error.message, 500));
    }
  };
  deleteNote = async (req: NoteRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!isValidId(id))
        next(
          new GenericError(
            "The ID is incorrect please make sure to use the correct ID",
            404
          )
        );
      const isDeleted = await Note.findByIdAndDelete(id);
      if (!isDeleted)
        next(
          new GenericError("The note you want to delete dose not exists", 404)
        );
      else res.json({ deleted: true });
    } catch (error: any) {
      next(new GenericError("DB " + error.message, 500));
    }
  };
}

export default new NoteController();
