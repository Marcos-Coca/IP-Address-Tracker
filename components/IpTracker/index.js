import IpInfo from '../IpInfo'
import IpForm from '../IpForm'

export default function IpTracker ({ location, time }) {
  return <>
    <IpForm />
    <IpInfo ip={location.ip}
      contryCode={location.country_code}
      countryFlag={location.location.country_flag}
      regionName={location.region_name}
      zip={location.zip}
      timeZone={time.utc_offset} />
  </>
}
