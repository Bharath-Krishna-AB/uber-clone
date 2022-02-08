import React from 'react';
import tw from "tailwind-styled-components"


const Search = () => {
  return (
    <Wrapper>

      <ButtonContainer>
        <BackButton src="/Assets/left.png" />
      </ButtonContainer>

      <InputContainer>
      <FromToICons>
        <Circle src="/Assets/filled-circle.png" />
        <Line src="/Assets/vertical-line.png" />
        <Square src="/Assets/Square-full.png" />
      </FromToICons>
      </InputContainer>

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
bg-white
`

const FromToICons =tw.div`
w-10 flex flex-col 
`

const Circle = tw.img`

`

const Line = tw.img`

`

const Square = tw.img`

`