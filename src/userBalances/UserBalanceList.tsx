import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField, Filter, TextInput, ReferenceField, SelectInput
} from 'react-admin';

const UserIncomeFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="搜索：角色名" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);



export const UserBalanceList = (props: any) => {
    return (
        <List filters={<UserIncomeFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <ReferenceField source="user_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <TextField source="fund" />
                <TextField source="may_fund" />
                <TextField source="coming_fund" />
                <TextField source="charging_fund" />
                <DateField source="updated_at" showTime />
            </Datagrid>
        </List>
    );
}