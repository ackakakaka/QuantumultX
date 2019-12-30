/*
w3cschool VIP UNLOCK

^http?:\/\/appapi\.w3cschool\.cn\/api\/myapp\/isLogin url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/w3cschool.js
*/

var obj = $response.body;
obj = {
 "viptype": "2",
 "viplevel": "1",
 "vipexpire": "2030-10-10 10-10-10",
};
$done({body});
