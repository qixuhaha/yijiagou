import React,{Component} from "react"
import { TabBar } from 'antd-mobile';
import home from "../../mock/svg/home.svg"
import homeActive from "../../mock/svg/home-active.svg"
import type from "../../mock/svg/class.svg"
import typeActive from "../../mock/svg/class-active.svg"
import car from "../../mock/svg/car.svg"
import carActive from "../../mock/svg/car-active.svg"
import my from "../../mock/svg/my.svg"
import myActive from "../../mock/svg/my-active.svg"
import MyPage from "../my/index"
// import Detail from "../detail/index"
import Home from "../Home/index"
// import {BrowserRouter as Router,Route,Switch} from "react-router-dom" 
export default class My extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          hidden: false,
          fullScreen: false,           
        };
      }    
    render(){
        return(
            <TabBar
              unselectedTintColor="#949494"
              tintColor="red"
              barTintColor="white"
              unselectedTintColor="#262626"
              hidden={this.state.hidden}
            >
             <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${home}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
           <Home></Home>
          </TabBar.Item>

            <TabBar.Item
            title="分类"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${type}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${typeActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'type'}
            onPress={() => {
              this.setState({
                selectedTab: 'type',
              });
            }}
          >
          <div>分类</div>
          </TabBar.Item>
          <TabBar.Item
            title="购物车"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${car}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${carActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'car'}
            onPress={() => {
              this.setState({
                selectedTab: 'car',
              });
            }}
          >
          <div>购物车</div>
          </TabBar.Item>
          <TabBar.Item
            title="我的易佳"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${my}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${myActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
        <MyPage/>
          </TabBar.Item>
             </TabBar>
        )
    }
}