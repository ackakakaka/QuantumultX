/**
  * @supported CCA72BB5
  */

var body = $response.body;
var obj = JSON.parse(body);
obj.data.anchor.uname = "小马哥说毛线";
body = JSON.stringify(obj);
$done({body});
