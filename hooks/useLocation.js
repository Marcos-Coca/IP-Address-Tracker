import { useState, useEffect } from 'react'

export default function useLocation ({ ip = 'check' }) {
  const [location, setLocation] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function validateIp () {
    const regex = new RegExp('^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$')
    return regex.test(ip) || ip === 'check'
  }

  useEffect(() => {
    const isValidIp = validateIp()
    const controller = new AbortController()
    const { signal } = controller

    if (isValidIp) {
      setLoading(true)
      fetch(`http://api.ipstack.com/${ip}?access_key=298de709041c0beb80351ad007fad2ee`, { signal })
        .then(res => res.json())
        .then(setLocation)
        .then(() => setLoading(false))
        .catch(() => { setError(true); setLocation(null) })
    } else {
      setError(true)
      setLocation(null)
    }

    return () => controller.abort()
  }, [ip])

  return { location, loading, error }
}
