import React,{Component} from "react"
import  {withRouter} from "react-router-dom"
 class home extends  Component{
    render(){
        return(
            <div>
                <button onClick={this.entryDetail.bind(this)}>点击进入详情页面</button>
            </div>
        )
    }
    entryDetail(){
        this.props.history.push("/detail");
    }
}
export default withRouter(home);