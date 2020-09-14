
export default function validateIp (ip) {
  const regex = new RegExp('^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$')
  return regex.test(ip)
}
