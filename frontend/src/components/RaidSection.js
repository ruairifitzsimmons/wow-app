import React from 'react';
import '../styles/RaidSection.css';

function RaidSection({
    raids
}) 
{
    return (
        <>
        <div className='raid-main'>
            <div className='raid-container'>
                <div className='raid-row'>
                    <div className='raid-col'>
                    <a className='dungeon-subheader'>Shadowlands</a>
                    <h1 className='class-header'>Raids</h1>
                        <div className='raidGrid'>
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