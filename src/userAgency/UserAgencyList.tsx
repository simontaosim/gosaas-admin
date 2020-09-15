import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField, 
    Filter, TextInput, ReferenceField, ReferenceArrayField,
    SingleFieldList, ChipField
} from 'react-admin';

const UserAgencyFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="搜索：用户，手机" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);


export const UserAgencyList = (props: any) => {
    return (
        <List filters={<UserAgencyFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="show" >
                <NumberField source="id" />
                <ReferenceField source="user_id" reference="users" >
                    <TextField source="username" />
                </ReferenceField>
                <ReferenceField  source="parent_user_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>

                <ReferenceArrayField  reference="users" source="leader_ids">
                    <SingleFieldList>
                        <ChipField source="username" />
                    </SingleFieldList>
                </ReferenceArrayField>
                {/* <TextField source="leader_ids" /> */}
                <DateField source="updated_at" showTime />
            </Datagrid>
        </List>
    );
}