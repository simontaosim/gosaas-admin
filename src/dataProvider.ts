import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { HttpError } from 'react-admin';
import { resolve } from 'dns';


const apiUrl = 'http://localhost:8080/api/v1';
const httpClient = fetchUtils.fetchJson;


export default {
    getList: (resource: any, params: { pagination: { page: any; perPage: any; }; sort: { field: any; order: any; }; filter: any; }) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }: any) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    getOne: (resource: any, params: { id: any; }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }: any) => ({
            data: json,
        })),

    getMany: (resource: any, params: { ids: any; }) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }: any) => ({ data: json }));
    },

    getManyReference: (resource: any, params: { pagination: { page: any; perPage: any; }; sort: { field: any; order: any; }; filter: any; target: any; id: any; }) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }: any) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource: any, params: { id: any; data: any; }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }: any) => ({ data: json })),

    updateMany: (resource: any, params: { ids: any; data: any; }) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }: any) => ({ data: json }));
    },

    create: (resource: any, params: { data: any; }) =>
        new Promise(
            (resolve: any, reject: any) => {
                fetch(`${apiUrl}/${resource}`, {
                    method: 'POST',
                    body: JSON.stringify(params.data),
                })
                .then(response =>
                    response.text().then(text => ({
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers,
                        body: text,
                    }))
                )
                .then(({ status, statusText, headers, body }: any) => {
                    let json;
                    try {
                        json = JSON.parse(body);
                    } catch (e) {
                        // not json, no big deal
                    }
                    
                    if (status < 200 || status >= 300) {
                        return reject(
                            new HttpError(
                                (json && json.message) || statusText,
                                status,
                                json
                            )
                        );
                    }
                    return resolve({
                        data: { ...params.data, id: json.id },
                    })
                })
            }
        )
    ,

    delete: (resource: any, params: { id: any; }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }: any) => ({ data: json })),

    deleteMany: (resource: any, params: { ids: any; data: any; }) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }: any) => ({ data: json }));
    },
}