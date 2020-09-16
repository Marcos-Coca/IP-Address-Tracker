import React, { useState } from 'react'

import MapGL, { Marker } from 'react-map-gl'

export default function Map ({ latitude, longitude }) {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyY29zY29jYSIsImEiOiJja2V5djVuMzkwajJhMnhzMnd0NnlreTY4In0.UOeIhIKvJQADCpt3S4NSLw'

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 14,
    bearing: 0,
    pitch: 0
  })

  return (
    <>{
      latitude && longitude
        ? (<MapGL
          {...viewport}
          width="100%"
          height="500px"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
            <img src="/icon-location.svg" alt=""/>
          </Marker>
        </MapGL>)
        : <div className="NotFound">
            IP Not Found 😔
        </div>
    }
    <style jsx>
      {`
        .NotFound{
          height:500px;
          text-align:center;
          line-height:500px;
          font-size:40px;
          font-weight:bold;
          color:#fff;
        }
      `}
    </style>
    </>
  )
}
