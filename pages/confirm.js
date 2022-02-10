
import {useEffect,useState} from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'


const Confirm = () => {
    const Router = useRouter()
    const { pickUp,dropOff } =Router.query

    
    const [pickUpCoordinates, setPickUpCoordinates] = useState([76.267303,9.931233]);
    const [dropOffCoordinates, setDropOffCoordinates] = useState([76.267303,9.931233]);



    const getPickUpCoordinates = (pickUp)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA',
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data =>{
            setPickUpCoordinates(data.features[0].center)
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
            setDropOffCoordinates(data.features[0].center)

        })
    }

    useEffect(() => {
        getPickUpCoordinates(pickUp)
        getDropOffCoordinates(dropOff)
    },[pickUp,dropOff]);
    


  return (
      <Wrapper>
         <BackButtonContainer>
             <Link href="/search">
            <BackImage src="/Assets/left.png"/>
            </Link>
         </BackButtonContainer>
          <Map
          pickUpCoordinates = {pickUpCoordinates}
          dropOffCoordinates = {dropOffCoordinates}
          />
          <RideContainer>
              <RideSelector
                pickUpCoordinates = {pickUpCoordinates}
                dropOffCoordinates = {dropOffCoordinates}
              />
          </RideContainer>
      </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col  h-1/2
`

const BackButtonContainer = tw.div`
absolute rounded-full z-10 top-2 left-2 bg-white shadow-md cursor-pointer
`

const BackImage = tw.img`
w-10  object-contain
`
