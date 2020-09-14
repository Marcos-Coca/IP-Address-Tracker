/* eslint-disable no-undef */
import useTime from '../../hooks/useTime'
import { renderHook } from '@testing-library/react-hooks'

import mockTime from '../../mocks/time'
import validateIP from '../../utils/validateIP'

describe('Testing hook useTime', () => {
  it('Testing of retreving a valid response', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockTime))
    const { result, waitForValueToChange } = renderHook(() => useTime({}))

    await waitForValueToChange(() => result.current.time)
    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeNull()
    expect(validateIP(result.current.time.client_ip)).toBeTruthy()
  })

  it('Testing Invalid IP', () => {
    const { result } = renderHook(() => useTime({ ip: '24334' }))

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeTruthy()
    expect(result.current.time).toBeNull()
  })

  it('Testing 404', async () => {
    fetch.mockRejectOnce()
    const { result, waitForValueToChange } = renderHook(() => useTime({ ip: '192.168.1.1' }))

    await waitForValueToChange(() => result.current.time)

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeTruthy()
    expect(result.current.time).toBeNull()
  })
})
