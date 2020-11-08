import React, {useState, } from 'react'
import { connect } from "react-redux";
import * as Action from "../../actions";
import './ThemeMode.scss'

const ThemeMode = ({theme, onNight, onDay}) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
                <div className="container">
                    <span>{theme ? 'LIGHT' : 'DARK'}</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                        <input type="checkbox" onChange={()=> {
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
                                    document.body.style.setProperty('--fab-color', '#1D1D1C')
                                    // document.body.style.setProperty('--fab-bg-color', '#1D1D1C')
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
                                    document.body.style.setProperty('--fab-color', '#363752')
                                    // document.body.style.setProperty('--fab-bg-color', '#ae8d18')
                                } 
                            }} />
                        <span className="slider round"> </span>
                        </label>
                    </div>
                </div>
        </>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(ThemeMode)