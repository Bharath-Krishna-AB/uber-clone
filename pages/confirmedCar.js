import React from 'react'
import tw from "tailwind-styled-components"



const confirmedCar = () => {
  return (
    <ConfirmedCar>
        This is only a sample website <br/> so the car will not come .
    </ConfirmedCar>
  )
}

export default confirmedCar;

const ConfirmedCar = tw.div`
flex h-screen flex-col bg-gray-200 text-center justify-center text-2xl font-bold text-blue-400
`