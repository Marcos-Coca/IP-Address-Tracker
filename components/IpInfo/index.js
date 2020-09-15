import React from 'react'
export default function IpInfo ({ ip, contryCode, regionName, zip, timeZone, countryFlag }) {
  return <div>
    <div>
      <div>
        <div>Ip Address</div>
        <div>{ip}</div>
      </div>
      <div>
        <div>Location</div>
        <div>
          {regionName},{contryCode} <br/>
          {zip}
        </div>
      </div>
      <div>
        <div>Timezone</div>
        <div>
          {timeZone}
        </div>
      </div>
      <div>
        <div>Country Flag</div>
        <div>
          <img src={countryFlag} alt={contryCode}/>
        </div>
      </div>
    </div>
  </div>
}
