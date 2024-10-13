export type Ticket = {
  createdAt: Date;
  id: string;
  test?: "Test" | null;
  ticket?: Ticket | null;
  updatedAt: Date;
  user?: Array<Ticket>;
};
