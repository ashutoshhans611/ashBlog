import React, { Component } from 'react';
import Header from './HeaderComponent'
import Banner from './BannerComponent';
import Content from './ContentComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Banner />
                
            </div>
        );
    }
}
export default Main;