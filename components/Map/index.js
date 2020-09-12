import { useState } from 'react'
import MapGL from 'react-map-gl'

export default function Map () {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyY29zY29jYSIsImEiOiJja2V5djVuMzkwajJhMnhzMnd0NnlreTY4In0.UOeIhIKvJQADCpt3S4NSLw'

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  })

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  )
}
