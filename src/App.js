import React, {Fragment} from 'react';
import './App.scss';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
// 无状态数据 写死 永远不会变化的
const data = {
  title: 'Footer123',
};

class App extends React.Component {
  // 有状态数据负责动态操作 是会变化，负责更改视图层的
  // M
  state = {
    bool: false,
    searchInputValue: '',
    items: '',
    news: [],
    newqw: [],
    // htmll: '',
  };
  getSearchValue (e) {
    // console.log(e.target.value)
    this.setState ({
      searchInputValue: e.target.value,
    });
  }

  // this.props.history.push ('/');
  // console.log (this.props);

  componentDidMount () {
    window.addEventListener ('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        this.setState ({
          bool: true,
        });
      } else {
        this.setState ({
          bool: false,
        });
      }
    });
  }
  toggle (num, name) {
    // console.log('点击', this.state.bool, num, name)
    // this.state.bool = !this.state.bool
    // 这个地方跟Vue区别很大，需要调用this.setState的方法通知M层改变，不然如果直接改state视图是不会有响应

    this.setState ({
      bool: !this.state.bool,
    });
  }

  render () {
    // console.log(this)
    return (
      <div className="App">
        <header
          className="App-header"
          className={this.state.bool ? 'App-header active' : 'App-header'}
        >
          <div className="_2m6ykQWMTX3_dW7Ab-XsY8">
            <div
              className={
                this.state.bool
                  ? '_1JHn9KhcnvNrar1crXmTIk _350JA45HCnWxLcngmBwzjl'
                  : '_1JHn9KhcnvNrar1crXmTIk'
              }
            >
              <div className="XojVIq9qzHwkS-H5hJLWh">天河客运站(公交站)</div>
            </div>
            <div className="_1GdfNwKnUZUXB2ckSYH1m8">
              <input
                disabled=""
                readOnly=""
                placeholder="请输入商家或商品名称"
                value={this.state.searchInputValue}
                onChange={this.getSearchValue.bind (this)}
                onClick={() => {
                  this.props.history.push (`/details?name=lin`);
                }}
              />
            </div>
          </div>
        </header>
        <nav>
          <div className="_2qDABxIhG58DjS3SnGcdQ4">
            <div className="_11TYQrv0WY_3j7bGnRwtih">

              {this.state.news.map ((item, index) => {
                return (
                  <Fragment key={item.cateId}>
                    <div className="_3SHCeLB5gfUdeTSqdHGT-w" />
                    <a data-cateid="910" className="efeR5uyg2vbdcC1mfhm1B">
                      <div className="lYqlChWY4rNp3-JYyHmhG">
                        <div>
                          <div className="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
                            <img
                              src={item.icon}
                              alt="icon"
                              className="lazyimage-img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="_35aWbI-Ceo7eXbrvcqpnOb">{item.name}</div>
                    </a>
                  </Fragment>
                );
              })}
              <div className="_3SHCeLB5gfUdeTSqdHGT-w" />

            </div>
            <div className="_11TYQrv0WY_3j7bGnRwtih">
              {this.state.newqw.map ((item, index) => {
                return (
                  <Fragment key={item.cateId}>
                    <div className="_3SHCeLB5gfUdeTSqdHGT-w" />
                    <a data-cateid="910" className="efeR5uyg2vbdcC1mfhm1B">
                      <div className="lYqlChWY4rNp3-JYyHmhG">
                        <div>
                          <div className="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
                            <img
                              src={item.icon}
                              alt="icon"
                              className="lazyimage-img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="_35aWbI-Ceo7eXbrvcqpnOb">{item.name}</div>
                    </a>
                  </Fragment>
                );
              })}
              <div className="_3SHCeLB5gfUdeTSqdHGT-w" />
            </div>
          </div>
        </nav>
        <div>
          <div className="_1GWVJT2OLFMK_zt-Pdonb">附近商家</div>
        </div>
      </div>
    );
  }
  async componentWillMount () {
    const news = (await axios.get (
      'https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/meiTuan'
    )).data.data.kingkongList.slice (0, 5);
    const newqw = (await axios.get (
      'https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/meiTuan'
    )).data.data.kingkongList.slice (5, 10);
    // console.log(news, newqw);
    this.setState ({
      news,
      newqw,
    });
  }
}
export default withRouter (App);
