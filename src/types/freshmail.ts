export enum Status {
  active = 1,
  awaitingActivation = 2,
  inactive = 3,
  unsubscribed = 4,
  softReject = 5,
  hardReject = 6,
}

export type FreshmailConfig = {
  email: string;
  list: string;
  status?: Status;
  confirm?: 0 | 1;
};
