/* eslint-disable no-undef */
import useLocation from '../../hooks/useLocation'
import { renderHook } from '@testing-library/react-hooks'

import mockLocation from '../../mocks/location'

describe('Testing Hooks get Location', () => {
  it('Testing of retreving a valid IP', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockLocation))
    const { result, waitForValueToChange } = renderHook(() => useLocation({}))

    await waitForValueToChange(() => result.current.location)

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeNull()
    expect(result.current.location.ip).toMatch(new RegExp('^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$'
    ))
  })

  it('Testing Invalid IP', () => {
    const { result } = renderHook(() => useLocation({ ip: '24334' }))

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeTruthy()
    expect(result.current.location).toBeNull()
  })
})
