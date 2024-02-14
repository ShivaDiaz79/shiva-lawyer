import React from 'react'
import MapBox from '../../../../components/Contenido/MapBox';




const ContactPage = () => {
    const location = {
      lat: -17.754694836827614,
      lng: -63.19753825664521,
      zoom: 15,
    };


  return (
    <footer>
    <MapBox lat={location.lat} lng={location.lng} zoom={location.zoom} />
  </footer>
  )
}

export default ContactPage