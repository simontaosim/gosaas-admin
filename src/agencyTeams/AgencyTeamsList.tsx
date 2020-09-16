import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,BooleanField,ReferenceField
} from 'react-admin';

const AgencyTeamFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：队长 | 合伙人" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);

export const AgencyTeamsList = (props:any) => (
    <List  filters={<AgencyTeamFilter />} sort={{ field: 'id', order: 'DESC' }} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="updated_at" showTime />
            {/* <NumberField source="LeaderID" />
             */}
              <ReferenceField  source="leader_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
            <NumberField source="member_count" />
            <NumberField source="team_performance" />
            <BooleanField source="team_prize_qualification" />
            <NumberField source="team_prize_level" />
            <NumberField source="total_team_prize" />
        </Datagrid>
    </List>
);