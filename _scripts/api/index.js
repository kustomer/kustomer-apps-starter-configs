import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

class Api {
    constructor() {
        this.baseUrl = process.env.API_BASE_URL;
        this.apiToken = process.env.API_TOKEN;
    }

    async postAppToOrg(appDefinition) {
        const bearer = `Bearer ${this.apiToken}`;
        const url = `${this.baseUrl}/v1/apps/available`;
        const init = {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appDefinition),
        };

        try {
            const response = await fetch(url, init);
            if (!response.ok) {
                const errors = await response.body.errors;
                console.error(JSON.stringify(errors, null, 2));
            }

            const data = await response.json();
            console.log(JSON.stringify(data, null, 2));
            return data;

        } catch (e) {
            console.error('Error(s): ', JSON.stringify(e, null, 2));
            process.exit(1);
        }
    }
};

module.exports = new Api();
