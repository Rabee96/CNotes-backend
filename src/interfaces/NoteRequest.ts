import { Request } from "express";
import { STATUS } from "./NoteInterface";

export interface NoteRequest extends Request {
  query: {
    name: string;
    limit?: string;
    offset?: string;
  };

  params: {
    id: string;
  };

  body: {
    title: string;
    note: string;
    status: STATUS;
    limit?: number;
    offset?: number;
    search?: string;
  };
}
