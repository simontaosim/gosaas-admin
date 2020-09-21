import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceField,SelectInput
} from 'react-admin';

const HouseUnitilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：企业名" source="q" alwaysOn />
       
    </Filter>
);


export const HouseUnitList = (props: any) => {
    return  (
        <List  filters={<HouseUnitilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="location" />
                <ReferenceField source="HouseUnitType.building_id" reference="buildings">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField source="house_unit_type_id" reference="house_unit_types">
                    <TextField source="name" />
                </ReferenceField>
            </Datagrid>
        </List>
    );
}