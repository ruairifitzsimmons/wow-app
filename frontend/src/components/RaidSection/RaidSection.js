import React from 'react';
import './RaidSection.css';

function RaidSection({
    raids
}) 
{
    return (
        <>
        <div className='raid_main-section'>
            <div className="container raidsection-container">
                <div className="row raid_main-row">
                    <div className="col raid_main-col">

                        <div className="raidGrid">
                            {raids.map((raid, i) => (
                                <a href={`${raid.replace(/\s+/g, '')}`} key={i}>
                                    <div className="raid-wrapper" id={`${raid.replace(/\s+/g, '')}-wrapper`} >
                                        <h1 className='raid-name'>{raid}</h1>
                                        <img className="raid-pic" src={`images/raids/shadowlands/w-${raid.replace(/\s+/g, '')}.png`} alt=""/>
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

export default RaidSection