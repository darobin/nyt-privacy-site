import React, { Component } from 'react';
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';

export class Footer extends Component {


    render() {
        return (
            <div className='Footer'>

                <footer className="footer-section">
                    <div className="footer-section__logo">
                        <a className="nyt_logo" href='https://www.nytimes.com/'>
                            <NytLogo/>
                        </a>
                        <p className="footer-section__text">&copy;<span className="current-year">2020</span> The New York Times Company</p>
                        <a className="ccpaOptOut" role="button" tabIndex="0">Do not sell my personal information</a>
                    </div>

                </footer>

                <div className="ccpaSnackbar ccpaSnackbarHidden" role="status"></div>

            </div>
        )
    }
}

export default Footer;
