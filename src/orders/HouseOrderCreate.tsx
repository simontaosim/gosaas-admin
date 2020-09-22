import * as React from 'react';
import {
    Create, SimpleForm, NumberInput, ReferenceInput, AutocompleteInput, SelectInput, FormDataConsumer
} from 'react-admin';

const optionRenderer = (choice:any) => `${choice.name},分佣金 ${choice.achievement_type===0? choice.achievenment_ratio+"%": choice.performance+"元"}`;
export const HouseOrderCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput source="price" />
            <ReferenceInput source="user_id" reference="users">
                <AutocompleteInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="agency_id" reference="users">
                <AutocompleteInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="building_id" reference="buildings">
                <AutocompleteInput optionText={optionRenderer} />
            </ReferenceInput>
            
            
        </SimpleForm>
    </Create>
);