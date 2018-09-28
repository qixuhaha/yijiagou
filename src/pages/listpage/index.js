import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView, Button,SearchBar,Badge ,Accordion, List} from 'antd-mobile';
import back from '../../assets/inconfont/back.svg'
import serch from '../../assets/inconfont/search.svg'
import sao from '../../assets/inconfont/sao.svg'
import fenlei from '../../assets/inconfont/fenlei.svg'
import '../../assets/iconfont/iconfont.css'

import './style.scss'

const NUM_ROWS =6;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}

class Demo extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      datalist:[],
      value:'',
      isshow:false,
      pulldata:['综合','新品','评分'],
      menu:"综合"
    };
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    // this.autoFocusInst.focus();
    fetch('/api/listpage')
    .then(response=>response.json())
    .then(result=>{
      // console.log(result.data.itemList)
      this.setState({
        datalist:result.data.itemList
      })
      // console.log(result.data.itemList)
    })
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop-50;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };
  showhiden(){
    this.setState({
      isshow:!this.state.isshow
    })
  }
  checkone(){
    this.setState({
      isone:!this.state.isone
    })
    document.querySelector('.checkTwo').innerHTML='lala';
    setTimeout(()=>{
       document.querySelector('.pull').style.display='none'
    },500)
   
  }
  handleClickP(value){
    // console.log(value)
    this.setState({
      menu:value
    })
    document.querySelector(".pull").style.display="none"
  }
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          // borderTop: '1px solid #ECECED',
          // borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.datalist.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.datalist.length - 1;
      }
      const obj = this.state.datalist[index--];
      return (
        <div key={rowID}
          style={{
            // padding: '0 15px',
            backgroundColor: 'white',
          }}
        > 
          <div className='divlist'>
            <img src={obj.image_default_id} alt="" />
            <div className='right'>
                 <div className='title'>
                 <Badge text="盛联超市"/>
                  {obj.title}
                 </div>
                 <div className='badge-list'>
                 <Badge text="满包邮" id='badgeone'/>
                 <Badge text="可积分" id='badgetwo'/>
                  </div>
                 <div className='price-and-cart'>
                   <div className='price'>￥{obj.price}</div>
                   <div className='num'>{obj.gid}人付款</div>
                   <div className='cart'>
                     <i className='iconfont' style={{color:'red'}}>&#xe600;</i>
                   </div>
                 </div>
            </div>
           </div>
        </div>
      );
    };
    return (<div style={{height:'100%'}}>
      <div className='search'>
      {
              // console.log(this.state.isshow)
              this.state.isshow?(                 
                    <div className='pull'>
                      {
                        this.state.pulldata.map((value,index)=>{
                          return <p onClick={()=>{
                            this.handleClickP(value)
                          }} key={index}>{value}</p>
                          // console.log(value)
                        })
                      }
                    </div>

              ):''
          }
        <div className='nav-bar'>
          <div className='left'>
          <span><img src={back} alt=""/></span>
          </div>
          <div className='center'>
            <span>搜索称心商品</span>
            <i className='i1'><img src={serch} alt=""/></i>
            <i className='i2'><img src={sao} alt=""/></i>
          </div>
          <div className='right'>
            <span><img src={fenlei} alt=""/></span>
          </div>
        </div>
        <div className='filter'>
        
          <div className='item1'>
            <span>{this.state.menu}</span>
            <i className='iconfont' onClick={this.showhiden.bind(this)}>&#xe65e;</i>
            
          </div>
          <div className='item'>
            <span>销量</span>
          </div>
          <div className='item'>
            <span>价格</span>
            <i className='iconfont'>&#xe62b;</i>
          </div>
          <div className='item'>
            <span>筛选</span>
            <i className='iconfont'>&#xe63b;</i>
          </div>
        </div>
      </div>
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        // renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}
        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
    </div>);
  }
}

export default Demo