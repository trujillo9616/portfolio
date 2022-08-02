import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 25.686613,
    longitude: -100.316116,
    zoom: 8,
  });

  return (
    <>
      <div className='map'>
        <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA'
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </>
  )
}

export default Map
