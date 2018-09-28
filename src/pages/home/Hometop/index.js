import React, { Component, Fragment } from 'react';
import './style.scss'

class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            swipeList:[1,2,3]
        }
    }
    render(){
        return (
            <Fragment>
                <div className="topBox1">
                    <ul className="search">
                        <li>浔阳区
                            <img src="../assets/iconfonts/tipsDown.png" alt=""/>
                        </li>
                        <li>
                            <img src="../assets/iconfonts/search.png" alt=""/>
                            搜索商品
                            <img src="../assets/iconfonts/sao_sao.png" alt=""/>
                        </li>
                        <li>
                            <img  src="../assets/iconfonts/info.png" alt=""/>
                            消息
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }

    
}

export default Top