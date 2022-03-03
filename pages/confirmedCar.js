import React from 'react'
import tw from "tailwind-styled-components"



const confirmedCar = () => {
  return (
    <Wrapper>
        This is only a sample website <br/> so the car will not come .
    </Wrapper>
  )
}

export default confirmedCar;

const Wrapper = tw.div`
flex h-screen flex-col bg-gray-200 text-center justify-center text-2xl font-bold text-blue-400
`