export default function geTime ({ signal, ip }) {
  const config = signal ? { signal } : {}

  return fetch(`http://worldtimeapi.org/api/ip/${ip}`, config)
    .then(res => res.json())
}
