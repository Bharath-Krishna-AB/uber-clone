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
          <ActionButton>
            ride
          </ActionButton>
          <ActionButton>
            wheel
          </ActionButton>
          <ActionButton>
            reserved
          </ActionButton>
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
flex-1  p-4
`
const Header = tw.div`
flex justify-between items-center
`

const ActionButtons = tw.div`

`

const InputButton = tw.div`

`

const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButton = tw.div`

`