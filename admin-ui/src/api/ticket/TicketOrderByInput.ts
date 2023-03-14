import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
