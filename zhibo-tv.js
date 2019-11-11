var body = $response.body;
var obj = JSON.parse(body);
obj['userHas'] = 1;
body = JSON.stringify(obj);
$done({body});
