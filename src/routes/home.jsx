/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react'; // , { useState, } , useEffect
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'tailwind-styled-components';
import useStore from '../state';
// import reactLogo from './assets/react.svg'
import logo from '../assets/vite.svg';

const Main = tw.div`
  text-center
  selection:bg-orange-400
`;

// <header className="...">
const Header = tw.header`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  bg-[#ff00d4]
  text-white
`;

const Headline = tw.p`
  bg-gradient-to-r
  from-emerald-300
  to-sky-300
  bg-clip-text
  text-5xl
  font-black
  text-transparent
  selection:bg-transparent
`;

const AnimatedLogo = tw.img`
  h-60
  motion-safe:animate-spin
`;

const Bar = tw.p`
  flex
  mt-3
  gap-3
  text-center
  text-[#8d96a7]
`;

const WebLink = tw.a`
  text-[#61dafb]
  transition-all
  hover:text-blue-400
`;

const CountButton = tw.button`
  flex
  ${(p) => (p.$primary ? 'bg-green-600' : 'bg-green-300')}`;

function BearCounter() {
  const global = useStore((state) => state.global);
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <h1>GLOBAL: {global} </h1>;
}

function Controls() {
  const increase = useStore((state) => state.increase);
  // eslint-disable-next-line react/button-has-type
  return <button onClick={increase}>UP</button>;
}

function Home() {
  const [local, setLocal] = useState(useStore.getState().global);
  const increase = useStore((state) => state.increase);

  function onClick() {
    console.log('CLICK_1');
    increase();
  }

  useEffect(() => {
    const unsubscribe = useStore.subscribe((state) => {
      console.log(`GLOBAL: ${state.global}`);
      setLocal(state.global);
    });
    return () => {
      unsubscribe();
      console.log('_UNMOUNTED_');
    };
  });
  useEffect(() => {
    console.log(`LOCAL: ${local}`); //
  }, [local]);
  return (
    <Main>
      <Header>
        <AnimatedLogo
          src={logo}
          style={{ animationDuration: '20s' }}
          alt="logo"
        />
        <Headline>Vite + React + Tailwindcss Mv3</Headline>
        <Bar>
          <BearCounter />
          <Controls />
          <CountButton
            onClick={() => onClick()}
          >
            Increment
          </CountButton>
        </Bar>
        <p>© {new Date().getFullYear()} {' '} Copyright</p>
        <Link to={{ pathname: 'about' }} target="_parent" rel="noopener noreferer">
          About
        </Link>
        <Bar>
          <WebLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </WebLink>
          {' | '}
          <WebLink
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </WebLink>
        </Bar>
      </Header>
    </Main>
  );
}

export default Home;
