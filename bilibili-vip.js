/*

#QX版 哔哩哔哩大会员
https:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl url 302 https://bili.miao.best/geturl/maom/
https:\/\/api\.bilibili\.com\/pgc\/view\/app\/season url script-response-body bilibili-vip.js

*/

let obj = JSON.parse($response.body);
obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});