
export default function getLocation ({ signal, ip }) {
  const config = signal ? { signal } : {}

  return fetch(`http://api.ipstack.com/${ip}?access_key=298de709041c0beb80351ad007fad2ee`, config)
    .then(res => res.json())
}
