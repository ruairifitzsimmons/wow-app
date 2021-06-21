import React from 'react';
import '../styles/ClassSection.css';
import { ImpulseSpinner } from 'react-spinners-kit';
import axios from 'axios';

export default class ClassSection extends React.Component {
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
                            <h1 className='class-header'>Classes</h1>
                            <div className='classGrid'>
                                {this.state.classes?.map((wowClass, i) => (
                                    <div className='class-wrapper' style={{borderColor:wowClass.color}} key={i}>
                                        <div className='class-wrapper-header'>
                                            <img className='class-icon' src={wowClass.img}/>
                                            <h1 className='class-name' style={{color:wowClass.color}}>{wowClass.name}</h1>
                                        </div>
                                        {/*{wowClass?.specs.map((spec, i) => (
                                            <a className='class-spec' key={i}>{spec.spec}</a>
                                        ))}*/}
                                    </div>
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
}