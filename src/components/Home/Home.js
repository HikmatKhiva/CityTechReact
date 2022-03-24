import React from 'react'
import Main from './Main/Main.js';
import Section_Js_Frameworks from './Section_Js_FreameWork/Section_Js_Frameworks.js';
import Subscribe from './Section_Subscribe/Subscribe'
import "./home.css"
function Home() {
  return (
    <>
      <Main />
      <Subscribe />
      <Section_Js_Frameworks />
    </>
  )
}

export default Home