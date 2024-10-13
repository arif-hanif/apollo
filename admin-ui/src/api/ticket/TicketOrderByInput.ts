import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  test?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
