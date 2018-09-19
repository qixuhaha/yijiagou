import React,{Component} from 'react'
export default class OrderStatus extends Component{
    render(){
        return (
            <div>
            <div className="orderStatus"> 
            <div className="order-hd">我的钱包</div>
            <div className="order-list">
            <a>
           <span className="dian"></span>
           电子购物卡
            </a>
            <a>
           <span className="fan"></span>
            返利劵
            </a>
            <a>
           <span className="ji"></span>
            积分 
            </a>
            <a>
           <span className="ling"></span>
           领劵激活 
            </a>
            </div>
            </div>

             <div className="orderStatus"> 
            <div className="order-hd">卡卷包</div>
            <div className="order-list">
            <a>
           <span className="online"></span>
           线上
            </a>
            </div>
            </div>
            </div>
        )
    }
} 