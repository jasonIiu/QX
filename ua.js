let header = $request.headers
let ua = header['User-Agent']
if (!ua.includes('iPhone')) {
  header['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41'
}
$done({ headers: header })
