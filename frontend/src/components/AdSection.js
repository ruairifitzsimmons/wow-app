import React from 'react';
import '../styles/AdSection.css';

function AdSection({
    headline,
    description
}) {
    return (
        <>
        <div className='ad_main-section'>
            <div className="container ad-container">
                <div className="row ad_main-row">
                    <div className="col ad_main-col">
                        <div className="ad_main-text-wrapper">
                            <h1 className='ad_main-heading'>{headline}</h1>
                            <p className='ad_main-subtitle'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdSection