import React from 'react';
import {connect} from 'react-redux';
import './DetailPage.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';
import axios from 'axios';
class DetailPage extends React.Component {
  state = {
    bool10: true,
    bool11: true,
    bool12:false,
    index :"11",
    qian : 2,
    song : 20,
    jiesuan :"",
    chushi:1,
    news:null,
  };
  
  jianshu(e){
    this.state.chushi--
    this.setState({
      chushi:this.state.chushi
    })
    e.stopPropagation()
  }
  jiashu(e){
    this.state.chushi++
    this.setState({
      chushi:this.state.chushi
    })
    e.stopPropagation()
  }
  panduan(){
    if(this.state.bool11===true){
      this.setState({
        jiesuan:<div className="Gw6ioAqmErRtqTXjAZAfi" >¥{this.state.song}起送</div>
      })
    }else{
      if(this.state.qian>this.state.song){
        this.setState({
          jiesuan:<div class="_1283gr40210w6opvlfX_g8">去结算</div>
        })
        // return (<div class="_1283gr40210w6opvlfX_g8">去结算</div>)
      }else{
        this.setState({
          jiesuan:<div className="Gw6ioAqmErRtqTXjAZAfi" >差¥{}起送</div>
        })
        // return (<div className="Gw6ioAqmErRtqTXjAZAfi" >差¥{}起送</div>)
      }
      
    }
    console.log(this.state.jiesuan)
    console.log(this.state.bool11)
  }
  light1(e){
    var qwe =e.target.dataset.id;
    this.setState({
      index :qwe
    })
    console.log(this.state.index)
  }
  hiddens11 () {
    // console.log(this.state.index)
    this.setState ({
      bool10: !this.state.bool10,
    });
  }
  hiddens13 () {
    // console.log(this.state.index)
    this.setState ({
      bool11: !this.state.bool11,
    });
  }

