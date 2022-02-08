
import {useEffect} from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';


const Confirm = () => {


    const getCoordinates = ()=>{
        const location ='Kochi';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA'
        })
        )
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
    }

    useEffect(() => {
        getCoordinates()

    },[]);
    


  return (
      <Wrapper>
          <Map/>
          <RideContainer>
              {/* rideSelector
               */}
              {/* confirm btn */}
          </RideContainer>
      </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1
`