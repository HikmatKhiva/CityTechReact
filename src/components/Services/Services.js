import React from 'react'
import Subscribe from '../Home/Section_Subscribe/Subscribe'
import Input from '../Ui/Input/Input'
import "./services.css"
const Services = () => {
    return (
        <>
            <Subscribe />
            <section className='services-main'>
                <div className='container d-flex__simple justify-content-between flex-wrap-wrap'>
                    <div className='services-content__left'>
                        <h2>Our Services</h2>
                        <div className='card'>
                            <h2>Coding School</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, repellendus nesciunt? Nulla omnis officiis possimus molestias commodi quibusdam, nisi, numquam molestiae itaque, nesciunt consequatur odit. Sequi officiis aliquid dicta iste.</p>
                            <h3>Pricing:$1,000 - $3,000</h3>
                        </div>
                        <div className='card'>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, repellendus nesciunt? Nulla omnis officiis possimus molestias commodi quibusdam, nisi, numquam molestiae itaque, nesciunt consequatur odit. Sequi officiis aliquid dicta iste.</p>
                            <h3>Pricing:$1,000 - $3,000</h3>
                        </div>
                        <div className='card'>
                            <h2>Mobil/web development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, repellendus nesciunt? Nulla omnis officiis possimus molestias commodi quibusdam, nisi, numquam molestiae itaque, nesciunt consequatur odit. Sequi officiis aliquid dicta iste.</p>
                            <h3>Pricing:$1,000 - $3,000</h3>
                        </div>
                    </div>
                    <div className='services-content__right'>
                        <div className='card-right'>
                            <h2>Get a Quote</h2>
                            <form>
                                <label for="name">Name</label>
                                <Input type="name" placeholder="Name" id="name" />
                                <label for="email">Email</label>
                                <Input type="name" placeholder="Email" id="email" />
                                <label for="message">Message</label>
                                <textarea col="6" placeholder='...Your Message' row="7" id='message'></textarea>
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services