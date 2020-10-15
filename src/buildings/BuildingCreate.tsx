import * as React from 'react';
import {
    Create, TabbedForm, TextInput, FormTab, DateInput, NumberInput, BooleanInput, ReferenceManyField, Datagrid, TextField,
    FileInput, FileField, required, number, minValue, ReferenceInput, SelectInput, ReferenceArrayInput, AutocompleteArrayInput,
    SelectArrayInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'


export const BuildingCreate = (props: any) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="合同材料">
                <FileInput source="contract" accept="application/pdf">
                    <FileField source="src" title="title" />
                </FileInput>
                <FileInput source="documents" multiple accept="application/pdf">
                    <FileField source="src" title="title" />
                </FileInput>
                <TextInput source="breif" multiline />

            </FormTab>
            <FormTab label="基本信息">
                <TextInput source="name" validate={required()} />
                <TextInput source="alias_name" />
                <BooleanInput source="is_published" validate={required()} />
                <ReferenceInput source="firm_id" reference="firms"  >
                    <SelectInput optionText="name" optionValue="id" validate={required()} />
                </ReferenceInput>
                <TextInput source="sell_certificate" validate={required()} />
                <SelectArrayInput  source="price_range" choices={[
                    { id: 'music', name: '0.6万以下' },
                    { id: 'photography', name: '0.6万-1万' },
                    { id: 'programming', name: '1万-1.5万' },
                    { id: 'tech', name: '1.5万-2万' },
                    { id: 'sport', name: '2万-2.5万' },
                    { id: 'sport', name: '2万-2.5万' },
                    { id: 'sport', name: '2.5万-3万' },
                    { id: 'sport', name: '3万以上' },
                ]} />
                <Typography>销售价格</Typography>
                <Divider></Divider>

                <Typography variant="caption">请选择一种价格作为小程序楼盘详情主页面展示信息</Typography>
                <SelectInput source="main_show_price_type" choices={[
                    { id: 'average_meters_price', name: '参考均价' },
                    { id: 'meters_price_start', name: '单价起价' },
                    { id: 'total_price', name: '参考总价' },
                    { id: 'total_price_start', name: '总价起价' },
                ]} />
                <NumberInput source="average_meters_price" />
                <NumberInput source="meters_price_start" />
                <NumberInput source="total_price" />
                <NumberInput source="total_price_start" />

                <Divider></Divider>
                <Typography>项目地址</Typography>
                <SelectInput source="area" choices={[
                    { id: 'programming', name: '金牛区' },
                    { id: 'lifestyle', name: '高新区' },
                    { id: 'good', name: '成华区 '},
                    { id: 'ddd', name: '锦江区' },
                    { id: 'good', name: '眉山市 '},
                ]} />
                <TextInput  source="project_address" />
                <Divider></Divider>
                <TextInput  source="sell_address"/>
                <TextInput  source="address_point"/>
            </FormTab>
            <FormTab label="佣金方案">
                <RichTextInput source="body" validate={required()} addLabel={false} />
            </FormTab>
            <FormTab label="周边信息">
                <TextInput label="Password (if protected post)" source="password" type="password" />
                <DateInput label="Publication date" source="published_at" />
                <NumberInput source="average_note" validate={[number(), minValue(0)]} />
                <BooleanInput label="Allow comments?" source="commentable" defaultValue />
                <TextInput disabled label="Nb views" source="views" />
            </FormTab>

            <FormTab label="图片信息">

            </FormTab>
            <FormTab label="推荐设置">
                <TextInput label="Password (if protected post)" source="password" type="password" />
                <DateInput label="Publication date" source="published_at" />
                <NumberInput source="average_note" validate={[number(), minValue(0)]} />
                <BooleanInput label="Allow comments?" source="commentable" defaultValue />
                <TextInput disabled label="Nb views" source="views" />
            </FormTab>
            <FormTab label="人员配置">
                <ReferenceArrayInput source="zhuchang" reference="users" label="驻场管理人员">
                    <AutocompleteArrayInput optionText="username" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="fangkai" reference="users" label="房开人员">
                    <AutocompleteArrayInput optionText="username" />
                </ReferenceArrayInput>

            </FormTab>
        </TabbedForm>
    </Create>
);