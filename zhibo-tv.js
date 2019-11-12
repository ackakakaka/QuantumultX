/*
中国体育直播TV 乒乓球VIP UNLOCK

^http?:\/\/rest\.zhibo\.tv\/(room\/get-room-info-v430|video\/appnesting-detail) url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/zhibo-tv.js
*/

var body = $response.body;
var url = $request.url;
const path1 = "/room/get-room-info-v430";
const path2 = "/video/appnesting-detail";
if (url.indexOf(path1) != -1){
 let obj = JSON.parse(body);
 obj.data.anchor.userHas = 1;
 body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
 let obj = JSON.parse(body);
 obj.data.userHas = 1;
 body = JSON.stringify(obj);
}

$done({body});
