/*
w3cschool VIP UNLOCK

^http?:\/\/appapi\.w3cschool\.cn\/api\/myapp\/isLogin url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/w3cschool.js
*/

var body = $response.body;
 let obj = JSON.parse(body);
 obj.viptype = "2";
 obj.viplevel = "1";
 obj.vipexpire = "2030-10-10 10-10-10";
 body = JSON.stringify(obj);

$done({body});
