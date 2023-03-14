import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketUpdateManyWithoutTicketsInput } from "./TicketUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  ticket?: TicketWhereUniqueInput | null;
  user?: TicketUpdateManyWithoutTicketsInput;
};
