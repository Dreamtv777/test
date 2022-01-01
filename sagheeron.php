<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://fungroup.gq/funtv/vod.php?vidid=hPn0CJbpXWwIbsrZ');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();
$headers[] = 'Host: fungroup.gq';
$headers[] = 'Connection: keep-alive';
$headers[] = 'User-Agent: Mozilla/5.0 (Linux; Android 9; BKL-L09 Build/HUAWEIBKL-L09S; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.45 Mobile Safari/537.36 Vinebre';
$headers[] = 'Accept: */*';
$headers[] = 'Origin: http://localhost';
$headers[] = 'X-Requested-With: com.funapp.tv';
$headers[] = 'Sec-Fetch-Site: cross-site';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Referer: http://localhost/';
$headers[] = 'Accept-Encoding: gzip, deflate';
$headers[] = 'Accept-Language: en-PK,en-US;q=0.9,en;q=0.8';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
var_dump($result);
?>
