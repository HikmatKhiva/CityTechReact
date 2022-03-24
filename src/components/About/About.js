import React from 'react'
import Subscribe from '../Home/Section_Subscribe/Subscribe'
import './about.css'
function About() {
  return (
    <>
      <Subscribe />
      <section className='main-about'>
        <div className='container d-flex__simple justify-content-between flex-wrap-wrap'>
          <div className='content-left'>
            <div className='card-white'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus beatae soluta deleniti veniam aperiam molestias labore et, odio sint reiciendis laborum sapiente numquam nulla aut at mollitia sed? In, exercitationem?
              </p>
            </div>
            <div className='card-dark'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus beatae soluta deleniti veniam aperiam molestias labore et, odio sint reiciendis laborum sapiente numquam nulla aut at mollitia sed? In, exercitationem?
              </p>
            </div>
          </div>
          <div className='content-right'>
            <div className='card-dark'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus beatae soluta deleniti veniam aperiam molestias labore et, odio sint reiciendis laborum sapiente numquam nulla aut at mollitia sed? In, exercitationem?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About