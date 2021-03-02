import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/reset.scss';
import '../styles/general.scss';
import '../styles/images.scss';
import layoutStyles from './layout.module.scss';

function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;