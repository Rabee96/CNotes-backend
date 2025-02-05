import NoteController from "../controllers/NoteController";
import { Router } from "express";

const router = Router();

router.post("/", NoteController.createNewNote);
router.get("/", NoteController.getAllNotes);
router.get("/:id", NoteController.getOneNote);
router.patch("/:id", NoteController.updateNote);
router.delete("/:id", NoteController.deleteNote);

export default router;
