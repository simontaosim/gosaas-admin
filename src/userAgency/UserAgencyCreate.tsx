import * as React from 'react';
import {
    Create, SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';



export const UserAgencyCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="parent_user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);