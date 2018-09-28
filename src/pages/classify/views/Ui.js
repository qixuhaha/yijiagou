import React,{Component} from 'react'
/* eslint no-nested-ternary:0 */

import { fetchData } from '../../utils/utils'
import '../style.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './showlist.scss'
import Combox from './showlist/comBox'
import Top from '../../top'
class TabExample extends Component{
  constructor(props){
    
    super(props);
    this.state={
      tabs:[],
      tabList:[],//从接口取过来的json
      listOne:[],//json里的data
      goodsList:[],//data映射出的含有icon和text的新数组
      title:[]

    }
  }
  render(){
    return(
  <div>
    <div style={{ height: ".49rem"}}>
        <Top></Top>
    </div>
    <div style={{height: "5.7rem" }}>
      <Tabs tabs={this.state.tabs}
          initalPage={'t2'}
          tabBarPosition="left"
          tabDirection="vertical"     
          onTabClick={this.handleClick.bind(this)}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={10} />}
      >
          <div className = "showListBox">
              <Combox tabList={this.state.tabList}></Combox>   
          </div>
      </Tabs>    
      <WhiteSpace />
    </div>
  </div>
  )}
  handleClick=async(tab, index)=>{
  
      const data = (await fetchData('api/v0'))
    
    this.setState({
      tabList: data.shopList,
    
      })       
    
  } 
  async componentDidMount(){
    
    const data1 = (await fetchData('api/title')).data; 
    const data = (await fetchData('api/v0')); 
    this.setState({
      tabList: data.shopList,
      tabs:data1
      }) 
  }
} 
 
export default TabExample 


