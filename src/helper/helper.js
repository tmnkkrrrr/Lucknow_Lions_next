// const host = 'http://localhost:8010';
const host = 'https://lucknowlions_web_back.techharmony.co.in';
const v = 'v1';


export const fetchBrokersLinks = () => {
    return new Promise((resolve, reject) => {
        fetch(`${host}/api/${v}/website/brokersLing`)
            .then(response => {
                if (!response.ok) {
                    return [];
                    // throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};


export const sendContactUsEnquiry = (contactData) => {
    return new Promise((resolve, reject) => {
        fetch(`${host}/api/${v}/website/contact_us`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData),
        })
            .then(response => {
                if (!response.ok) {
                    // Handle non-2xx responses
                    return response.text().then(text => {
                        throw new Error(text || 'Network response was not ok');
                    });
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};


export const logAPIRequest = async (response) => {
    // await fs.appendFile('api-logs.txt', JSON.stringify(response, null, 2) + '\n\n');
    console.log(response)
}