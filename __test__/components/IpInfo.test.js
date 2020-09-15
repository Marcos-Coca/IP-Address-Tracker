/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import React from 'react'
import { shallow, mount } from 'enzyme'

import IpInfo from '../../components/IpInfo'

import mockTime from '../../mocks/time'
import mockLocation from '../../mocks/location'

describe('Testing IpInfo component', () => {
  it('Render the component', () => {
    const ipInfo = shallow(
      <IpInfo/>
    )

    expect(ipInfo.length).toEqual(1)
  })

  it('Testing Component With Props', () => {
    const ipInfo = mount(
      <IpInfo
        ip={mockLocation.ip}
        contryCode={mockLocation.country_code}
        countryFlag={mockLocation.location.country_flag}
        regionName={mockLocation.region_name}
        zip={mockLocation.zip}
        timeZone={mockTime.utc_offset}
      />
    )

    expect(ipInfo.containsAllMatchingElements([
      <div>{mockLocation.ip}</div>,
      <img src={mockLocation.location.country_flag} alt={mockLocation.country_code} />,
      <div>{mockTime.utc_offset}</div>
    ])).toEqual(true)
  })
})
