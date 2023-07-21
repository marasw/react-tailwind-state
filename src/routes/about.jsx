import React from 'react';
import styled/* , { css } */ from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'tailwind-styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Button2 = tw.button`
   flex
   ${(p) => (p.$primary ? 'bg-green-600' : 'bg-green-300')}`;

// const Button2 = styled.button<{ $primary: boolean; }>`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: '#BF4F74';
//   margin: 0 1em;
//   padding: 0.25em 1em;

//   ${props =>
//     props.$primary &&
//     css`
//       background: '#BF4F74';
//       color: white;
//     `};
// `

const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
`;

// const Container = styled.div`
//   text-align: center;
// `;

const DefaultContainer = tw.div`
  flex
  items-center
`;

const RedContainer = tw(DefaultContainer)`
  bg-red-300
`;

export default function About() {
  return (
    <Container>
      <RedContainer><h2>About</h2></RedContainer>
      <Button>Normal Button</Button>
      <Button2 $primary>Primary Button</Button2>
    </Container>
  );
}
