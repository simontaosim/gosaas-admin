import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceField,SelectInput
} from 'react-admin';

const HouseUnitTypeFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：企业名" source="q" alwaysOn />
       
    </Filter>
);


export const HouseUnitTypeList = (props: any) => {
    return  (
        <List  filters={<HouseUnitTypeFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="name" />
                <ReferenceField source="building_id" reference="buildings">
                    <TextField source="name" />
                </ReferenceField>
                <NumberField source="storage" />
            </Datagrid>
        </List>
    );
}