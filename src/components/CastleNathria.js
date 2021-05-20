import React from 'react';
import './CastleNathria.css';

function CastleNathria({
    castleNathria,
}) {
    return (
        <>
        <div className='castlenathria_main-section'>
            <div className="container castlenathriasection-container">
                <div className="row castlenathria_main-row">
                    <div className="col castlenathria_main-col">
                        <div className="castlenathria_main-text-wrapper">
                            <h1 className='section-heading'>Castle Nathria</h1>
                        </div>

                        <div className="castlenathriaGrid">
                            {castleNathria.map((boss, i) => (
                                <div className="castlenathria-wrapper" key={i}>
                                    <div className="castlenathria-header-wrapper">
                                        <h1 className='castlenathria-name'>{boss}</h1>
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

export default CastleNathria