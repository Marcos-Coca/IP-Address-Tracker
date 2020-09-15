/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import IpForm from '../../components/IpForm'

describe('Testing IpForm Component', () => {
  it('Render the component', () => {
    const ipForm = shallow(
      <IpForm/>
    )

    expect(ipForm.length).toEqual(1)
  })

  it('Changing The State', () => {
    const mockFunction = jest.fn()
    const ipForm = shallow(
      <IpForm setState={mockFunction}/>
    )
    ipForm.find('form').simulate('submit')

    expect(mockFunction.mock.calls.length).toBe(1)
  })
})
