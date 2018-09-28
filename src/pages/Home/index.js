import React, { Component } from 'react';
import HomeTop from './Hometop/index'
import Swiper from './swiper';
import Show from './show';
import GoodShop from './goodShop';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div>
                <HomeTop/>
                <Swiper/>
                <Show/>
                <GoodShop/>
            </div>
        )
    }

}

export default Home