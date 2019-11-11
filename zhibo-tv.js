var body = $response.body;
var url = $request.url;
const path = "/room/get-room-info-v430/";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj.data.userHas = 1;
	body = JSON.stringify(obj);
 }
$done({body});
