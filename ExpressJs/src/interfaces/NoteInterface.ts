export enum STATUS {
  TODO = "TO_DO",
  INPROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export default interface INote {
  uuid: string;
  title: string;
  note: string;
  status: STATUS;
}
