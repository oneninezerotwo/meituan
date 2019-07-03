import React from 'react';
// import ReactDOM from 'react-dom';
import './List2.scss';
import axios from 'axios';
// import Scroll from 'react-bscroll';
import 'react-bscroll/lib/react-scroll.css';
import 'weui';
import Loading from './loading/Loading';
import LoadMore from './loadMore/loadMore';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
// import Home from './../pages/Home/Home';
// 无状态数据 写死 永远不会变化的
// const data = {
//   title: 'Footer123',
// };
const divStyle = {
  paddingLeft: '80PX',
};
class List2 extends React.Component {
  state = {
    bool: false,
    news: [],
    page: 1,
    isShowLoading: true,
    show: false,
  };
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired,
  // };
  render () {
    // const {match, location, history} = this.props;
    // console.log (this);
    return (
      <div
        className="_3uTnjGaICQR0QQJ0b-Nk8k _2yCMxFCzKcIRQuCBS1XZ_k"
        ref="onPullUp"
      >
        <div className="_3XRWZqdyupCVEnwa2XBFGr homeshoplist">
          <ul className="_2db1e1m154ODnjL1-ivQvq">
            {this.state.news.map ((item, index) => {
              return (
                <li data-watch="976109811372799" key={index}>
                  <Link
                    to={{
                      pathname: '/detailPage',
                      search: `?id=${index}`,
                    }}
                    className="FcKg0z7ZA3tlZo-vSxopN"
                    role="logo"
                    aria-label={item.shopName}
                  >
                    <div
                      className="_2q5HWkq__CHgEQLE76bhCF"
                      role="logo"
                      aria-label={item.shopName}
                    >
                      <img
                        src="http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png"
                        alt="icon"
                        className="_3f5at3Y6MnNFz0hFltS3GS"
                      />
                      <div>
                        <div className="_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder">

                          <img
                            src={item.picUrl}
                            alt="icon"
                            className="lazyimage-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="_2L_M6YlchG3yfnSSg7L6mL">
                      <div className="_3ce4X4pC6NTjqy4_fKHA8E">
                        {item.shopName}
                      </div>
                      <div className="_21yyPg0MxIEFMCg8RnTeUo">
                        <div>
                          <div className="D11MX3M-SDa4TXs8lmgHq">

                            <i className="_1ukqM-8qHp61SdF68btTCh" />

                            <i className="_1ukqM-8qHp61SdF68btTCh" />

                            <i className="_1ukqM-8qHp61SdF68btTCh" />

                            <i className="_1ukqM-8qHp61SdF68btTCh" />

                            <i className="_1ukqM-8qHp61SdF68btTCh" />

                          </div>
                          <span className="_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5">
                            4.5
                          </span>
                          <span className="_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed">
                            月售9640
                          </span>
                        </div>
                        <div className="_20HnNmr2Skt7lyGyrsg5R7">
                          <span
                            className="_34MB4leIjAhG3LXl-DN8Ed"
                            style={divStyle}
                          >
                            37分钟
                          </span>
                          <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud">
                            3.4km
                          </span>
                        </div>
                      </div>
                      <div className="_1wRyOmTit2wxvwxcfx4tf1">
                        <span className="_34MB4leIjAhG3LXl-DN8Ed">起送 ¥20</span>
                        <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud">
                          配送 ¥4
                        </span>
                        <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud">
                          人均 ¥23
                        </span>
                      </div>
                      <div className="_2t-V7ElqTaDS-PIn3jWR_X">
                        <p className="_3ykJaIHGFSdjdQuChaUN6z">
                          <img
                            src="http://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png"
                            alt="activity icon"
                            className="_1vvO5ZUocEXs-aSvyWfhGT"
                          />
                          <span className="_34MB4leIjAhG3LXl-DN8Ed">
                            满30减1;满40减2;满50减3
                          </span>
                        </p>
                        <p className="_3ykJaIHGFSdjdQuChaUN6z">
                          <img
                            src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png"
                            alt="activity icon"
                            className="_1vvO5ZUocEXs-aSvyWfhGT"
                          />
                          <span className="_34MB4leIjAhG3LXl-DN8Ed">
                            本店支持开发票，开票金额50元起
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}

          </ul>

        </div>
        <Loading status={this.state.isShowLoading} />
        <LoadMore
          status={this.state.isShowLoading}
          limit={this.state.news.length}
        />
      </div>
    );
  }
  async loadMore () {
    this.setState ({
      isShowLoading: true,
    });
    const news = (await axios.get (
      'https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/shoplist',
      {
        params: {
          limit: 20,
          page: this.state.page,
        },
      }
    )).data.data.shopList;
    // console.log (news);
    setTimeout (() => {
      this.setState ({
        news,
        page: ++this.state.page,
        news: [...this.state.news, ...news],
        isShowLoading: false,
      });
    }, 1000);
    // await new Promise (resovle => {
    //   let time = 1;
    //   let timer = setInterval (() => {
    //     console.log (time);
    //     time === 1
    //       ? (() => {
    //           resovle ();
    //           clearInterval (timer);
    //         }) ()
    //       : time++;
    //   }, 1000);
    //   this.setState ({
    //     page: ++this.state.page,
    //     news: [...this.state.news, ...news],
    //     isShowLoading: false,
    //   });
    // });
  }
  shouldComponentUpdate () {
    if (this.state.news.length >= 50) {
      return false;
    } else {
      return true;
    }
  }
  // constructors () {
  //   const pathname = this.props.location.pathname;

  //   window.addEventListener ('scroll', () => {
  //     if (pathname == '/home') {
  //       let scrollTop =
  //         document.documentElement.scrollTop || document.body.scrollTop;
  //       let onPullUpHeight = this.refs.onPullUp.clientHeight;
  //       let documentHeight = document.documentElement.clientHeight;
  //       let documentTop = window.scrollY;
  //       if (
  //         onPullUpHeight > documentHeight &&
  //         onPullUpHeight === documentHeight + documentTop - 229
  //       ) {
  //         this.setState ({});
  //         this.loadMore ();
  //         // console.log (scrollTop, onPullUpHeight, documentHeight, documentTop);
  //       } else {
  //         this.setState ({
  //           show: false,
  //         });
  //       }
  //       console.log (pathname);
  //     } else {
  //       console.log (pathname);
  //     }

  //     // console.log (pathname);
  //   });
  //   // console.log (pathname);
  // }

  constructors12 = () => {
    // const pathname = this.props.location.pathname;
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let onPullUpHeight = this.refs.onPullUp.clientHeight;
    let documentHeight = document.documentElement.clientHeight;
    let documentTop = window.scrollY;
    if (
      onPullUpHeight > documentHeight &&
      onPullUpHeight === documentHeight + documentTop - 229
    ) {
      this.setState ({});
      this.loadMore ();
      // console.log (scrollTop, onPullUpHeight, documentHeight, documentTop);
    } else {
      this.setState ({
        show: false,
      });
    }
    // console.log (123);
  };
  // constructor () {
  //   super ();
  //   this.scrollEvent = this.constructors12.bind (this);
  // }
  componentWillMount () {
    this.loadMore ();

    window.addEventListener ('scroll', this.constructors12);
  }
  componentWillUnmount () {
    window.removeEventListener ('scroll', this.constructors12);
  }
}

// export default connect (state => {
//   return state;
//   // console.log (state);
// })(List2);
export default withRouter (List2);
