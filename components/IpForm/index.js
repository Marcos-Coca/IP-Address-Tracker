import React, { useState } from 'react'
export default function IpForm ({ setState }) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setText(value)
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    setState(text)
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text}/>
      <button></button>
    </form>
  </div>
}
