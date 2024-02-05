const axios = require('axios');

function fetchFlowerData(param) {
    // defining endpoint
    const wikiEndPoint = "https://simple.wikipedia.org/w/api.php";
    const wikiParams = "?action=query"
    + "&prop=extracts" //an extract is the type of property being requested
    + "&exsentences=2" // requests the first two sentences from wikipedia page
    + "&exlimit=1" // ...
    + "&titles=" + param //tells the link which specific wikipedia page to get an extract from (changes based on the 'ele' param)
    + "&explaintext=1" //tells the API to provide the content in plain text (instead of html code or other formats that can't be read by text-to-speech)
    + "&format=json" //requests the data in JSON format
    + "&formatversion=2" //makes the JSON properties easier to navigate using dot notation
    + "&origin=*"; //Omitting this param causes a CORS error

    const wikiLink = wikiEndPoint + wikiParams;
    console.log(wikiLink);

    var wikiConfig = {
        timeout: 6500
    };

    async function getJsonResponse(url, config)
    {
        const res = await axios.get(url, config);
        return res.data;
    }
    return getJsonResponse(wikiLink, wikiConfig).then(result => {
        return result;
    }).catch(error => {
        console.log("an error has occured: "+ error);
        return null;
    })
}
module.exports = { fetchFlowerData }