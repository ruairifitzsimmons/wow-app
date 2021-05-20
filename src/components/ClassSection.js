import React from 'react';
import './ClassSection.css';

function ClassSection({
    classes
}){
    return (
        <>
        <div className='class_main-section'>
            <div className="container classsection-container">
                <div className="row class_main-row">
                    <div className="col class_main-col">
                        
                        <div className="classGrid">
                            {classes.map((theClass, i) => (
                                <a href={`${theClass.replace(/\s+/g, '')}`} key={i}>
                                    <div className="class-wrapper" id={`${theClass.replace(/\s+/g, '')}-wrapper`}>
                                        <div className="class-header-wrapper">
                                            <img className='class-icon' src={`images/class-icons/i-${theClass.replace(/\s+/g, '')}.png`} alt="" />
                                            <h1 className='class-name' id={theClass.replace(/\s+/g, '')}>{theClass}</h1>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

{/* {warrior.map((warriorSpec) => (<a className='class-spec' href="*">{warriorSpec}</a>))} */}
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClassSection