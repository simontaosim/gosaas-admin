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


const StatusField = ({ source, record = {} }: any) => {
    return (
        <span>
            {
                record[source] === 0 ?
                    "待入账"
                    :
                    record[source] === 1 ?  "已入账" : "已取消"
            }
        </span>
    )
}

export const UserIncomeList = (props: any) => {
    return (
        <List filters={<UserIncomeFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <ReferenceField source="UserBalance.user_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <TextField source="fund" />
                <StatusField source="status" />
                <TextField source="note" />
                <DateField source="updated_at" showTime />
            </Datagrid>
        </List>
    );
}