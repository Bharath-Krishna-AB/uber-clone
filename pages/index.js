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
            <ActionButtonImage src="/Assets/uberx.png" />
            ride
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src="/Assets/bike.png" />
            wheel
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src="/Assets/uberschedule.png" />
            reserved
          </ActionButton>
        </ActionButtons>

        <InputButton>
        Where to?
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
flex justify-between
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
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`


const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`