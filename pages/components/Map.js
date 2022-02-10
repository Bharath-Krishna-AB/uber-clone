import React,{useEffect} from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA';



const Map = ({pickUpCoordinates,dropOffCoordinates}) => {

    
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [76.0726,10.4841],
      zoom: 3,
    })

    if(pickUpCoordinates){
      addPickUp(map,pickUpCoordinates)
    }

    if(dropOffCoordinates){
      addDropOff(map,dropOffCoordinates)
    }

    if(pickUpCoordinates && dropOffCoordinates){
      map.fitBounds([
        pickUpCoordinates,
        dropOffCoordinates
      ],{
        padding: 60
      })
    }


  },[pickUpCoordinates,dropOffCoordinates]);

  const addPickUp = (map,coordinates)=>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
    }

    const addDropOff = (map,coordinates)=>{
      const marker1 = new mapboxgl.Marker({
        color: "#2c3e50",
      })
      .setLngLat(coordinates)
      .addTo(map);
      }

  return (
  <Wrapper id="map">
      
  </Wrapper>
  );
};

export default Map;


const Wrapper = tw.div`
flex-1  h-1/2
`