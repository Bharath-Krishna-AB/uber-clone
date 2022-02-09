import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import {carList} from '../data/CarList'


const RideSelector = ({pickUpCoordinates,dropOffCoordinates}) => {


    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]+','+pickUpCoordinates[1]};${dropOffCoordinates[0]+','+dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiYmhhcmF0aC1hYiIsImEiOiJja3pjeGhxb2wxdXZrMzJtbTdwZ2ZkNGFmIn0.UKY16DAHjPQ4ydPP5eksYA`
        ).then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickUpCoordinates,dropOffCoordinates])
    



  return (
      <Wrapper>
          <Title>Choose a ride, or swipe up for more</Title>
          <CarList>
              {
                  carList.map((car,index)=>{
                      return (
                        <Car key={index}>
                        <CarImage src={car.imgUrl}/>
                        <CarDetails>
                            <Service>
                                {car.service}
                            </Service>
                            <Time>
                                5 min away
                            </Time>
                        </CarDetails>
                        <Price>{`$${(rideDuration * car.multiplier).toFixed(0)}`}</Price>
                    </Car>
                    )
                  })
              }


          </CarList>
      </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
`