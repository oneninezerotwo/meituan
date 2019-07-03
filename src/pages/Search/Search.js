import React from 'react';
import {connect} from 'react-redux';
import './Search.scss';
import axios from 'axios';
class Search extends React.Component {
  state = {
    news: [],
  };
  handleChange (e) {
    let searchInputText = e.target.value;
    this.props.dispatch ({
      type: 'GETINPUTVALUE',
      searchInputText,
    });
    this.setState ({
      searchInputText: searchInputText,
    });
  }
  asd () {
    let searchInputText = '';
    this.props.dispatch ({
      type: 'GETINPUTVALUE',
      searchInputText,
    });
    this.setState ({
      searchInputText,
    });
  }
  componentDidMount () {
    this.searchData ();
  }
  async searchData () {
    this.setState (
      {
        // isShowLoading: true,
      }
    );
    const news = (await axios.get (
      'https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/meituanmeishi',
      {
        params: {
          // limit: 20,
          // page: this.state.page,
        },
      }
    )).data.data.shopList;
    this.setState ({
      news,
      // page: ++this.state.page,
      // news: [...this.state.news, ...news],
      // isShowLoading: false,
    });
  }
  filterNews (arr, searchInputText) {
    // console.log (arr[0]);
    return arr
      .filter (item => {
        if (item.shopName.indexOf (searchInputText) > -1) {
          return item;
        }
      })
      .map ((item, index) => {
        return (
          <li
            className="qk_Os-HiqK4-eUiFigrFu"
            key={item.mtWmPoiId}
            onClick={() => {
              this.props.history.push (
                `/detailPage?name=${item.shopName}&key=${item.mtWmPoiId}`
              );
            }}
          >
            <div className="_3JNvwQuZM6Tz2CjsZhtZ2T">
              <i className="EDDSvYECFlGG29eK_GyMy" />
              <p className="_2z-WIOGdgbluP5tX8FwsK8">
                <span className="_2ZMwynKkgNb1w28vlT_i6V">
                  {item.shopName}
                </span>
                <img
                  className="AfFiWWmxH7sZyCbsUX-r-"
                  alt=""
                  src="http://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png"
                />
                <img
                  className="AfFiWWmxH7sZyCbsUX-r-"
                  alt=""
                  src="http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png"
                />
              </p>
              <p className="kcYoW-rB0_PRjLpeYg-i1">
                起送 ¥20
                <span className="_1Jhkie0-1SciWi1J4USiwa" />
                配送 ¥5
                <span className="_1Jhkie0-1SciWi1J4USiwa" />
                4.6km
              </p>
            </div>
          </li>
        );
      });
  }
  render () {
    console.log (this.state.news);
    return (
      <div>
        <header className="_1CPb-WzU8yZXbIty31AEi8">
          <div className="_rix8EYFtfu6BvdWHkEGM">
            <input
              type="text"
              value={this.props.searchInputText}
              className="_3adpwLAdLDcYXSZI1Vf1qr"
              onChange={this.handleChange.bind (this)}
            />
          </div>
          <a
            className="_1qMEb5C7VlB2svXedCPRmh"
            href="javascript:window.history.back();"
            onClick={this.asd.bind (this)}
          >
            取消
          </a>
        </header>
        <ul className="_1CYiFfKvFMfHu4uovts_l5">
          <li
            className="qWPdOrqhAr3u8ozJYxSNh"
            onClick={() => {
              this.props.history.push ('/detailPage');
            }}
          >
            <div className="_1SVrQ1ZedwALfs2DzZsefl _3McEvgrxNTXQOSq9Y4-usx">
              <div
                className="_33lpy8gzq6aSwjxai_BSXM"
                style={{
                  backgroundImage: "url ('https://p0.meituan.net/waimaipoi/a0cc256d1ca7a77ba8c9321af0278f6d227328.jpg@168w_126h_1e_1c')",
                }}
              />
              <div className="lGIQnbfsz8WGurBD5fs4W">
                <div className="_1DxrbTK72uCMou6wqjLjCU">爱尚麻辣烫</div>
                <div className="_2Scm0aLPYxxTyLmRjlZp0B">
                  <div>
                    <div className="_36HOyk8bF1gez285GrKSXz">
                      <div className="D11MX3M-SDa4TXs8lmgHq">
                        <i className="_1ukqM-8qHp61SdF68btTCh" />
                        <i className="_1ukqM-8qHp61SdF68btTCh" />
                        <i className="_1ukqM-8qHp61SdF68btTCh" />
                        <i className="_1ukqM-8qHp61SdF68btTCh" />
                        <i className="_1ukqM-8qHp61SdF68btTCh _10sddMGRlnE8IDQKwCu5ps" />
                      </div>
                    </div>
                    <div className="a_Q1nS8rFvHYEiDR1kIhH mtsi-num">月售5666</div>
                  </div>
                </div>
                <div className="_2MUWaLvluhRpx-HNcgZBS8">
                  <span className="_2pAZNKL7JwJYygyIS9dQV7 mtsi-num">
                    起送 ¥36
                  </span>
                  <span className="_2I1CD1x9jsRbldvQ--MeWv mtsi-num">
                    配送 ¥2
                  </span>
                </div>
                <div className="_3u5x-8RfoMQ2KFBwmixFsp">
                  <ul className="_3XFtgqliqegsWCmSmL3bKf">
                    <li className="_1s9vTz9PBIB1pj9zaye9D4">
                      <i className="_3JPQYYsBpiylYo31jgQk8c" />
                      <span className="_1bPKGSpbsDz4k_YW1Wq2lD">
                        满11减5;满22减10
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="_2jBl4gA96kdzw0M0PniLjt">
                  <div>
                    <ul className="_3ZiddNbETS1nQexD_Iep5V _2zGhwksMBtUYXZPeF4DVuw">
                      <li className="W4QuM7lwv0lrP35rj1itm">
                        <div className="RBg_uvFOQPin5ZWbTH72i">
                          <div className="_2GsiVZWcKOJivT2LcefwKv">鸡柳</div>
                          <div className="_3hHesQdYQBJ3QPew8qa9ME mtsi-num">
                            月售6999
                          </div>
                          <div className="Ogy6yUuipO5iqgSLXaf1B">¥&nbsp;3</div>
                        </div>
                      </li>
                    </ul>
                    <div className="_31rMMwr0aOQhwS_XRnL06C _2zGhwksMBtUYXZPeF4DVuw">
                      <span className="_33k3pC5F7JkfMb1Q3tBJMu">展开其他5个商品</span>
                    </div>
                  </div>
                </div>
                <div className="_1l9gRo5_xoxh9ntTts3ZE mtsi-num">4.1km</div>
                <div className="_1PBveMvIMhyYQJ1Yjyka6T mtsi-num">54分钟</div>
              </div>
            </div>
          </li>
        </ul>
        <div className="_1NklZC97NLwNiLF9riUfTo">
          <div className="ZdLc0ROuKLVNrk2mgZpxc">
            <span className="_1Mp556rmZm_Dz9tU_yBGau">
              <i className="JrMR4ZWejOAUGeLoXbyit" />
              <span className="_2IG0iTm7QpgZeXdhzrh5fH">猜你喜欢</span>
            </span>
          </div>
          <ul className="KquFTUZin7khkZsseSyMJ">
            <li className="_2Pt3jrn3C_syTvNVTf7GWa">
              <div className="_1SVrQ1ZedwALfs2DzZsefl">
                <div
                  className="_33lpy8gzq6aSwjxai_BSXM"
                  style={{
                    backgroundImage: "url ('https://p0.meituan.net/waimaipoi/a0cc256d1ca7a77ba8c9321af0278f6d227328.jpg@168w_126h_1e_1c')",
                  }}
                />
                <div className="lGIQnbfsz8WGurBD5fs4W">
                  <div className="_1DxrbTK72uCMou6wqjLjCU">肥佬烧鹅皇</div>
                  <div className="_2Scm0aLPYxxTyLmRjlZp0B">
                    <div>
                      <div className="_36HOyk8bF1gez285GrKSXz">
                        <div className="D11MX3M-SDa4TXs8lmgHq">
                          <i className="_1ukqM-8qHp61SdF68btTCh" />
                          <i className="_1ukqM-8qHp61SdF68btTCh" />
                          <i className="_1ukqM-8qHp61SdF68btTCh" />
                          <i className="_1ukqM-8qHp61SdF68btTCh" />
                          <i className="_1ukqM-8qHp61SdF68btTCh _10sddMGRlnE8IDQKwCu5ps" />
                        </div>
                      </div>
                      <div className="a_Q1nS8rFvHYEiDR1kIhH mtsi-num">
                        月售9999
                      </div>
                    </div>
                  </div>
                  <div className="_2MUWaLvluhRpx-HNcgZBS8">
                    <span className="_2pAZNKL7JwJYygyIS9dQV7 mtsi-num">
                      起送 ¥63
                    </span>
                    <span className="_2I1CD1x9jsRbldvQ--MeWv mtsi-num">
                      配送 ¥5
                    </span>
                  </div>
                  <div className="_3u5x-8RfoMQ2KFBwmixFsp">
                    <ul className="_3XFtgqliqegsWCmSmL3bKf _3GbazcRtbOf-rY6Ts4iEtr">
                      <li className="_1s9vTz9PBIB1pj9zaye9D4">
                        <i className="_3JPQYYsBpiylYo31jgQk8c" />
                        <span className="_1bPKGSpbsDz4k_YW1Wq2lD">
                          满10减2;满20减5;满60减8;满99减12
                        </span>
                      </li>
                      <li className="_1s9vTz9PBIB1pj9zaye9D4">
                        <i className="_3JPQYYsBpiylYo31jgQk8c" />
                        <span className="_1bPKGSpbsDz4k_YW1Wq2lD">
                          折扣商品5.02折起
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="_1l9gRo5_xoxh9ntTts3ZE mtsi-num">2.1km</div>
                  <div className="_1PBveMvIMhyYQJ1Yjyka6T mtsi-num">41分钟</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}
export default connect (state => {
  return state;
  // console.log (state);
}) (Search);
