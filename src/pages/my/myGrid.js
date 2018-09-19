import React,{Component,Fragment} from "react"
import  {  Grid } from 'antd-mobile'
import {fetchDate} from "../../utils/common.utils"


export default class MyGrid extends Component{
    constructor(props){
        super(props);
        this.state={
            mygrid:[]
        }
    }
    componentDidMount(){
        this.getSwiperList();
    }
  async  getSwiperList(){
      
        this.setState({
            mygrid:( await fetchDate('/api/mygrid')).data.categories.map((value)=>{
                            return {
                                icon:value.imgUrl,
                                text:value.title,
                                id:value.id
                            }
                        })
        })
    }
    render(){
        return(
            <Fragment>
        <Grid data={this.state.mygrid} columnNum={4} onClick={(el,index)=>{
            console.log(el,index);
            // this.props.history.push("/wikilist",{id:el.id});
        }} />
        </Fragment>
        )
    }
} 
