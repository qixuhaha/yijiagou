import React, { Component, Fragment } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './style.scss'

class Swiper extends Component{
    constructor(props){
        super(props);
        this.state={
            swipeList:[],
            gridList:[],
            scrollList:[]
        }
    }
    
    render(){
        return (
            <Fragment>
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                {
                    this.state.swipeList.map(value => (
                        <div key={value.id} className="swiperBox">
                            <img className="swiperImg" src={value.link} alt=""/>
                        </div>
                    ))
                }
                </Carousel>
                {/* 九宫格 */}
                 <div className="gridBox">
                    <ul className="gridul">
                        {
                            this.state.gridList.map(value=>(
                                <li key={value.id}>
                                    <p>
                                        <img className="gridImg" src={value.icon} alt=""/>
                                        <span>{value.text}</span>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                 </div>
                 <div className="banner">
                     <img src="../assets/iconfonts/banner.jpg" alt=""/>
                 </div>
                 <div className="headline">
                    <div className="headline_img">
                        <img src="../assets/iconfonts/Headline.png" alt="" />
                    </div>
                    <WingBlank>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            <div className="v-item">联盛电子购物卡&nbsp;&nbsp;充值立享增值百分之三</div>
                            <div className="v-item">中秋团圆惠，全场五折起</div>
                        </Carousel>
                    </WingBlank>
                 </div>
                 <div className="limited_time">
                    <div className="index_title">
                        <li className="clock"><img src="../assets/iconfonts/clock.png" alt=""/></li>
                        <li className="title">限时抢购</li> 
                        <li className="booking-time">
                            <div className="timeBox">
                                <strong>0</strong>
                                <span className="label" style={{fontWeight: "normal"}}>天</span>
                                <strong>02</strong> 
                                <span className="label">:</span>
                                <strong>42</strong>
                                <span className="label">:</span>
                                <strong>07</strong>
                            </div>
                        </li> 
                        <li className="more">我要更多</li>
                    </div>
                    <div className="scrollBox">
                        <ul className="scroll">
                        {
                            this.state.scrollList.map(value=>(
                                <li key={value.item_id}>
                                    <a href="#/goods/64794" className="">
                                        <div className="iob-img goods-pic">
                                            <img src={value.item_default_image} alt="" className="bgImg"/>
                                        </div> 
                                        <span className="iob-name">{value.title}</span> 
                                        <span className="iob-info"><s>¥</s>{value.activity_price}</span>
                                    </a>
                                </li>
                            ))
                        }
                            
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        fetch("/api/swiper")
            .then(response=>response.json())
            .then(result=>{
                // console.log(result.data[0].setting.pic);
                this.setState({
                    swipeList:result.data[0].setting.pic
                })
            })

        fetch("/api/swiper")
            .then(response=>response.json())
            .then(result=>{
                // console.log(result.data[1].setting.text)
                this.setState({
                    gridList:result.data[1].setting.text.map(value=>({
                        icon:value.link,
                        text:value.linkinfo
                    })
                )
            })
        })

        fetch("/api/scroll")
            .then(response=>response.json())
            .then(result=>{
                this.setState({ 
                    scrollList:result.data
                })
            })
    }
}

export default Swiper