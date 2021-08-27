import React from 'react';
import './Classes.css';

import ClassSection from '../../ClassSection';
import ClassInfo from '../../ClassInfo';

function Classes() {
    return (
        <div className='classes-main'>
            <div className="classes-container">
                <div className="classes-row">
                    <div className="classes-col">
                        <div className="classesGrid">

                            {/* 1 */}
                            <div className='classes-grid-item2'>
                                <ClassSection/>
                            </div>

                            {/* Main Content Section */}
                            <div className="classes-grid-item3">
                                <ClassInfo/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Classes