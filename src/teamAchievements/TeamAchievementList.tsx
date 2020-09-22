import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField, Filter, TextInput, BooleanField, ReferenceField
} from 'react-admin';

const TeamAchievementFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="搜索：队长 | 合伙人" source="q" alwaysOn />
        {/* <ReferenceInput label="Team" source="TeamId" reference="Teams" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);

export const TeamAchievementList = (props: any) => (
    <List filters={<TeamAchievementFilter />} sort={{ field: 'id', order: 'DESC' }} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="updated_at" showTime />

            <ReferenceField source="AgencyTeam.leader_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
            <NumberField source="performance" />
            <BooleanField source="is_appointed" />
        </Datagrid>
    </List>
);