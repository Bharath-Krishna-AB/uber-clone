import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import { useEffect } from 'react';
import Map from './components/Map';


export default function Home() {


  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          
        </Header>

        <ActionButtons>

        </ActionButtons>

        <InputButton>

        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
 flex flex-col bg-red-300 h-screen
`

const ActionItems = tw.div`
flex-1 
`
const Header = tw.div`

`

const ActionButtons = tw.div`

`

const InputButton = tw.div`

`