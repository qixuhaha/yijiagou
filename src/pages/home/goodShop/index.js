import React, { Component, Fragment } from 'react';
import {withRouter} from "react-router-dom"
import './style.scss';

class goodShop extends Component{
    constructor(props){
        super(props);
        this.state={
            recommendList:[]
        }
    }
    render(){
        return(
            <Fragment>
                <div className="goodShop">
                    <div className="index_title">
                        <li className="clock"><img src="../assets/iconfonts/clock.png" alt=""/></li>
                        <li className="title">有间好店</li> 
                    </div>
                    <div className="scrollBox">
                        <ul className="scroll">
                            <li>
                                <img src="http://image.yijiago.com/97/57/44/e4d09e28dbeaded033cb69f8ecc2078a95840688.jpg" alt="" />
                                <p>3.5万人正在逛店</p>
                            </li>
                            <li>
                                <img src="http://image.yijiago.com/a3/d1/11/2e8ac823b86237d94f24debbca7cdcf078685dbf.jpg" alt="" />
                                <p>3.2万人正在逛店</p>
                            </li>
                            <li>
                                <img src="http://image.yijiago.com/23/fd/22/09f9e15d32aae481445658fec2de841dea8cdc83.jpg" alt="" />
                                <p>2.9万人正在逛店</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <img src="http://image.yijiago.com/08/a8/bf/ea248006cc0aaa453cc9fe52b1fe167792a161d4.jpg" alt=""  style={{width:"100%"}} />
                </div>
                {/* 商品推荐 */}
                <div className="goodShop2">
                    <div className="index_title">
                            <li className="clock"><img src="../assets/iconfonts/clock.png" alt=""/></li>
                            <li className="title">商品推荐</li> 
                    </div>
                </div>
                <ul className="recBox">
                    {
                        this.state.recommendList.map(value=>(
                            <li className="goods-item">
                                <div className="goods-pic">
                                    <img src={value.image_default_id} className="bgImg" onClick={this.handleDetailTap.bind(this)}/>
                                </div>
                                <div className="goods-info">
                                    <span className="goods-name">
                                        <i className="icon-oversea-shop">
                                            <img src="../assets/iconfonts/quanqiugou.png" alt=""/>
                                        </i>
                        	            {value.title}
                                    </span> 
                                    <div className="btn-box">
                                        <span className="goods-price"><s>¥</s>{value.price}</span>
                                        <span className="mk-price"><s>¥</s>{value.mkt_price}</span> 
                                        <span className="num">19人付款</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
    handleDetailTap(){
            this.props.history.push('/detail');
    }

    componentWillMount(){
        fetch("/api/recommend")
            .then(response=>response.json())
            .then(result=>{ console.log(result.item[0].title)
                this.setState({
                     recommendList:result.item
                })
               
            })
    }
}

export default withRouter(goodShop);