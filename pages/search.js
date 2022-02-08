import React from 'react';
import tw from "tailwind-styled-components"


const Search = () => {
  return (
    <Wrapper>

      <ButtonContainer>
        <BackButton src="/Assets/left.png" />
      </ButtonContainer>

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