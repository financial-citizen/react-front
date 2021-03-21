import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './google-map.styles.css'

const PriceMarker = ({ price , artistId, mapRelation}) =>
    <div
      className={`
        price-marker
        row
        center
        ${mapRelation.selected ? 'price-marker-selected' : null}
        ${mapRelation.hover ? 'price-marker-hover' : null}
      `}
      key={artistId}>
        <span>
          £ {price}
        </span>
    </div>;


const GoogleMap = ({artistList, handler, mapRelation, ...props}) => {

  // Region/Area Identifier -> highlight color

  const [ mapDetails, setMapDetails ] = useState({
    // minus 0.03 as adjustment to center on larger (105vh+) map
    center: {
      lat: 51.500 - 0.04,
      lng: -0.1232
    },
    zoom: 12.2
  })

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyAJQAZ8L9CSzCR4c_OFMkZpg7JZQkbzMaE' }}
        controls={false}
        defaultCenter={mapDetails.center}
        defaultZoom={mapDetails.zoom}
        onChildMouseEnter={(js, prop)=> handler(prop.artistId, 'hover')}
        onChildMouseLeave={(js, prop)=> handler(prop.artistId, 'hover')}
        onChildClick={(js, prop)=> handler(prop.artistId, 'select')}
        hoverDistance={40}
      >
        {
          artistList.length > 0
            ? artistList.map((markerItem) =>
              <PriceMarker
                artistId={markerItem.artistId}
                lat={markerItem.lat}
                lng={markerItem.lng}
                price={markerItem.price}
                mapRelation={markerItem.mapRelation}
              />
            )
            : null
        }

      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
