import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './styles'
import validateIP from '../../utils/validateIP'

export default function IpForm ({ ip }) {
  const [text, setText] = useState(ip)
  const router = useRouter()

  const handleChange = (e) => {
    const value = e.target.value
    setText(value)
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    router.push('/ip/[ip]', `/ip/${text}`)
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address" onChange={handleChange} value={text}/>
      <button disabled={!validateIP(text)}></button>
    </form>
    <style jsx>{styles}</style>
  </div>
}
