import React,{useEffect} from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA';



const Map = () => {

    
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [76.20934049107285,10.517940473169347],
      zoom: 3
    })
  });


  return (
  <Wrapper id="map">
      
  </Wrapper>
  );
};

export default Map;


const Wrapper = tw.div`
flex-1
`