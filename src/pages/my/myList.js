import React from "react"
export default (props)=>{
    return (
        <div>
    <div className="myList">
    <span className="my-order"><a>我的订单</a></span>
    <span className="allOrder">
    <a>查看全部订单</a>
    <s className="right"></s>
    </span>
    </div>
    <div className="myList-icons">
            <a>
           <span className="dai"></span>
            待付款 
            </a>
            <a>
           <span className="fa"></span>
            待发货
            </a>
            <a>
           <span className="shou"></span>
            待收货 
            </a>
            <a>
           <span className="xiao"></span>
            待消费
            </a>
            <a>
           <span className="tui"></span>
            退换货 
            </a>
    </div>
    <div className="banner">
    <div>
        
    </div>
    </div>
    </div>
    )
}