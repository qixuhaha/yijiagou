import React,{Component} from "react"
import { TabBar } from 'antd-mobile';
// import {Switch,route} from "react-router-dom"
import home from "../../mock/svg/home.svg"
import homeActive from "../../mock/svg/home-active.svg"
import type from "../../mock/svg/class.svg"
import typeActive from "../../mock/svg/class-active.svg"
import car from "../../mock/svg/car.svg"
import carActive from "../../mock/svg/car-active.svg"
import my from "../../mock/svg/my.svg"
import myActive from "../../mock/svg/my-active.svg"
import MyPage from "../my/index"
import Detail from "../detail/index"
import Home from "../home/index"
import {Classify} from "../classify/index"
import {Route,Switch} from "react-router-dom"
import Demo  from "../listpage/index" 
 class Index extends Component{
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
          {/* <Switch> */}
            <Home/>
            {/* <Route path="/" exact component={Home}></Route> */}
            {/* <Route path="/detail"component={Detail}></Route> */}
            
          {/* </Switch> */}
          
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
          <Classify/>
          </TabBar.Item>
          <TabBar.Item
            title="热卖商品"
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
          <Demo/>
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
export default Index