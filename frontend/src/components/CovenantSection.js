import React from 'react';
import '../styles/CovenantSection.css';

function CovenantSection({
    covenants
}) 
{
    return (
        <>
        <div className='covenant_main-section'>
            <div className="container covenant-section-container">
                <div className="row covenant-row">
                    <div className="col covenant-col">

                        <div className="covenantGrid">
                            {covenants.map((covenant, i) => (
                                <a href={`${covenant.replace(/\s+/g, '')}`} key={i}>
                                    <div className="covenant-wrapper" id={`${covenant.replace(/\s+/g, '')}-wrapper`} >
                                        <h1 className='covenant-name'>{covenant}</h1>
                                        {/*<img className="raid-pic" src={`images/raids/shadowlands/w-${raid.replace(/\s+/g, '')}.png`} alt=""/>*/}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CovenantSection