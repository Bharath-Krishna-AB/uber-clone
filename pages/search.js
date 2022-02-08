import React from 'react';
import tw from "tailwind-styled-components"
import Link from 'next/link'



const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
        <BackButton src="/Assets/left.png" />
      </Link>
      </ButtonContainer>
      <InputContainer>
      <FromToICons>
        <Circle src="/Assets/filled-circle.png" />
        <Line src="/Assets/vertical-line.png" />
        <Square src="/Assets/Square-full.png" />
      </FromToICons>
      <InputBoxes>
        <Input placeholder="Enter pickup location"/>
        <Input placeholder="Where to?"/>
      </InputBoxes>
      <PlusIcon src="/assets/plus-math.png"/>
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="/assets/star--v1.png"/>
        Saved Places
      </SavedPlaces>
      <ConfirmLocation>Confirm Locations</ConfirmLocation>
      {/* button container */}
      {/* input container */}
      {/* saved place */}
      {/* confirm location */}
    </Wrapper>
  );
};

export default Search;


const Wrapper =  tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const FromToICons =tw.div`
w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
h-2.5 
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 font-semibold
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocation = tw.div`
flex bg-black text-white p-2 m-3 justify-center font-semibold 
`