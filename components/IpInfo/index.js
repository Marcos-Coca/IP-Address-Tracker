import React from 'react'

import styles from './styles'
export default function IpInfo ({ ip, contryCode, regionName, zip, timeZone, countryFlag }) {
  return <>
    <div className="Info-Container">
      <div>
        <div>
          <div className="Info-Title">Ip Address</div>
          <div>{ip}</div>
        </div>
        <div className="Info-Border"/>
        <div>
          <div className="Info-Title">Location</div>
          <div>
            {regionName}, {contryCode} <br/>
            {zip}
          </div>
        </div>
        <div className="Info-Border"/>
        <div>
          <div className="Info-Title">Timezone</div>
          <div>
            {timeZone}
          </div>
        </div>
        <div className="Info-Border"/>
        <div >
          <div className="Info-Title">Country Flag</div>
          <div>
            <div className="Info-CountryFlag">
              <img src={countryFlag} alt={contryCode}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
}
