class DataManagementApi {

    static getAllData() {
        const headers = this.requestHeaders();
        const request = new Request(`${process.env.API_HOST}/api/`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createData(data) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/api/`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ data: data })
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static editData(data) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/api/${data.id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({ data: data })
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteData(data) {
        const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
        const request = new Request(`${process.env.API_HOST}/api/${data.id}`, {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default DataManagementApi;