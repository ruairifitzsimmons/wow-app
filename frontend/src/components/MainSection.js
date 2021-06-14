import React from 'react';
import { Button } from '../components/Button';
import { Link} from 'react-scroll'
import '../styles/MainSection.css';


function MainSection({
    headline,
    description,
    buttonOne,
    img,
    alt
})

{
    return (
        <>
        <div className='main_main-section'>
            <div className="container mainsection-container">
                <div className="row main_main-row">
                    <div className="col main-col">
                        <div className="main-img-wrapper">
                            <img src={img} alt={alt} className='main-img'/>
                        </div>
                        <div className="main_main-text-wrapper">
                            <h1 className='main-heading'>{headline}</h1>
                            <p className='main-subtitle'>{description}</p>
                            
                            <Link to="contact-container" smooth={true} duration={1000}>
                                <Button buttonStyle='style-primary' buttonColor="purple" buttonSize='size-auto' arrow='arrow-light'>{buttonOne}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainSection