
var body = $response.body;
var url = $resquest.url;
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
