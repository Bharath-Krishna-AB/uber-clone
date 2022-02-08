
import {useEffect,useState} from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';


const Confirm = () => {
    
    const [pickUpCoordiantes, setPickUpCoordiantes] = useState();
    const [dropOffCoordiantes, setDropOffCoordiantes] = useState();



    const getPickUpCoordinates = ()=>{
        const pickUp ='India,Kochi';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA',
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data =>{
            setPickUpCoordiantes(data.features[0].center)
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
            setDropOffCoordiantes(data.features[0].center)

        })
    }

    useEffect(() => {
        getPickUpCoordinates()
        getDropOffCoordinates()
    },[]);
    


  return (
      <Wrapper>
          <Map
          pickUpCoordiantes = {pickUpCoordiantes}
          dropOffCoordiantes = {dropOffCoordiantes}
          />
          <RideContainer>
              {/* rideSelector
               */}
              {/* confirm btn */}

              {pickUpCoordiantes}
              {dropOffCoordiantes}
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