import React from 'react';
import './ServicesSection.css';

function ServicesSection({
    headline
}) 
{
    return (
        <>
        <div className='services-section'>
            <div className="container services-section-container">
                <div className="row services-row">
                    <div className="col services-col">
                        {/*<h1 className='class-heading'>Dungeons</h1>*/}

                        <div className="servicesGrid">
                                <a href={`${headline.replace(/\s+/g, '')}`}>
                                    <div className="services-wrapper" id={`${headline.replace(/\s+/g, '')}-wrapper`} >
                                        <h1 className='services-name'>{headline}</h1>
                                        {/*<img className="dungeon-pic" src={`images/dungeons/shadowlands/w-${theHeadline.replace(/\s+/g, '')}.png`} alt=""/>*/}
                                        {/*<Button buttonStyle='style-transparent' buttonSize='size-auto'>{button}</Button>*/}
                                    </div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServicesSection