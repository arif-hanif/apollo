import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketUpdateManyWithoutTicketsInput } from "./TicketUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  test?: "Test" | null;
  ticket?: TicketWhereUniqueInput | null;
  user?: TicketUpdateManyWithoutTicketsInput;
};
