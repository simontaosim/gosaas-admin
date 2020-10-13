import { HttpError } from 'react-admin';

// const apiUrl = 'http://zhujietong.com:8080/api/v1';
const apiUrl = 'http://127.0.0.1:8080/api/v1';

export default {
    // called when the user attempts to log in
    login: ({ user_key, password, auth_type, mobile, mobile_sms }:any) => {
        const request = new Request(`${apiUrl}/auth`, {
            method: 'POST',
            body: JSON.stringify({ user_key, password, auth_type, mobile, mobile_sms  }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

            return new Promise(
                (resolve: any, reject: any) => {
                    fetch(request)
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
                        localStorage.setItem('token', json.id)
                        return resolve({
                            data: { id: json.id },
                        })
                    }).catch(error=>{
                            reject(error)
                        
                    })  
                }
            )
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }:any) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    sendSMS: () => Promise.resolve(),
};