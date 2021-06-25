import React from 'react';
import '../styles/RaidSection.css';
import { ImpulseSpinner } from 'react-spinners-kit';
import axios from 'axios';

export default class RaidSection extends React.Component {
    state = {
        sl_raids: []
    }

    componentDidMount() {
        axios.get('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/worldofwarcraft-xwrtt/service/worldofwarcraft/incoming_webhook/sl_raids')
        .then(res => {
            const sl_raids = res.data;
            this.setState({ sl_raids });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

render () {
    return (
        !this.state.sl_raids.length ? <ImpulseSpinner size={30} frontColor="#23aeff"/> : (
        <>
        <div className='raid-main'>
            <div className='raid-container'>
                <div className='raid-row'>
                    <div className='raid-col'>
                    <a className='dungeon-subheader'>Shadowlands</a>
                    <h1 className='class-header'>Raids</h1>
                        <div className='raidGrid'>
                            {this.state.sl_raids?.map((slRaid, i) => (
                                    <div className='raid-wrapper' style={{borderColor:slRaid.color}} key={i}>
                                        <h1 className='raid-name'>{slRaid.name}</h1>
                                        <img className='raid-pic' src={slRaid.img}/>
                                        {/*{slDungeon?.bosses.map((boss, i) => (
                                            <a className='dungeon-boss' key={i}>{boss.boss}</a>
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
