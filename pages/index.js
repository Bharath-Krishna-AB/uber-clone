import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA';

export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [76.20934049107285,10.517940473169347],
      zoom: 3
    })
  });

  return (
    <Wrapper>
      <Map id='map'></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
 flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
bg-red-500 flex-1
`

const ActionItems = tw.div`
flex-1 
`
