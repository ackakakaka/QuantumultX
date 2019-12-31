/*
w3cschool VIP UNLOCK

^https:\/\/appapi\.w3cschool\.cn\/api\/myapp\/isLogin url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/w3cschool.js
*/

var body = $response.body;
var url = $request.url;
const path1 = '/api/myapp/isLogin';
let obj = JSON.parse(body);
if (url.indexOf(path1) != -1) {
 obj.viptype = "1";
 obj.viplevel = "6";
 obj.vipexpire = "2030-10-10 10-10-10";
 body = JSON.stringify(obj);
}
$done({body});
