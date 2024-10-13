import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupportTicketTitle } from "../supportTicket/SupportTicketTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="supportTicket.id"
          reference="SupportTicket"
          label="Support Ticket"
        >
          <SelectInput optionText={SupportTicketTitle} />
        </ReferenceInput>
        <TextInput label="test" source="test" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};