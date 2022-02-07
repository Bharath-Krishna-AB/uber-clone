import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA';

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
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
