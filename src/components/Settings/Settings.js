import { Button } from '@rmwc/button';
import "@rmwc/button/styles";
import React from 'react';
import { connect } from "react-redux";
import Typical from "react-typical";
import * as Action from "../../actions";
import './Settings.scss';

function Settings({theme, onNight, onDay}) {
    
    return (
            <div className="container ">
                    {/* <h1>
                    Settings
                    </h1> */}
                <h1>
                    {/* My Skills */}
                    <Typical loop={1} wrapper="b" steps={[" ", 1000, "Settings"]} />
                </h1>
                <br/>
                <div className='settingsCard'>
                    <div>
                        {!theme ?
                            <div className="night theme-icons">
                                <span className="material-icons active md-36">
                                brightness_2
                                </span>
                                <span className="material-icons day no-active md-36">
                                wb_sunny
                                </span>
                            </div>
                            :
                            <div className="day theme-icons">
                                <span className="material-icons night no-active md-36">
                                brightness_2
                                </span>
                                <span className="material-icons day active md-36">
                                wb_sunny
                                </span>
                            </div>
                        }
                    </div>
                    <br/>
                    <Button
                        onClick={()=> {
                                if(!theme ) {
                                    onDay()
                                    // Navbar background color
                                    document.body.style.setProperty('--bg-primary', '#456774')
                                    document.body.style.setProperty('--bg-page', '#5A8795')
                                    document.body.style.setProperty('--bg-secondary', '#375863')
                                    document.body.style.setProperty('--text-big', '#1D1D1C')
                                    document.body.style.setProperty('--text-big-hover', '#242423')
                                    document.body.style.setProperty('--text-primary', '#242423')
                                    document.body.style.setProperty('--nav-fa-primary', '#1D1D1C')
                                } 
                                if( theme) {
                                    onNight()
                                    document.body.style.setProperty('--bg-primary', '#23232e')
                                    document.body.style.setProperty('--bg-page', '#23232ef3')
                                    document.body.style.setProperty('--bg-secondary', '#141418')
                                    document.body.style.setProperty('--text-big', 'rgb(204, 214, 246)')
                                    document.body.style.setProperty('--text-big-hover', 'rgb(184, 198, 241)')
                                    document.body.style.setProperty('--text-primary', 'rgb(204, 214, 246)')
                                    document.body.style.setProperty('--nav-fa-primary', '#b0b8ff')
                                } 
                            }
                        }
                        raised
                        icon="brightness_5"
                        >
                        theme
                    </Button>
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onNight: () => dispatch(Action.night()),
        onDay: () => dispatch(Action.day()),
    };
};

const mapStateToProps = state => {
    return { theme: state };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);