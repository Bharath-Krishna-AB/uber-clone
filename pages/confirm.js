
import {useEffect,useState} from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';
import {useRouter} from 'next/router'


const Confirm = () => {
    const Router = useRouter()
    const { pickUp,dropOff } =Router.query

    
    const [pickUpCoordiantes, setPickUpCoordiantes] = useState();
    const [dropOffCoordiantes, setDropOffCoordiantes] = useState();



    const getPickUpCoordinates = (pickUp)=>{
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

    const getDropOffCoordinates = (dropOff)=>{
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
        getPickUpCoordinates(pickUp)
        getDropOffCoordinates(dropOff)
    },[pickUp,dropOff]);
    


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
              <RideSelector>
                  ride Selector
              </RideSelector>
              <ConfirmButtonContainer>
                  confirm button container
              </ConfirmButtonContainer>
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

const RideSelector = tw.div`

`

const  ConfirmButtonContainer = tw.div`

`