import React from 'react'
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
            {regionName},{contryCode} <br/>
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
    <style jsx>{`
      .Info-Container{
        width: 80%;
        max-width:715px;
        min-width: 510px;
        margin:auto;
        background:#fff;
        overflow:hidden;
        border-radius:10px;
        color:hsl(0, 0%, 17%);
        font-weight:700;
      }
      .Info-Container > div{
        display:flex;
        position:relative;
        justify-content:space-around;
        height: 120px;
      }

      .Info-Container > div > div{
        padding-top:1rem;
        position:relative;       
      }

      .Info-Border {
        height:50%;
        position:relative;
        top: 25px;
        border: 1px solid  rgba(0, 0, 0, 0.1);
      }
      .Info-CountryFlag{
        width: 70px;
      }

      img{
        width:100%;
        object-fit:cover;
      }

      .Info-Title{
        padding-bottom:10px;
        font-weight:600;
        color: hsl(0, 0%, 59%);
        font-size: 0.6rem;
        text-transform:uppercase;
  
      }

  
  `}
    </style>
  </>
}
