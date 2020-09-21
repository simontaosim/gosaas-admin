import * as React from 'react';
import {
    Create, SimpleForm, NumberInput, ReferenceInput, AutocompleteInput, SelectInput, FormDataConsumer
} from 'react-admin';


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
            
            {/* <SelectInput emptyValue={0} source="achievement_type" choices={[
                { id: 0, name: '比例（百分比）' },
                { id: 1, name: '定额' },
            ]} /> */}
             {/* <FormDataConsumer>
                {({ formData, ...rest }:any) =>
                    {
                        
                        switch (formData.achievement_type) {
                            case 0:
                                
                                return  <NumberInput label="比例（%）" source="achievenment_ratio" />
                            case 1:
                                return  <NumberInput label="固定金额（元）" source="performance" />
                            default:
                                return  <></>
                        }
                    }
                }
            </FormDataConsumer> */}
        </SimpleForm>
    </Create>
);