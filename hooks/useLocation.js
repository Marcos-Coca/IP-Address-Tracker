import { useState, useEffect } from 'react'

import validateIP from '../utils/validateIP'
import getLocation from '../Services/getLocation'

export default function useLocation ({ ip = 'check' }) {
  const [location, setLocation] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const isValidIp = validateIP(ip) || ip === 'check'
    const controller = new AbortController()
    const { signal } = controller

    if (isValidIp) {
      setLoading(true)
      getLocation({ signal, ip })
        .then(setLocation)
        .then(() => setLoading(false))
        .catch(() => { setError(true); setLocation(null); setLoading(false) })
    } else {
      setError(true)
      setLocation(null)
    }

    return () => controller.abort()
  }, [ip])

  return { location, loading, error }
}
