const url = "https://script.google.com/macros/s/AKfycbykL0ZjKcN9B1abygAB9zFTBU5TvF2F138bbgiqo6is6xStDWyht-fLASp_-o4sKbqK/exec";

fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ businessName: "Spirex Final Test", category: "Retail", mobile: "9876543210" })
})
    .then(async res => {
        console.log("Status:", res.status);
        console.log("Headers:", res.headers);
        const text = await res.text();
        console.log("Response:", text);
    })
    .catch(console.error);
