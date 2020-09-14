import { useState, useEffect } from 'react'
import validateIP from '../utils/validateIP'

export default function useTime ({ ip = '' }) {
  const [time, setTime] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const isValidIp = validateIP(ip) || ip === ''
    const controller = new AbortController()
    const { signal } = controller

    if (isValidIp) {
      setLoading(true)
      fetch(`http://worldtimeapi.org/api/ip/${ip}`, { signal })
        .then(res => res.json())
        .then(setTime)
        .then(() => setLoading(false))
        .catch(() => { setError(true); setTime(null); setLoading(false) })
    } else {
      setError(true)
      setTime(null)
    }

    return () => controller.abort()
  }, [ip])

  return { time, loading, error }
}
