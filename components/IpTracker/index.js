import Link from 'next/link'

import Map from '../Map'
import IpInfo from '../IpInfo'
import IpForm from '../IpForm'

import styles from './styles'

export default function IpTracker ({ location, time }) {
  return <>
    <div>
      <Link href='/'>
        <h1>IP Address Tracker</h1>
      </Link>
      <IpForm ip={location.ip} />
      <IpInfo ip={location.ip}
        contryCode={location.country_code}
        countryFlag={location.location?.country_flag}
        regionName={location.region_name}
        zip={location.zip}
        timeZone={time.utc_offset}
      />
    </div>

    <Map
      latitude={location.latitude}
      longitude={location.longitude}
    />
    <style jsx>{styles}</style>
  </>
}
