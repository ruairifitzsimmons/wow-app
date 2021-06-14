import React from 'react';
import { adOne, homeOne, wowData } from './Data';
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
                            <div className="grid-item1">
                                <AdSection {...adOne}/>
                            </div>

                            {/* Main Content Section */}
                            <div className="grid-item2">
                                <MainSection {...homeOne}/>
                            </div>

                            <div className="seperator1">
                                <h1 className="section-heading">Classes</h1>
                            </div>

                            {/* Class Section */}
                            <div className="grid-item3">
                                <ClassSection {...wowData}/>
                            </div>

                            <div className="seperator2">
                                <h1 className="section-heading">Shadowlands</h1>
                            </div>

                            {/* Dungeon Section */}
                            <div className="grid-item4">
                                <DungeonSection {...wowData}/>
                            </div>

                            {/* Raid Section */}
                            <div className="grid-item5">
                                <RaidSection {...wowData}/>
                            </div>

                            {/* Covenants */}
                            <div className="grid-item6">
                                <CovenantSection {...wowData}/>
                            </div>

                            <div className="seperator3">
                                <h1 className="section-heading">Store</h1>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home