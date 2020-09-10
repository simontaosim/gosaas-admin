import * as React from 'react';
import {
    Edit, SimpleForm, TextInput
} from 'react-admin';

export const RoleEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);