const uri = 'https://www.zillow.com/homedetails/1013-Zacarias-Dr-Leander-TX-78641/250925071_zpid/';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
    console.log(decodeURI(encoded));
    // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
    console.error(e);
}
