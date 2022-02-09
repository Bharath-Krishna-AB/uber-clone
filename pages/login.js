import React from 'react'
import tw from "tailwind-styled-components"


const Login = () => {
  return (
    <Wrapper>
        <UberLogo src="/Assets/uber-Logo-2.png"/>
        <LoginButton>Login in with Google</LoginButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4
`

const LoginButton = tw.button`
bg-black text-white  text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
h-7 w-auto object-contain self-start
`