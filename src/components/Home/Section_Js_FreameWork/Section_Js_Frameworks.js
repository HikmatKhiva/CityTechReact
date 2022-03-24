import React from 'react'
import { ReactIcon, NodeIcon, AngularIcon } from '../../../img/export'
const Section_Js_Frameworks = () => {
    return (
        <div className='section-framework'>
            <div className='container d-flex flex-wrap-wrap'>
                <div className='content'>
                    <img src={AngularIcon} alt="Angular" />
                    <div className='content-title'>
                        <h1>Study Angular</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum unde porro inventore. Fugiat reprehenderit facere nisi aliquam consectetur repellat?</p>
                    </div>
                </div>
                <div className='content'>
                    <img src={NodeIcon} alt="Angular" />
                    <div className='content-title'>
                        <h1>Study Angular</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum unde porro inventore. Fugiat reprehenderit facere nisi aliquam consectetur repellat?</p>
                    </div>
                </div>
                <div className='content'>
                    <img src={ReactIcon} alt="Angular" />
                    <div className='content-title'>
                        <h1>Study Angular</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum unde porro inventore. Fugiat reprehenderit facere nisi aliquam consectetur repellat?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_Js_Frameworks