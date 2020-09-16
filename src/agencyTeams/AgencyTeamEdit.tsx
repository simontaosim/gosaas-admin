import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    NumberInput,
    BooleanInput,
    SelectInput
} from 'react-admin'

export const AgencyTeamEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="leader_id" reference="users"><SelectInput optionText="username" disabled /></ReferenceInput>
            <NumberInput source="member_count" disabled  />
            <NumberInput source="team_performance" disabled  />
            <BooleanInput source="team_prize_qualification" />
        </SimpleForm>
    </Edit>
);