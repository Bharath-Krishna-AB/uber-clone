import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import {auth,provider} from '../firebase'



const Login = () => {
  return (
    <Wrapper>
        <UberLogo src="/Assets/uber-Logo-2.png"/>
        <Title>Login in to access your account</Title>
        <LoginImage src="/Assets/login-image.png" />
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
h-7 w-auto object-contain self-start mt-4
`

const Title = tw.div`
text-4xl pt-8  text-gray-500
`

const LoginImage = tw.img`
object-contain w-full 
`