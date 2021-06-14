import React from 'react';
import '../styles/DungeonSection.css';

function DungeonSection({
    dungeons
}) 
{
    return (
        <>
        <div className='dungeon_main-section'>
            <div className="container dungeonsection-container">
                <div className="row dungeon_main-row">
                    <div className="col dungeon_main-col">

                        <div className="dungeonGrid">
                            {dungeons.map((dungeon, i) => (
                                <a href={`${dungeon.replace(/\s+/g, '')}`} key={i}>
                                    <div className="dungeon-wrapper" id={`${dungeon.replace(/\s+/g, '')}-wrapper`} >
                                        <h1 className='dungeon-name'>{dungeon}</h1>
                                        <img className="dungeon-pic" src={`images/dungeons/shadowlands/w-${dungeon.replace(/\s+/g, '')}.png`} alt=""/>
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

export default DungeonSection