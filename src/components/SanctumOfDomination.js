import React from 'react';
import './SanctumOfDomination.css';

function SanctumOfDomination({
    sanctumOfDomination,
}) {
    return (
        <>
        <div className='socraid_main-section'>
            <div className="container socraid-section-container">
                <div className="row socraid_main-row">
                    <div className="col socraid_main-col">
                        <div className="socraid_main-text-wrapper">
                            <h1 className='section-heading'>Sanctum of Domination</h1>
                        </div>

                        <div className="socraidGrid">
                            {sanctumOfDomination.map((boss, i) => (
                                <div className="socraid-wrapper" key={i}>
                                    <div className="socraid-header-wrapper">
                                        <h1 className='socraid-name'>{boss}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SanctumOfDomination