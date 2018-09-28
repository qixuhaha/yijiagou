import React,{Component} from 'react'
import Shopbox from './shopBox'
import '../../style.scss'
class comBox extends Component{
    render(){
        return(
            <div>{
                this.props.tabList.map( (value,index)=>{
                    return (
                        <div key={index} className='showListBox'>
                            <p className = "listTitle">{value.title}</p>
                            <Shopbox listOne={value.data} ></Shopbox>
                        </div>
                    )
                    
                   
                } )
            }</div>
           
        )
    } 
    componentDidMount(){
                                      
    } 
}
export default comBox