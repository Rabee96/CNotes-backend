import { NextFunction, Request, Response, Router } from "express";
import GenericError from "helpers/GenericError";
import noteRouter from "./noteRouter";

const router = Router();

router.use("/note", noteRouter);

router.use((_req, res, _next) => {
  res.status(404).json({
    message:
      "Sorry there is no such API, read the API documentation to find your way back home :)",
  });
});
router.use((err: unknown, _: Request, res: Response, _next: NextFunction) => {
  const exception = err as GenericError;
  res.status(exception.status || 500).json({
    statusCode: exception.status || 500,
    error:
      exception.name === "GenericError"
        ? exception.message
        : "Internal Server Error",
  });
});

export default router;
