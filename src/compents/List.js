import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
import './List.scss';
class List extends React.Component {
  state = {
    bool: false,
    booll: false,
    booll2: false,
    bool3: false,
    bool4: false,
  };

  componentDidMount () {
    window.addEventListener ('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100 || this.state.bool3 === true) {
        // console.log (this.state.bool3);
        this.setState ({
          bool4: true,
        });
      } else {
        this.setState ({
          bool4: false,
        });
      }
    });
  }
  toggle () {
    // this.refs.input.focus();
    this.setState ({
      booll: !this.state.booll,
      // bool3: !this.state.bool3,
      booll2: false,
    });
    if (this.state.booll) {
      this.setState ({
        bool3: false,
        bool4: false,
      });
      console.log (this.state.booll);
    } else {
      this.setState ({
        bool3: true,
        bool4: true,
      });
      // console.log (this.state.booll);
    }
  }
  toggle2 () {
    this.setState ({
      booll2: !this.state.booll2,
      // bool3: !this.state.bool3,

      booll: false,
    });
    if (this.state.booll2) {
      this.setState ({
        bool3: false,
        bool4: false,
      });
    } else {
      this.setState ({
        bool3: true,
        bool4: true,
      });
    }
    console.log (this.state.bool3, this.state.bool4);
  }
  toggle3 () {
    this.setState ({
      bool3: true,
      bool4: true,
    });
    console.log (this.state.bool3, this.state.bool4);
  }
  // hiddener () {
  //   this.state.bool3 = true;
  //   this.state.bool4 = true;
  //   console.log (this.state.bool3, this.state.bool4);
  // }
  render () {
    // console.log(this)
    return (
      <Fragment>
        <div
          // className="_3LftIJg2zEw2F3jr4vZbMn _3cP1WzXlRrmq6fRBK6GZ3"
          className={
            this.state.bool3
              ? '_3LftIJg2zEw2F3jr4vZbMn _3cP1WzXlRrmq6fRBK6GZ3'
              : '_3LftIJg2zEw2F3jr4vZbMn'
          }
          // onClick={event => {
          //   this.toggle2.bind (this);
          //   this.toggle.bind (this);
          // }}
          onClick={this.toggle3.bind (this)}
        />
        <div
          className="List"
          className={this.state.bool4 ? 'List active1' : 'List'}
        >

          <div className="_1KjqV4W7A9sBbIZx9J-l7R">
            <div className="_2ERaZOgKrKE21uYNISlvxw">
              <div className="_22YSgYsVZZ33WpdC5csPhH">
                <ul className="CpTpAqo273nQXSG__3F68">
                  <li
                    className="_3E-rqFFoOgqpMgyxWrzStr"
                    onClick={this.toggle.bind (this)}
                  >
                    综合排序<i className="_1vwBiUqoRa0l1lOafmns1x" />
                  </li>
                  <li className="_3E-rqFFoOgqpMgyxWrzStr">
                    销量最高
                  </li>
                  <li className="_3E-rqFFoOgqpMgyxWrzStr">距离最近</li>
                  <li
                    className="_3E-rqFFoOgqpMgyxWrzStr"
                    onClick={this.toggle2.bind (this)}
                  >
                    筛选<i className="_1zw9qO_fPmPD7jcUtNfUJT" />
                  </li>
                </ul>
              </div>

            </div>

          </div>
          <div
            className="_2MeKe8f8Z3IcJZOkZXaPz7"
            className={
              this.state.booll
                ? '_2MeKe8f8Z3IcJZOkZXaPz7 appear'
                : '_2MeKe8f8Z3IcJZOkZXaPz7'
            }
          >
            <ul>
              <li className="_1g-6dUNjgoWSWgG91RLv16">综合排序</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">速度最快</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">评分最高</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">起送价最低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">配送费最低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">人均高到低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">人均低到高</li>
            </ul>
          </div>
          <div
            className="_2AuxG4VFLIDuxXcpdnwO0L"
            className={
              this.state.booll2
                ? '_2AuxG4VFLIDuxXcpdnwO0L appear'
                : '_2AuxG4VFLIDuxXcpdnwO0L'
            }
          >
            <div className="asd_asda">
              <div className="_3lhBrp56N2WvgAKEaKHgmE">
                <div className="_2w4cxQY78PV8F_JKBxoXzp">
                  <div className="_2TXAtDwXWHz7qZ60a-rfDU">
                    <ul className="_1HFn7Zy4JPmYPHRdDoYAf_">
                      <li className="ZMYDDFJvQABm1O4J1P-dy">
                        <i className="_wLVAheqH5kOWpw3bC_Jp" />美团专送
                      </li>
                    </ul>
                  </div>
                  <div className="_2TXAtDwXWHz7qZ60a-rfDU">
                    <div className="TI__n5kpq-rTepg27M3_5">商家特色(可多选)</div>
                    <ul className="_1HFn7Zy4JPmYPHRdDoYAf_">
                      <li className="ZMYDDFJvQABm1O4J1P-dy">免配送费</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">0元起送</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">新商家</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">品牌商家</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">点评高分</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">跨天预订</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">支持开发票</li>
                    </ul>
                  </div>
                  <div className="_2TXAtDwXWHz7qZ60a-rfDU">
                    <div className="TI__n5kpq-rTepg27M3_5">人均价</div>
                    <ul className="_1HFn7Zy4JPmYPHRdDoYAf_">
                      <li className="ZMYDDFJvQABm1O4J1P-dy">20元以下</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">20-40元</li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy">40元以上</li>
                    </ul>
                  </div>
                  <div className="_2TXAtDwXWHz7qZ60a-rfDU">
                    <div className="TI__n5kpq-rTepg27M3_5">优惠活动(单选)</div>
                    <ul className="_1HFn7Zy4JPmYPHRdDoYAf_">
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p1.meituan.net/xianfu/68d64dd10b1498f5067a1c03e6d24869624.png"
                          alt=""
                        />
                        优惠商家
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png"
                          alt=""
                        />
                        首单立减
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                          alt=""
                        />
                        满减优惠
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png"
                          alt=""
                        />
                        进店领券
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/0c89ff7d86aa47827e62afa6d41a15f5535.png"
                          alt=""
                        />
                        第二份半价
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png"
                          alt=""
                        />
                        满返代金券
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                          alt=""
                        />
                        折扣商品
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/538a2adfab46a37ec42853aece765704603.png"
                          alt=""
                        />
                        提前下单优惠
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png"
                          alt=""
                        />
                        满赠活动
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png"
                          alt=""
                        />
                        门店新客立减
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p1.meituan.net/xianfu/04d485a1b8e040bff21c02c19a9731d92048.png"
                          alt=""
                        />
                        买赠活动
                      </li>
                      <li className="ZMYDDFJvQABm1O4J1P-dy CN7sKAGFBsLKPYtjVtcSc">
                        <img
                          className="a1imKDPgQnUwiCtqGIuT7"
                          src="http://p0.meituan.net/xianfu/10d0777e47844ea90b89d23c01eabe3c1164.png"
                          alt=""
                        />
                        减配送费
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="iScrollVerticalScrollbar iScrollLoneScrollbar">
                <div className="iScrollIndicator" />
              </div>
            </div>
            <div className="vWKNd8wckE2cD0oiywDe0">
              <span className="_1E9YAC59nQ6QbXAPeh7Kte">清除筛选</span>
              <span className="_3dmUF4LL8p2uQtqvO9vTz">完成</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default List;
