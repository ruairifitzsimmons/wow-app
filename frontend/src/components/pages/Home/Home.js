import React from 'react';
import { adOne, wowData } from './Data';

import AdSection from '../../AdSection';
import ClassSection from '../../ClassSection';
import MainSection from '../../MainSection';
import DungeonSection from '../../DungeonSection';
import RaidSection from '../../RaidSection';
import CovenantSection from '../../CovenantSection';

import './Home.css'


function Home() {
    return (
        <div className='home_main-section'>
            <div className="container home-section-container">
                <div className="row home_main-row">
                    <div className="col home_main-col">
                        <div className="homeGrid">

                            {/* Announcement */}
                            <div className="grid-item grid-item1">
                                <AdSection {...adOne}/>
                            </div>

                            {/* Main Content Section */}
                            <div className="grid-item grid-item2">
                                <MainSection/>
                            </div>

                            {/* Class Section */}
                            <div className="grid-item grid-item3">
                                <ClassSection/>
                            </div>

                            {/* Dungeon Section */}
                            <div className="grid-item grid-item4">
                                <DungeonSection/>
                            </div>

                            {/* Raid Section */}
                            <div className="grid-item grid-item5">
                                <RaidSection/>
                            </div>

                            {/* Covenants */}
                            <div className="grid-item grid-item6">
                                <CovenantSection {...wowData}/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home