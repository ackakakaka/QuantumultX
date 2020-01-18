/*
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/photoshop.js

MITM:lcs-mobile-cops.adobe.io

*/

let obj = JSON.parse($response.body)
let pro= obj["mobileProfile"];
pro["profileStatus"] = "PROFILE_AVAILABLE";
pro["legacyProfile"] = "{}";
pro["relationshipProfile"] = "[]";
$done({body: JSON.stringify(obj)})