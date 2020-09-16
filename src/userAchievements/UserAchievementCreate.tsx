import * as React from 'react';
import {
    Create, SimpleForm, NumberInput, ReferenceInput, AutocompleteInput
} from 'react-admin';



export const UserAchievementCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm   redirect="list">
            <NumberInput source="performance"  />
            <ReferenceInput source="user_id" reference="users">
                <AutocompleteInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);