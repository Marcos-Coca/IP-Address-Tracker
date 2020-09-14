/* eslint-disable no-undef */
import useLocation from '../../hooks/useLocation'
import { renderHook } from '@testing-library/react-hooks'

import validateIP from '../../utils/validateIP'
import mockLocation from '../../mocks/location'

describe('Testing Hooks get Location', () => {
  it('Testing of retreving a valid response', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockLocation))
    const { result, waitForValueToChange } = renderHook(() => useLocation({}))

    await waitForValueToChange(() => result.current.location)

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeNull()
    expect(validateIP(result.current.location.ip)).toBeTruthy()
  })

  it('Testing Invalid IP', () => {
    const { result } = renderHook(() => useLocation({ ip: '24334' }))

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeTruthy()
    expect(result.current.location).toBeNull()
  })
})
