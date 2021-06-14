import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ClassSection.css';
import { ImpulseSpinner } from 'react-spinners-kit';


function ClassSection({
    classes
}){
    

    return (
        !classes.length ? <ImpulseSpinner size={30} frontColor="#23aeff"/> : (
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
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    )
}

export default ClassSection