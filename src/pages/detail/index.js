 import React,{Component} from "react"
 import "./style.scss"
//  import ReactDOM from "react-dom"
 import  { Carousel } from 'antd-mobile'
 import {fetchDate} from "../../utils/common.utils"
 export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            swiperList:[],
            cls:"detail-right-guanzhu-b"
        }
    }

    componentDidMount(){
        this.getSwiperList();
    }
  async  getSwiperList(){
        this.setState({
            swiperList:(await fetchDate('/api/getswiper')).data
        })
 }
    backHome(){
        this.props.history.push("/");
    }
     render(){
         return (
         <div className="scrollable">
            <div className="scrollableTop">
                <div className="left">
                    <a>
                        <s className="back" onClick={this.backHome.bind(this)}>
                        </s>
                    </a>  
                </div>
            <div className="right">
                <a>
                    <s className="list"></s>
                </a>  
            </div>
            </div>
            <div className="center">
            <div className="fix_kf">
            <a>
                联系客服
            </a>
            </div>
            <Carousel
          autoplay={true}
          infinite
          dotActiveStyle={{background:"#ee1d34"}}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
       {
           this.state.swiperList.map((value)=>{
            return  <div key={value.id} className="slider-slide">
            <a>
            <img src={value.imgUrl} alt="haha" className="swiper_item"/>
            </a>
                    </div>
           })
       }
        </Carousel>
        <div className="detail-product">
        <div className="detail-product-demo">
        <div className="detail-product-list-text">
        <div className="detail-product-text">
                <p>
                    <i className="icon-oversea-shop"></i>
                韩国兰芝雪纱隔离60#30ml绿色免税店版【保税区】
                </p>
        </div>
        </div>
        <div className="detail-right-guanzhu" onClick={this.changeClass.bind(this)}>
            <div className={this.state.cls}>
                <a className="detail-guanzhu favs">
                <span className="fonce">关注</span>
                </a>
            <div className="country-pic">
                    <span>
                        <img align="absmiddle" src="http://www.yijiago.com/images/37/1e/82/b795b9a38c0f55f584db5ce1cb9f9897d8c63dea.jpg" className="bgImg" alt=""/>
                    </span>
                    韩国直销
            </div>
            </div>
        </div>
        <div style={{clear: "both", width: "100%"}}></div>
       <div className="goods-info">
       <div className="l">
            <div className="l-shop-item-prize">
                    <span className="detail-shop-active-price price action-update-price">
                    <s>¥</s>164.00
                    </span> 
                    <span className="detail-shop-active-price mk-price">
                    <s>¥</s>213.00
                    </span> 
            <i className="icon-baoshui"></i>
            </div>
       </div>
       <div className="r">
       <div className="support">
                <i className="icon-mianyou"></i> 
                <i className="icon-kejifen"></i> 
                <span className="support" style={{fontWeight: "normal", color:" rgb(51, 51, 51)"}}>
                        剩余<i className="red">45</i>件
                </span>
        </div>
        </div>
       </div>
        </div>
        </div>
        <div className="public-dl-box">
        <a>
            <dl>
            <dt className="detail-activity-left-name">税费规则</dt>
            <dd><s className="i-r"></s></dd>
            </dl>
        </a>
        </div>
        <div className="public-dl-box">
        <a>
            <dl>
                <dt className="detail-activity-left-name">全球购政策</dt> <dd>
                    <em className="i-r"></em>
                </dd>
            </dl>
        </a>
        </div>
        <div className="public-dl-box" style={{marginBottom: "0.05rem"}}>
            <dl>
                <dt className="detail-activity-left-name">温馨提示：</dt>
                    <dd>
                        保税区发货和海外直邮属于境外购买行为，因此无法为您开具发票。
                    </dd>
            </dl>
        </div>
        <a>
            <dl className="tuwen-box">
                <dt className="detail-activity-left-name">图文详情</dt>
                <dd><div className="a-item">点击查看</div></dd>
            </dl>
       </a>
       <div className="peisong-box">
       <dl>
           <dt>送至</dt>
           <dd>
               <div className="sub map">天津市 南开区</div>
           </dd>
        </dl>
      <dl>
         <dt>
             服务
         </dt> 
         <dd>
        <div>
            <img src="http://www.yijiago.com/images/d8/37/6b/3ae41129f2e7caef683467e5127eff084d68f9d5.png" class="bgImg" alt=""/> 100%正品保证
		</div>
        <div>
            <img src="http://www.yijiago.com/images/fb/fe/40/3dbc4778ce0e13ba3e69ad0e4d74fdc5f3a3164b.png" class="bgImg" alt=""/> 不支持无理由退货
		</div>
        <div>
            <img src="http://www.yijiago.com/images/78/1f/8c/5497fc1ae51384dc8ced2ecec9c575418b44f9ba.png" class="bgImg" alt=""/> 赠品不支持退货
		</div>
								消费者告知书
尊敬的客户：
您好！
在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买：
1.您在本网站上购买的境外商品，等同于委托我公司为您在原产地直接购买。
2.您购买的境外商品适用的品质、健康、安全、卫生、环保、标识等项目与我国质量安全标准不同，与原产国当时安全标准相同；所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个人承担。
3.由于您所购买的境外商品从大陆（不含港澳台）以外的地区发出，故未加贴中文标签，且为100%原装进口商品，我们为您提供委托购买的平台服务。
易佳购全球购好货，严控每一个环节，为顾客提供100%正品。
		</dd>
       </dl>
      
       </div>
       <div className="comment-box pingjia">
            <a>
                <dl>
                    <dt>
                        <a>
                            <div class="s">商品评价</div> 
                            <div class="x">好评率
                                <em>100%</em>
                                <em>0人评价</em>
                                </div>
                            </a>
                        </dt>
                    </dl>
                    <dd class="dd-list">
                    <ul></ul>
                    </dd>
                    <dd class="dd-more">
                    <span>查看更多评论</span>
                    </dd>
            </a>
    </div>
        <div className="dianpu-box">
            <dl>
                <a>
                    <dt>
                        <div className="dp-logo">
                            <img src="http://www.yijiago.com/images/8b/eb/95/73f23bab230c26256f0f04abb8a0d19560490a95.png" className="bgImg"/>
                        </div> 
                        <div className="dp-name">
                                联盛全球购旗舰店
                            <span className="dp-sm">全球购商城</span>
                        </div>
                    </dt>
                    <dd className="dp-info">
                        <ul>
                            <li>
                                <span>描述相符</span>
                                <em>4.7</em>
                            </li>
                            <li>
                                <span>服务态度</span>
                                <em>4.8</em>
                            </li>
                            <li className="di">
                                <span>发货速度</span>
                                <em>4.7</em>
                            </li>
                        </ul>
                    </dd>
                </a>
                <dd class="dp-btn">
                    <ul>
                        <li>
                            <a class="kvs">联系客服</a>
                        </li> 
                        <li>
                            <a href="#/shopcenter/26" class="">进店逛逛</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div className="i-often-buy">
            <div className="iob-t">
                <span>猜你喜欢</span>
            </div>
            <div className="fixedBox">
            <div className="max-buy-list">
            <div className="swiper-slide ">
                <a href="#/goods/34953" className="">
                    <div class="iob-img">
                        <img src="http://image.yijiago.com/7a/ee/e2/063ddd9d5821917d673cb12d3d5a1158839fe321.jpg" className="bgImg" alt=""/>
                    </div> 
                    <span className="iob-name">韩国Laneige/兰芝C21气垫BB霜SPF50+PA+++防晒滋润遮瑕含替换装15g*2【香港直邮】</span>
                    <span className="iob-info">
                    <s>¥</s>
                    201.00
                    </span>
                </a>
             </div>
             <div className="swiper-slide swiper-slide-active">
             <a href="#/goods/38637" className="">
             <div className="iob-img">
             <img src="http://image.yijiago.com/8b/4e/ec/0ed1f9e75d0729a09e227209026a977068deda7b.jpg" className="bgImg" alt=""/>
             </div> 
             <span className="iob-name">韩国Laneige兰芝雪纱丝柔防晒隔离霜#40紫色30ml/瓶【保税仓】</span>
              <span className="iob-info">
              <s>¥</s>
              224.00
              </span>
              </a>
              </div>
              <div className="swiper-slide swiper-slide-next">
              <a href="#/goods/37945" className="">
              <div className="iob-img">
              <img src="http://image.yijiago.com/4a/4d/aa/704a5867f352884b8708c7a6ae306f9f9b603a85.jpg" className="bgImg" alt=""/></div> <span class="iob-name">法国纪梵希GIVENCHY四宫格蜜粉1号色【香港直邮】</span> 
              <span className="iob-info">
              <s>¥</s>
              450.00
              </span>
              </a>
              </div>
              <div className="swiper-slide">
              <a href="#/goods/35263" className="">
              <div className="iob-img">
              <img src="http://image.yijiago.com/dd/c5/06/ef0461169542dbe6f297b816b5272111fa1f5464.jpg" className="bgImg" alt=""/>
              </div> 
              <span class="iob-name">Za姬芮真皙美白隔离霜妆前乳防晒保湿遮瑕防辐射35g（台版）【香港直邮】
              </span> 
              <span className="iob-info">
              <s>¥</s>
              73.00</span></a></div><div className="swiper-slide"><a href="#/goods/41001" className="">
              <div className="iob-img">
              <img src="http://image.yijiago.com/da/85/31/4d542f4f61ca87159bd2619e5f4032caa6b1adb9.jpg" className="bgImg" alt=""/>
              </div> 
              <span className="iob-name">法国圣罗兰YSL气垫B20【香港直邮】</span>
               <span className="iob-info">
               <s>¥</s>
               439.00
               </span>
               </a>
               </div>
               <div className="swiper-slide">
               <a href="#/goods/35574" className="">
               <div className="iob-img">
               <img src="http://image.yijiago.com/8b/3a/48/e404c4e7546244b5fca690ef21b688b3cb28d70f.jpg" class="bgImg" alt=""/>
               </div> 
               <span className="iob-name">韩国谜尚Missha红BB霜50ml遮瑕保湿滋润强嫩白#21亮肤色【香港直邮】
               </span>
                <span className="iob-info">
                <s>¥</s>
                83.00
                </span>
                </a>
                </div>
                <div className="swiper-slide">
                <a href="#/goods/41365" className="">
                <div className="iob-img">
                <img src="http://image.yijiago.com/ff/d2/2d/9cce8ca73b36da44ef5e5915d7a605fb924d82bf.jpg" class="bgImg" alt=""/>
                </div> 
                <span className="iob-name">日本ROHTO乐敦cc美容液CC美白精华VC高渗透淡斑祛痘印20ml【保税区】
                </span> 
                <span className="iob-info">
                <s>¥</s>
                92.00
                </span>
                </a>
                </div>
                <div className="swiper-slide">
                <a href="#/goods/41417" className="">
                <div className="iob-img">
                <img src="http://image.yijiago.com/1d/e9/04/855ddd6ef5b4a808d9da624c2d15a4a3872a9a12.jpg" className="bgImg" alt=""/></div> <span className="iob-name">法国圣罗兰YSL妍活青春粉底液BR20【香港直邮】
                </span>
                <span className="iob-info">
                <s>¥</s>
                498.00
                </span>
                </a>
                </div>
                <div className="swiper-slide">
                <a href="#/goods/37929" className="">
                <div className="iob-img">
                <img src="http://image.yijiago.com/38/6f/66/ed247ed98f5eb31a9464ecae283394e9a020e588.jpg" className="bgImg" alt=""/>
                </div> 
                <span className="iob-name">法国纪梵希GIVENCHY四宫格蜜粉7号色【香港直邮】
                </span> 
                <span className="iob-info">
                <s>¥</s>371.00
                </span>
                </a>
                </div>
                <div className="swiper-slide">
                <a href="#/goods/31933" className="">
                <div className="iob-img">
                <img src="http://image.yijiago.com/15/08/5e/6a3697e7b4363a64e37651f4cce74a4a68eb716c.jpg" class="bgImg" alt=""/>
                </div> 
                <span className="iob-name">韩国innisfree悦诗风吟薄荷吸油纸定妆多效散粉5g【香港直邮】
                </span> 
                <span className="iob-info">
                <s>¥</s>54.00
                </span></a>
                </div>
                </div>
                </div>
        </div>
         <div className="picList"><img src="/img/dec35a6f8875d14be1127e6808a0b76e5efe689c.png" alt=""/>
         <img src="/img/208042537782023268645410_x.jpg" alt=""/>
         <img src="/img/815123360141019082760540_x.jpg" alt=""/>
         <img src="/img/141347972115228964182410_x.jpg" alt=""/>
         <img src="/img/172471407219390305274158_x.jpg" alt=""/>
         <img src="/img/616654106191027593273640_x.jpg" alt=""/>
         <img src="/img/117654631113501131836098_x.jpg" alt=""/>
         <img src="/img/149694588893429395738000_x.jpg" alt=""/>
         <img src="/img/556957922467109052657500_x.jpg" alt=""/>
         <img src="/img/137396291665407470261700_x.jpg" alt=""/>
         </div>                   
 </div>


    <div className="detail-footer">
            <div className="detail-footer-num">
                <span className="detail-footer-inc-dec"></span>
            </div>
            <div className="detail-footer-btn">
                <a className="add-cart">加入购物车</a>
            </div>
            <div className="cart-num-box">
                <a>
                    <span>6</span>
                </a>
            </div>
    </div>


         </div>
         )
     }
     changeClass(){
       var a =  this.state.cls === "detail-right-guanzhu-b"?"detail-right-guanzhu-b detail-guanzhu-done":"detail-right-guanzhu-b";
       this.setState({
            cls:a
       })
        
     }


   
 
      
        
    }
  