let header = $request.headers
let ua = header['User-Agent']
let newUA = ''
if (ua.includes('iPhone')) {
  newUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/111.0.1661.50 Version/15.0 Mobile/15E148 Safari/604.1'
} else {
  newUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41'
}
header['User-Agent'] = newUA
$done({ headers: header })