  pointClick(){

  }
  // componentWillReceiveProps(){
  //   this.panduan();
  // }
  componentDidMount () {
    // console.log(Swiper)
    this.chuLaiBaPiKaQiu()
    console.log(this.state.news);
    
    this.panduan();
  }
  backClick () {
    this.props.history.go (-1);
  }
  async chuLaiBaPiKaQiu(){
    const searchs = this.props.location.search
    let shopid = searchs.slice(1)
    let shopId = shopid.split('&')
    var mtshopid = new Object();
    for(var i = 0; i < shopId.length; i ++) {
      mtshopid[shopId[i].split("=")[0]] = shopId[i].split("=")[1]
   }
    // console.log(searchs,shopId,mtshopid)
    let news = (await axios.get (
      `https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/${mtshopid.key}`,
      {
        params: {
          // limit: 20,
          // page: this.state.page,
        },
      }
    )).data.data;
    this.setState({
      news:news
    })
    console.log(this.state.news)
  }
  xuanran(){
    console.log(this.state.news.shopInfo)
      return (
        <div className="DetailPage">
        <div className="DetailPageTopBack">
          <div className="DetailPageTopBack1">
            <i
              className="DetailPageTopBack2"
              onClick={this.backClick.bind (this)}
            />
          </div>
        </div>
        <div className="DetailPageAnnouncement">

          <div
            className="DetailPageAnnouncementLeft"
            style={{
              backgroundImage: `url(${this.state.news.shopInfo.shopPic})`
            }}
          />
          <div className="DetailPageAnnouncementRight">
            <div className="DetailPageAnnouncementRight1">
              <div className="DetailPageAnnouncementRight2">
                <span className="DetailPageAnnouncementRightSpan">
                  45分钟
                </span>
                <span className="DetailPageAnnouncementRightSpan2">
                  562m
                </span>
                <i className="DetailPageAnnouncementRightI" />
              </div>
              <div className="DetailPageAnnouncementRight3">
                公告：⚠️下單後請選擇冰塊溫度，默認是熱的請注意！          ⚠️奶霜系列或有加點奶霜的飲品建議點去冰以上的溫度，點熱飲奶霜會融化到飲品內！             ⚠️下完單後如要退單麻煩致電到店裡通知，已出完單配送的恕不退單，谢谢
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="_2Z4jTu2a_hkjxbm24gv-_o">
                        <i
                          className="_3C4qZtRRbheePWqEpL_O6g"
                          style={{
                            backgroundimage: 'url("https://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png")',
                          }}
                        />
                        <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
                          满元赠送珍珠奶茶份
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="_2Z4jTu2a_hkjxbm24gv-_o">
                        <i
                          className="_3C4qZtRRbheePWqEpL_O6g"
                          style={{
                            backgroundimage: 'url("https://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png")',
                          }}
                        />
                        <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
                          满减;满减;满减;满减;满减
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="_2Z4jTu2a_hkjxbm24gv-_o">
                        <i
                          className="_3C4qZtRRbheePWqEpL_O6g"
                          style={{
                            backgroundimage: 'url("https://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png")',
                          }}
                        />
                        <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
                          折扣商品.折起
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="_2Z4jTu2a_hkjxbm24gv-_o">
                        <i
                          className="_3C4qZtRRbheePWqEpL_O6g"
                          style={{
                            backgroundimage: 'url("https://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png")',
                          }}
                        />
                        <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
                          领元券
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="_2Z4jTu2a_hkjxbm24gv-_o">
                        <i
                          className="_3C4qZtRRbheePWqEpL_O6g"
                          style={{
                            backgroundimage: 'url("https://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png")',
                          }}
                        />
                        <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
                          实际支付元返元商家代金券
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DetailPageContent">
          <nav className="DetailPageContentNav">
            <div className="DetailPageContentNavChild1" data-id="11"  className={this.state.index==="11"? "DetailPageContentNavChild1 DetailPageContentNavChildLight" :"DetailPageContentNavChild1"} onClick={this.light1.bind(this)}>
              点菜
              <span
                className="DetailPageContentNavChild1Span"
                // style={{
                //   transform: 'translateX(0%)',
                //   transitionTimingFunction: 'ease-in',
                // }}
                // style={
                //   ()=>{
                //     if(this.state.index === '11' ){
                //       return (transform :'translateX(0%)')
                //         }
                //   }
                // }
                style={
                  this.state.index === '11'  ?{transform:  'translateX(0%)',transitionTimingFunction: "easeIn"}:this.state.index === '12' ?{transform:  'translateX(100%)',transitionTimingFunction: "easeIn"}:{transform:  'translateX(200%)',transitionTimingFunction: "easeIn"}
               
              
              }
                data-id="11"onClick={this.light1.bind(this)}
              />
            </div>
            <div className="DetailPageContentNavChild1" data-id="12"onClick={this.light1.bind(this)}className={this.state.index==="12"? "DetailPageContentNavChild1 DetailPageContentNavChildLight" :"DetailPageContentNavChild1"}>评价</div>
            <div className="DetailPageContentNavChild1" data-id="13"onClick={this.light1.bind(this)}className={this.state.index==="13"? "DetailPageContentNavChild1 DetailPageContentNavChildLight" :"DetailPageContentNavChild1"}>商家</div>
          </nav>

        </div>
        <div className="DetailPageContenShop">
          <div className="DetailPageContenShop1" style={{
                    display: this.state.index === '11'  ? '' : 'none'
                }}>
            <nav className="DetailPageContentNav1">

              <a
                href="###"
                className="DetailPageContenta1 DetailPageContentaLight"
              >
                <div className="DetailPageContentDiv1">
                  <span className="DetailPageContentSpan6 DetailPageContentSpanLight">
                    <img src="" alt="" className="DetailPageContentImg" />
                    热销
                  </span>
                </div>
              </a>
            </nav>
            <div className="_2WX0avh-NMdw3M5gvsCHxJ">
              <div className="_3ZoM88aoYaJ-xWhfWE82w8" style={{top: '0px'}}>
                热销
              </div>
              <div className="_1z6n0TveYg4ZOx6toaJUin">
                <dl
                  className="frWJ60dxSdM-RMcP_w2Hc _1PDYAsHxteqQZZniln0Uzm"
                  onClick={this.hiddens11.bind (this)}
                >
                  <dt className="_3RavW11QAiAleNLYOLiu19">热销</dt>
                  <dd className="_-2M8Z7qsyhtHyRJZrn130">
                    <div className="_1gWqoZjOHOfn2Hjs4Mc-Z4">
                      <img
                        src="https://p1.meituan.net/xianfu/185a5f5aa6ec0a7cbe15517d165b780b39241.png"
                        alt=""
                        className="JxWjALDzA2pA_A72LwnJc"
                      />
                    </div>
                    <div className="_3dXPbHSlB9Dx8NF-fGKFni">
                      <div className="_1Yj8iPRKbDdlQlpXVll4m5">
                        <div className="_3d62XhmxqZ2aqaKNGiIIj1">
                          (中杯)波霸奶茶
                        </div>
                        <div className="hbN2y_Sdekf5nEgB72jmC">
                          奶茶搭配波霸，口感软Q。主要原料：红茶；辅料：波霸、植脂末。
                        </div>
                        <div className="_2_qYSM-p2_3BQi11YF_OD1">
                          <span className="mtsi-num">月售</span>
                          <span className="mtsi-num">赞</span>
                        </div>
                        <div className="_1kHefsZpC_WqkU7aDm77Ix" />
                        <div className="_1kHefsZpC_WqkU7aDm77Ix">
                          <div className="_3rE20XmTwcUpTaMs1iEU06">
                            {' '}
                            <span className="_1NCGkfhtvlFcFVnrhG614C">¥</span>
                           
                            {' '}
                            <span className="_1IzAoChxIGw_cq0-ppsTcz">起</span>
                          </div>
                        </div>
                        <div className="_27--GW3TW9UFkg1En7I0Hm _2o2sqx6siJJTTsKSzlTCu_" className={
                      this.state.bool11
                        ? '_27--GW3TW9UFkg1En7I0Hm _2o2sqx6siJJTTsKSzlTCu_'
                        : '_27--GW3TW9UFkg1En7I0Hm _2o2sqx6siJJTTsKSzlTCu_ hidden12'
                    }>
                          选规格
                        </div>
                        <div className="_3qaHKVo6wZKtqjz07TtEZh _2o2sqx6siJJTTsKSzlTCu_" className={
                      this.state.bool11
                        ? '_3qaHKVo6wZKtqjz07TtEZh _2o2sqx6siJJTTsKSzlTCu_ hidden12'
                        : '_3qaHKVo6wZKtqjz07TtEZh _2o2sqx6siJJTTsKSzlTCu_'
                    }><span className="_3V2xq0s1Sr9qWxGpda6zrG"><button className="_4N-l_ft-sqjZMUTJuKZT8 _3ZldkObt0bY4MgYPQs2U9H" aria-label="查看已选规格" aria-haspopup="true"  onClick={this.jianshu.bind(this)}></button></span><span className="_1XzZKMpZiEHd8SJZaOL81h">{this.state.chushi}</span><span  className="_pniWG7WglTiHR-vZEVyd"><button className="_2-aL0qCEXtBABf_qJzGbmm _3ZldkObt0bY4MgYPQs2U9H" aria-label="选择规格" aria-haspopup="true" onClick={this.jiashu.bind(this)}></button></span></div>
                      </div>
                      <div className="_2T5aGK_TgujkpCI76KXkDK">
                        <img
                          className="fIBnB3W7Fr88tfnuMI8H"
                          src="https://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png"
                          style={{width: '60px', height: '15px'}}
                        />
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="_2FP4VbMnYzu6k_RZg4duoG" style={{
                    display: this.state.index === '12'  ? 'block' : 'none'
                }}><div><div className="_1ge2vesuXq0bsKSjtJuWul"><div className="Nfjje4bsG3ap8cWjmNXVP"><div className="hWZpdbMMYe_yadaTJiNRf _14kpWTRB_m6jtNdzDh5zVb">4.4</div><div className="_2txLTzLPLHNIj8OjdRNU12">商家评分</div></div><div className="Nfjje4bsG3ap8cWjmNXVP"><div className="_2MCVqo8DxKUjg1E8b2LTd6"><div className="_2JpgtXK1aGYJXKF_iGd5Hf">口味</div><div className="xRsdcDM1cElNJzhGhslsQ"><div className="D11MX3M-SDa4TXs8lmgHq" style={{height: "12px"}}><i className="_1ukqM-8qHp61SdF68btTCh" style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh" style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh _10sddMGRlnE8IDQKwCu5ps" style={{transform: "scale(1)"}}></i></div></div><div className="_3ApShvxcuJSz0ChAATnaV5">4.5</div></div><div className="_2MCVqo8DxKUjg1E8b2LTd6"><div className="_2JpgtXK1aGYJXKF_iGd5Hf">包装</div><div className="xRsdcDM1cElNJzhGhslsQ"><div className="D11MX3M-SDa4TXs8lmgHq"  style={{height: "12px"}}><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh"  style={{transform: "scale(1)"}}></i><i className="_1ukqM-8qHp61SdF68btTCh _10sddMGRlnE8IDQKwCu5ps"  style={{transform: "scale(1)"}}></i></div></div><div className="_3ApShvxcuJSz0ChAATnaV5">4.6</div></div></div><div className="Nfjje4bsG3ap8cWjmNXVP"><div className="hWZpdbMMYe_yadaTJiNRf  ">4.8</div><div className="_2txLTzLPLHNIj8OjdRNU12">配送评分</div></div></div><div className="_2ee8FqXLadd8JWbzfpnTiv"><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">全部(1585)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">好评(1416)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW _2iyqpzLEsR5RfNQxyDWyJi">差评(106)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">有图评价(183)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">味道赞(138)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">价格实惠(23)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">分量足(16)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">满意(12)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">推荐(10)</span><span data-pagecount="33" className="_1qevuEKDevpXNY48JzARqW">手工(6)</span></div><div className="_36NkCIRjKS6eBXfjH_Drk7"><ul className="_2xqMz4MgFqW4i7UvX8nA-Y" data-nextindex="20"><li className="_1nHe5F5HbQ3xQcBHw15Dxh _2ic5QymjxGck4zomdY7ZCN"><div className="_3RXgPcgXFFdSQ1PcVO04cI _2ic5QymjxGck4zomdY7ZCN"><div className="_3_17ihWifyViAv-ya6kvGt"><img className="_3kGVtmi3q1-EpUNXQqGsPC" src="//s3plus.sankuai.com/v1/mss_00c90c47614241978d32cca9bc6e44a4/h5i/userpic_defalut.c741e924.png" alt=""/></div><div className="QJTdC0Lr36uL2JMIMpYz5"><div className="_3RXgPcgXFFdSQ1PcVO04cI _2ic5QymjxGck4zomdY7ZCN"><span className="_2MkoczLAGqMD8A1RehAT0D">匿名用户</span><span className="_3mlioDT6z9JIyst2V6tv7Y">2019-06-25</span></div><div className="eKRoPLexnyJqSo6Koxely _2ic5QymjxGck4zomdY7ZCN"><div className="_2B7YFaTbdNNgXUuqDaH7Ch"><i></i><i className="undefined undefined"></i><i className="undefined undefined"></i><i className="undefined undefined"></i><i className="undefined undefined"></i></div><span className="_3c6aP_wLyVi9ZlOEjvZK-M">37分钟送达</span></div><div className="_106yKfkpj3KTb02SJjHwEf _2ic5QymjxGck4zomdY7ZCN">#咖喱牛肉丸（6粒）#牛肉丸不新鲜，有股酸味，类似那种隔夜的，或者放太久，也有可能是天气热没有冷藏保鲜好导致的，总之就是不新鲜，口感极差，咬了一颗吃不下去，都丢了。而且这个压根不是牛肉丸，叫包心贡丸才对。</div><div className="_1N5Dtk_-9a-WKeEDKp2o_u _2ic5QymjxGck4zomdY7ZCN"></div><div className="_23WXLQ8ubjs0uQLg9-m_CF _2ic5QymjxGck4zomdY7ZCN"><div className="_1X50yawTOnXOHpCJvrvO1D"></div><span className="g04jGczfkNuPUK1BTKNFa">快速准时,风雨无阻,仪表整洁,货品完好,礼貌热情,穿戴工服</span></div></div></div></li></ul></div></div></div>

          <div className="_3rlgdBOov8p5dp4fwJFNQO" style={{
                    display: this.state.index === '13'  ? 'block' : 'none'
                }}><div className="uX2TFavM5MHSp-Ld9TeFn"><div className="_3TRRkFr5YLsBe5i4G3Y0Yc"><img className="_2SMlnGtJUmUlTY8uWspdV7" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAV1BMVEUAAACrq6uqqqqrq6uvr6+qqqqsrKysrKyqqqqsrKyurq6tra2qqqqrq6urq6usrKyxsbGqqqqrq6urq6urq6uqqqqqqqqrq6urq6urq6urq6uqqqqqqqptythVAAAAHHRSTlMA9dHCCYNBTN4vGSPsj2hFD6lgd3Tly7Z6VDyiLLeTfQAAASlJREFUKM91UlGWgyAMJICAqK1WrdrO/c+5aXhK2WXnJy8ZMkwC6oR1gwlEwQzOqhJ27nGhnwvaM6Ub11nbuUYz7TM3AOae07sBhszRogosdLIz6GzLzYT5EzvCIYWx0US6SWYOUMdhw1tSFyAITtI3Nm4EReEA42P0BhA2Ejq1Y5JBAxolaBBEecKuDI5UMqcZk44dXAnczdC45vbQYhRBEUSEEE8yguQiDj3GOjmiZ722LtviyaYedUMPHsOn6vhnFMNadkVbW0KLlc/c8Kytz+D2Cc8UlM2Lzy0tEQtnlLUFeiy5UeN6/gmbLcgN0/fB4ZsbCqm4Ys/ZjLUrDSTLyehvgy+SNcrayFX+20M4+YsV9iaaXlXgCPtS7ZN7e6B/qX/Qal34/AGEtRT7yCXlzQAAAABJRU5ErkJggg==" style={{height: "16px top: 1px"}}/><p className="_1DIKnLUnCkmE6RVWwwhY-e mtsi-num">广州市天河区沙太南路号久凌新街市A号</p></div><div className="_3TRRkFr5YLsBe5i4G3Y0Yc D_I09AmRoETUxrbzIP6Z3"><img className="_2SMlnGtJUmUlTY8uWspdV7" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEUAAACsrKyrq6u8vLyrq6uqqqqurq6rq6uqqqqurq6rq6uqqqqrq6urq6urq6urq6urq6utra2qqqqrq6urq6urq6usrKyvr6+qqqqrq6urq6urq6uurq6rq6uqqqqqqqqqqqqrq6urq6uqqqqurq6rq6utra2tra2qqqpQWWHrAAAAKHRSTlMAa5UFpvkR9vIJxu3ey2FaSyrmiHNELxy1f2Y3INfQvq+ajHolUT0Y1wVGwAAAAV5JREFUOMt9k+l6gyAQRTGAu8bdqM2+nfd/whZJ22hMzg/9Zu6dEYQRE/K+Sr/EO77OWwxh7y6obh8CkTodfNCbdTBRg+tBg6cyaYL1RoOvavkrt8d50d0JgaJ0bfMCEucuply6LSRjk4rwIpYYYjLzXuEs6laZGzLVfDS0mlh+MqyA9IPh4tERu8sGd5X4oMQWorBbMHRAlOTiuvOA7NVQQ2k7yw1+u7CGHs6jrvBvz584mbwhhfzntcYfbELZHVWoR2tNIFwxsBOWnV3Kja2Nc+Jmo485WtpL4HEfCwvqMbHGA8zDHp5DaCsr9g8D+jQoIB8LzWHaVoVdjDyVZnfNqhrTJYl4kOI1Yk6Gvv0FR+J2pjcR1X8kQ+LpOAwRanLpE4r8Ka59DsF0LPZ4/V/DTqOkmBIoOLh2wkIoxSuOpqjN7/CJrmKJZgeq3sP+3fzKswdEqXhPe0zK2Wh/A7mFImCuxPBKAAAAAElFTkSuQmCC" style={{height: "16px top: 1px"}}/><p className="_1DIKnLUnCkmE6RVWwwhY-e">查看食品安全档案</p></div></div><div className="uX2TFavM5MHSp-Ld9TeFn"><div className="_3TRRkFr5YLsBe5i4G3Y0Yc"><img className="_2SMlnGtJUmUlTY8uWspdV7" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAS1BMVEUAAACsrKy1tbWqqqqrq6v///+rq6urq6urq6urq6urq6uurq6qqqqrq6usrKyqqqqrq6uqqqqqqqqrq6urq6uqqqqsrKywsLCqqqqPxk2bAAAAGHRSTlMAZQfy5wKLvamAUCrhcjmUQtbZokbKJg4RvoWNAAAA8ElEQVQoz4WTWZLDIAxEBWIxxgtekvT9TzqumQFFSRz3DxSvqiW0UJOfQlyZ1xgmT6+yo0OTG62m/QBwZ0rOxXQMDD2JfAKcsc3JOCD5RjsgKDs7A1vlCTD0IgOk/7hCNe9/jQaE9hhju84Y7HGMcBIXkPgO45GXO6wVFnvnaQLbz9gyJgroSGFRh0AR5gwbRFpRzvCOhRj5DGfwG75rrM1vQHg8m+vUHhvAxrfU6sfE8TBYSv1YK4uod0CpZWlFFdl0u9eitpaIpCV/DZ01kIZejcP1MJHfgPl9FL8P8oc12HPeZQ2ul0iv4MK8qBX8Aa70EZDD+3G4AAAAAElFTkSuQmCC" style={{height: "15px top: 2px"}}/><p className="_1DIKnLUnCkmE6RVWwwhY-e mtsi-num">配送时间：:-:</p></div></div><div className="uX2TFavM5MHSp-Ld9TeFn"><div className="_3TRRkFr5YLsBe5i4G3Y0Yc D_I09AmRoETUxrbzIP6Z3"><img className="_2SMlnGtJUmUlTY8uWspdV7" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAACYmJiYmJibm5uYmJiXl5ezs7OXl5eXl5eYmJiYmJiYmJiZmZmgoKCYmJiYmJiZmZmZmZmbm5ufn5+Xl5eYmJiZmZmYmJiampqXl5fFk318AAAAGXRSTlMAVKso+bYG6tzTS346FuW+cGgcEJKHW5sw6MqDlgAAAMFJREFUKM9909sSgyAMRdGDRGxFtF7b8/8/2po6iuPE/URYb2HAtfRqYNdUlGRqLRTWN/ou6AxdhBNM7skZJr/ICJMj2cPkmbLg4Djo4OdC6ygOBzs+0qrCLamR8fhkqedycdoHOWPQ7Ty5X58Zkd3K3uCREm4YLYc7rphu2LMFOjqD35x0z49/RThxQ/EAJuFWGTIeWkadgtea6ucH9+wC8vzqO6MfgatbD3q4su3KtivbXiqbTtawvaUk2I3ZF/wCwVMN845HN1gAAAAASUVORK5CYII=" style={{top: "3px"}}/><p className="_1DIKnLUnCkmE6RVWwwhY-e _3uB2vE9Y4wSQDfPnTSNbhY">新店开业，，甜工馆（梅花园店）欢迎新老顾客光临，，如有服务不周，请多多谅解，，没有什么事情是沟通不了的！！</p></div><div className="_3TRRkFr5YLsBe5i4G3Y0Yc _2PEu_HF1-cXQ3tQkwR6boh"><img className="_2SMlnGtJUmUlTY8uWspdV7" alt="" src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/bc2175e8adc4beec375977e424b1f542.png" style={{top: "3px"}}/><div className="_1DIKnLUnCkmE6RVWwwhY-e U-OM_fj_xzZZZxx-7d6HR"><p className="_3yYDLLPHxgkdIrVguICpPn">商家服务</p><div className="_33wUi002jcGzYNMhfTO5fE"><div className="_3AyrvvC7QVdUorf4Ocgdmo"><i className="_2BKJNaG0a_xXgq8YcifQ9G" style={{backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arf8Arv9dh4GPAAAAFHRSTlMAQL+A8Q6ub6AmUOAwIJHQYM+GX0YPCd8AAACvSURBVCjPpdNBDsMgDARAg21wICRNyv/f2kbQqhEGDt0LkocVFwywOMpqyC1vJc+ghj0t4Dx04x0Q95kJMgySfzikT2nVOMc6NkdsOTiByhZblpgGzCQwYDxxNSV+E2PSjZkQbc22PK3FG7sTr3bQ2w+JiAB2Z/VtoofgdcupzKHMZPMKfyscj7XH5dhHDBK6XPInB9fntFuypuVcK5Kth4aVzHnykSdrMFmiyQq+AJ+LC5MukzlBAAAAAElFTkSuQmCC&quot;)"}}></i><span className="fbF6HZgWQCMuvyE05O0Dr">该商户支持在线支付</span></div></div></div></div><div className="_3DecyBGo-Ks4YfaDvUinzL"><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage:"url(&quot;http://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">满减;满减;满减;满减;满减(在线支付专享)</span></div><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage: "url(&quot;http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">折扣商品.折起(在线支付专享)</span></div><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage: "url(&quot;http://p1.meituan.net/activityconfig/3fc360f1c726e7148380f4c77fa303fd1475.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">领元券</span></div><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage: "url(&quot;http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">实际支付元返元商家代金券</span></div><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage: "url(&quot;http://p0.meituan.net/activityconfig/dfb8be4fc2eb746ecbc4c1485dba635a1127.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">满元赠送赠送《红豆鲜奶桃胶份》</span></div><div className="_3X3rTlKiBQ1p9hkgnnyUuO"><span className="FAsugNTR2_MRABp8cutgj" style={{backgroundImage: "url(&quot;http://p1.meituan.net/xianfu/32200c3060be7903f62c9076308619ee734.png&quot;)"}}></span><span className="_1G0mv-EqtyGw3Khbt2T4JH mtsi-num">该商家支持在线支付</span></div></div></div></div>
        </div>

        <div
          data-tag="modal-container"
          className={
            this.state.bool10 ? 'modal-container hidden12' : 'modal-container'
          }
        >
          <div className="_2UbJF3Jz3GcEYF7KkmG47_ _7UdNXXaRZd4O8efttMk-_">
            <div className="_1b6ukHA3mqsriD151jxApK">
              <div className="_37J4zzojyx80PuqKLoFejB">
                <div className="_2P8rH6xEPuMbgLksMRe7Gh">
                  <img
                    src="https://p1.meituan.net/xianfu/185a5f5aa6ec0a7cbe15517d165b780b39241.png"
                    alt=""
                    className="UYEzEm0ZnyL3jreWUUvbl"
                  />
                </div>
                <dl className="_1-S-x03GX_EZzrIKTwTIXX">
                  <dt className="StiVkgbkNHJUATp5Y_gdY">(中杯)波霸奶茶</dt>
                  <dd className="_1PUN4rZ1Z1KCnBC30wOqhB">
                    <div className="eEQrs_hLCy8KhJ7c3sfXu">月售</div>
                    <div className="_2IgzVPbnqds34hMtKoyXdp">赞</div>
                  </dd>
                  <dd className="_2-W5UefR9quwhEGdxbaYcP">
                    <img
                      src="https://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png"
                      style={{
                        width: '60px',
                        height: '15px',
                        marginRight: '5px',
                      }}
                    />
                  </dd>
                  <dd className="zs511DCVVUmJHyLemG-KR">
                    奶茶搭配波霸，口感软Q。主要原料：红茶；辅料：波霸、植脂末。
                  </dd>
                </dl>
                <div className="_2Ly8WnRVqttaX2KP7hv-4I">
                  <div className="_2ICjkT6n1kruTAmUBmwvMy">¥{}</div>
                  <div
                    className="_3IlMQC3smm19rQ5twr8tZr"
                    onClick={this.hiddens13.bind (this)}
                    className={
                      this.state.bool11
                        ? '_3IlMQC3smm19rQ5twr8tZr '
                        : '_3IlMQC3smm19rQ5twr8tZr hidden12'
                    }
                  >
                    加入购物车
                  </div>
                  <div
                    className="_3qaHKVo6wZKtqjz07TtEZh"
                    className={
                      this.state.bool11
                        ? '_3qaHKVo6wZKtqjz07TtEZh hidden12'
                        : '_3qaHKVo6wZKtqjz07TtEZh'
                    }
                  >
                    <span className="_3V2xq0s1Sr9qWxGpda6zrG">
                      <button
                        className="_4N-l_ft-sqjZMUTJuKZT8 _3ZldkObt0bY4MgYPQs2U9H"
                        aria-label="移出购物车"
                        aria-haspopup="false"onClick={this.jianshu.bind(this)}
                      />
                    </span>
                    <span className="_1XzZKMpZiEHd8SJZaOL81h">{this.state.chushi}</span>
                    <span className="_pniWG7WglTiHR-vZEVyd">
                      <button
                        className="_2-aL0qCEXtBABf_qJzGbmm _3ZldkObt0bY4MgYPQs2U9H"
                        aria-label="加入购物车"
                        aria-haspopup="false"onClick={this.jiashu.bind(this)}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="_1oj5ZireVlqhZdRNpneWZr"
                onClick={this.hiddens11.bind (this)}
              />
            </div>
          </div>
        </div>
        <div className="_3SLP2ToMsOn9d95siom9_y">
          <div
            role="button"
            className="_2RGoycyx53KzIR2S2DfgAP _1HE4SEUApcJyrFbaPTnLIR" className={
              this.state.bool11
                ? '_2RGoycyx53KzIR2S2DfgAP'
                : '_2RGoycyx53KzIR2S2DfgAP _1HE4SEUApcJyrFbaPTnLIR'
            }
            aria-label="购物车,没有商品"
            aria-expanded="false"
          >
             <div className="fkGTIO3udUNx6VHFAvrM5 _3swrFfW-MNATVJ9Imoaiol" className={
                      this.state.bool11
                        ? 'fkGTIO3udUNx6VHFAvrM5 _3swrFfW-MNATVJ9Imoaiol hidden12'
                        : 'fkGTIO3udUNx6VHFAvrM5 _3swrFfW-MNATVJ9Imoaiol'
                    }>{this.state.chushi}</div>
          </div>
          <div className="_81D588yLwRMgqONSflAu5" className={
                      this.state.bool11
                        ? '_81D588yLwRMgqONSflAu5 hidden12'
                        : '_81D588yLwRMgqONSflAu5'
                    }><div className="price"><span className="_1z15W6q8YX4vbR4QIo9i1D"><span className="Mz9i44XAAg-3UjwIb6vV7">¥</span>{}</span></div><span className="_3P91T8TMHK9J3YtG_PtZNP">另需配送费¥{}</span></div>
          <div className="_2C87Jn7HbhKZoooq0tFiD6 _81D588yLwRMgqONSflAu5" className={
                      this.state.bool11
                        ? '_2C87Jn7HbhKZoooq0tFiD6 _81D588yLwRMgqONSflAu5'
                        : '_2C87Jn7HbhKZoooq0tFiD6 _81D588yLwRMgqONSflAu5 hidden12'
                    }>
            另需配送费¥5
          </div>
          {
            // this.state.bool11?( <div className="Gw6ioAqmErRtqTXjAZAfi" >¥20起送</div>):(<div className="Gw6ioAqmErRtqTXjAZAfi" >差¥{}起送</div>)
            this.state.jiesuan
          }
        </div>
      </div>
      )
  }
  render () {
    return (
      <div>
        {this.state.news ?this.xuanran.bind(this)():""}
      </div>
      
    );
  }
  


}
export default connect (state => {
  return state;

  // console.log (state);
}) (DetailPage);
