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
          <UberLogo src="/Assets/uber-Logo-1.jpg" />
          <Profile>
            <Name>Bharath AB</Name>
            <UserImage src="/Assets/my-img.jpg"/>
          </Profile>
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
 flex flex-col h-screen
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

const UberLogo = tw.img`
h-28
`
const Profile = tw.div`

`

const Name = tw.div`

`

const UserImage = tw.img`

`