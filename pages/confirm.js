
import {useEffect} from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';


const Confirm = () => {


    const getPickUpCoordinates = ()=>{
        const pickUp ='Kochi';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA',
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data =>{
            console.log('pickUp');
            console.log(data.features[0].center);
        })
    }

    const getDropOffCoordinates = ()=>{
        const dropOff ='Thrissur';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?`+
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA',
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data =>{
            console.log('dropOff');
            console.log(data.features[0].center);
        })
    }

    useEffect(() => {
        getPickUpCoordinates()
        getDropOffCoordinates()
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