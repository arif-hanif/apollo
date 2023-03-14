export type Ticket = {
  createdAt: Date;
  id: string;
  ticket?: Ticket | null;
  updatedAt: Date;
  user?: Array<Ticket>;
};
