import React,{Component} from 'react'
import {Grid } from 'antd-mobile';
import '../../style.scss'
class shopBox extends Component{
    render(){
        return(
            <div className= "gridBox">
            <Grid data={this.props.listOne}
                columnNum={3}
                hasLine={false}
                renderItem={dataItem => (
                <div style={{ paddingBottom: '1px'}}>
                    <img src={dataItem.icon} style={{ width: '68px', height: '58px' }} alt="" />
                    <div style={{ color: '#999', fontSize: '12px',marginTop:"2px"}}>
                        <span>{dataItem.text}</span>
                    </div>
                </div>
            )}/> 
        </div>
           
        )
    } 
    componentDidMount(){
                                     
    } 
}
export default shopBox