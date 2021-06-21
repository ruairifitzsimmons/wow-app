import React from 'react';
import { Button } from '../components/Button';
import { Link} from 'react-scroll'
import '../styles/MainSection.css';
import axios from 'axios';

export default class MainSection extends React.Component {
    state = {
        main_section: []
    }

    componentDidMount() {
        axios.get('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/worldofwarcraft-xwrtt/service/worldofwarcraft/incoming_webhook/main_section')
        .then(res => {
            const main_section = res.data;
            this.setState({ main_section });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

render() {
    return (
        <>
        <div className='main-section'>
            <div className='main-container'>
                <div className='main-row'>
                    <div className='main-col'>
                        {this.state.main_section?.map((section, i) => (
                            <div className='section-wrapper' key={i}>
                                <img className='main-img' src={section.img}/>
                                <div className='main-text-wrapper'>
                                    <h1 className='main-heading'>{section.headline}</h1>
                                    <p className='main-subtitle'>{section.subheadline}</p>
                                    <Link to='//#endregion' smooth={true} duration={1000}>
                                        <Button buttonStyle='style-secondary' buttonSize='size-auto'>Click Here</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
}