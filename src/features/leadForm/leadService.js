export const submitLead = async (dataPayload) => {
    // Google Apps Script URL
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbykL0ZjKcN9B1abygAB9zFTBU5TvF2F138bbgiqo6is6xStDWyht-fLASp_-o4sKbqK/exec';

    // We use no-cors to prevent preflight errors for Google Scripts
    // Warning: response is opaque so we assume success if no native fetch error thrown
    return fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPayload)
    });
};
