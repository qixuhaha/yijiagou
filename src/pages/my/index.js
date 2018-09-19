import React,{Component} from "react"
import MyHeader from "./myHeader"
import MyList from "./myList"
import OrderStatus from "./orderStatus"
import MyGrid from "./myGrid"
export default class My extends Component{
    render(){
        return (
            <div>
                <MyHeader/>
                <MyList/>
                <OrderStatus/>
                <MyGrid/>
                </div>
        )
    }
}