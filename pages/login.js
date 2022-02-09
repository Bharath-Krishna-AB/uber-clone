import React from 'react'
import tw from "tailwind-styled-components"


const Login = () => {
  return (
    <Wrapper>
        <LoginButton>Login in with Google</LoginButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`

`

const LoginButton = tw.button`
bg-black text-white  text-center py-4 mt-8 self-center w-full 
`