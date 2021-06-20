import React from 'react';
import '../styles/DungeonSection.css';
import { ImpulseSpinner } from 'react-spinners-kit';
import axios from 'axios';

export default class ClassSection extends React.Component {
    state = {
        sl_dungeons: []
    }

    componentDidMount() {
        axios.get('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/worldofwarcraft-xwrtt/service/worldofwarcraft/incoming_webhook/sl_dungeons')
        .then(res => {
            const sl_dungeons = res.data;
            this.setState({ sl_dungeons });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render () {
        return (
            !this.state.sl_dungeons.length ? <ImpulseSpinner size={30} frontColor="#23aeff"/> : (
        <>
        <div className='dungeon_main-section'>
            <div className="container dungeonsection-container">
                <div className="row dungeon_main-row">
                    <div className="col dungeon_main-col">
                        <div className="dungeonGrid">
                            {this.state.sl_dungeons?.map((slDungeon, i) => (
                                <div className='dungeon-wrapper' style={{borderColor:slDungeon.color}} key={i}>
                                    <h1 className='dungeon-name'>{slDungeon.name}</h1>
                                    <img className='dungeon-pic' src={slDungeon.img}/>
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
        ))  
    }
}
