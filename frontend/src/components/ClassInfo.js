import React from 'react';
import '../styles/ClassInfo.css';
import { ImpulseSpinner } from 'react-spinners-kit';
import axios from 'axios';

export default class ClassInfo extends React.Component {
    state = {
        classes: []
    }


    componentDidMount() {
        axios.get('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/worldofwarcraft-xwrtt/service/worldofwarcraft/incoming_webhook/classes')
        .then(res => {
            const classes = res.data;
            this.setState({ classes });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    
    render() {
        return (
            !this.state.classes.length ? <ImpulseSpinner size={30} frontColor="#23aeff"/> : (
            <>
            <div className='class-main'>
                <div className="class-container">
                    <div className="class-row">
                        <div className="class-col">
                            <div className='classInfoGrid'>

                                <div className='classInfo-grid-item-1'>
                                    <div className='classInfo-header-wrapper1'>
                                        <img className='classInfo-icon' src='images/class-icons/warrior.png'/>
                                        <div className='classInfo-header-wrapper2'>
                                            <h1 className='classInfo-header'>Warrior{}</h1>
                                            <a className='classInfo-role'>Tank</a>
                                            <a className='classInfo-role'>Damage</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='classInfo-grid-item-2'>
                                    <p className='classInfo-description'>Description Description Description
                                    Description Description Description Description Description Description 
                                    Description Description Description Description Description Description 
                                    Description Description Description</p>
                                </div>

                                <div className='classInfo-grid-specs'>
                                    <a className='classInfo-spec'>Talent 1-1</a>
                                    <a className='classInfo-spec'>Talent 1-2</a>
                                    <a className='classInfo-spec'>Talent 1-3</a>

                                    <a className='classInfo-spec'>Talent 2-1</a>
                                    <a className='classInfo-spec'>Talent 2-2</a>
                                    <a className='classInfo-spec'>Talent 2-3</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
        )
    }
}