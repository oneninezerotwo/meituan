import React from 'react';
import './Details.scss';
import Historys from './../Historys/Historys';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import Search from '../Search/Search';
import SearchResult from './../../compents/SearchResult/SearchResult';
// import PropTypes from 'prop-types';
const data = {
  state: [
    {name: '粥'},
    {name: '一点点'},
    {name: '麻辣烫'},
    {name: '小龙虾'},
    {name: '麦当劳'},
    {name: '沙拉'},
    {name: '披萨'},
    {name: '酸菜鱼'},
    {name: '炸鸡'},
    {name: '猪脚饭'},
    {name: '螺蛳粉'},
    {name: '华莱士'},
    {name: '肠粉'},
    {name: '汤饭'},
    {name: '炸鸡'},
  ],
};
class Details extends React.Component {
  state = {
    // hisbool: false,
    searchInputText: '',
    bool8: false,
    bool9: false,
    bool20: false,
    record: [],
    tab: 'share',
    alist: data.state,
  };
  // recordArise(){
  //   if(this.state.record==[]){
  //     return ""
  //   }
  // }
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired,
  // };

  recordShow () {
    return;
  }
  record () {
    let record = this.props.record;
    record.push ({name: this.props.searchInputText});
    this.props.dispatch ({
      type: 'GETRECORD',
      record,
    });
    this.setState ({
      record: record,
    });
    // console.log (this.state.record);
    // console.log (this.props.record);
    // console.log (record);
    // console.log (this.props.searchInputText);

    const tab = this.state.tab;
    this.setState ({
      record: [...this.state.record, ...record],
    });
    localStorage.setItem (tab, JSON.stringify (record));
  }
  stopLink () {
    this.record ();
    if (this.props.searchInputText === '') {
      this.setState ({
        bool20: true,
      });
      setTimeout (() => {
        this.setState ({
          bool20: false,
        });
      }, 2000);
    } else {
      this.props.history.push (`/search?name=lins`);
    }
  }
  getInputValue (e) {
    // console.log (e.target.value);
    let searchInputText = e.target.value;
    this.props.dispatch ({
      type: 'GETINPUTVALUE',
      searchInputText,
    });
    this.setState ({
      searchInputText: searchInputText,
    });
    // console.log (this.props.searchInputText);
  }
  searchClear () {
    this.refs.input.focus ();
    this.setState ({
      searchInputText: '',
    });
  }
  hiddne () {
    if (this.state.searchInputText === '') {
      // console.log (this.state.searchInputText);
      return '_3cINVluqHj6tCTNiKRF1iN';
    } else {
      // console.log (this.state.searchInputText);
      return '_3cINVluqHj6tCTNiKRF1iN hiddenBox';
    }
  }
  hiddne1 () {
    if (this.state.searchInputText === '') {
      // console.log (this.state.searchInputText);
      return '_2jh-GWIDQu0AL9LO6wNZ5L';
    }
    if (this.state.searchInputText !== '') {
      // console.log (this.state.searchInputText);
      return '_2jh-GWIDQu0AL9LO6wNZ5L hiddenBox';
    }
    if (this.props.bool9 === true) {
      console.log (1);
      return '_2jh-GWIDQu0AL9LO6wNZ5L';
    }
    if (this.props.bool9 === false) {
      console.log (2);
      return '_2jh-GWIDQu0AL9LO6wNZ5L hiddenBox';
    }
  }
  // hiddne3 () {
  //   if (this.props.bool9 === true) {
  //     return '_2jh-GWIDQu0AL9LO6wNZ5L';
  //   } else {
  //     return '_2jh-GWIDQu0AL9LO6wNZ5L hiddenBox';
  //   }
  // }
  async show2 () {
    // this.props.bool8 = true;
    await this.setState (
      {
        bool8: true,
      },
      function () {
        console.log (this.state.bool8);
        console.log (bool8);
        console.log (this.props.bool8);
      }
    );

    console.log (this.state.bool8);
    console.log (bool8);
    console.log (this.props.bool8);
    // bool8 = true;
    var bool8 = this.state.bool8;
    this.props.dispatch ({
      type: 'chuanbool',
      bool8,
    });
  }

  searchList () {
    return;
  }
  async componentWillMount () {
    var bool9 = !this.state.bool9;
    this.props.dispatch ({
      type: 'chuanbool1',
      bool9,
    });
    this.recordShow ();
    const tab = this.state.tab;
    if (localStorage.getItem (tab)) {
      const record = JSON.parse (localStorage.getItem (tab));
      this.props.dispatch ({
        type: 'GETRECORD',
        record,
      });
      await this.setState ({
        record: record,
      });
      console.log (this.props.record, tab, this.state.record);
    }
    const pathname = this.props.location.pathname;
    if (pathname == '/details') {
      let searchInputText = '';
      this.props.dispatch ({
        type: 'GETINPUTVALUE',
        searchInputText,
      });
      this.setState ({
        searchInputText: searchInputText,
      });
    }

    // const tab = this.state.tab;
    // const record = localStorage.setItem (
    //   tab,
    //   JSON.stringify (this.state.record)
    // );
    // this.setState ({
    //   record: record,
    // });
    // console.log (this.props.hisbool);
  }
  // getInputValue (e) {
  //   this.props.dispatch ({
  //     type: 'GETSOUSUO',
  //   });
  //   this.setState ({});
  // }

  render () {
    console.log (this);
    return (
      <div id="app">
        <div data-reactroot="">
          <div>
            <div>
              <div id="wm-container">
                <div>
                  <div className="_2AX-0KIke_hi9xczRAvQHE">
                    <div className="asdasdasdasda">
                      <div className="jhkhmbjgjbkjasdja">
                        <div className="uO9whxUfHiWRiV6G5GBiA tm2-Xe5MgkhKl7jd09lo-">
                          <i
                            className="Ew1X4LyRc6w1Ybtp768N _1xYBF7VbiJPjnsXdvS9Sw3 "
                            onClick={() => {
                              // this.props.setTag(tag.name)//如何进行路由跳转？
                              this.props.history.push ('/home');
                            }}
                          />
                          <div>
                            <div className="_2hnjuTZDqLPTm_PSybunpO">
                              <div className="_25c3pW7gqBC1E-obW7ILRj">
                                搜索页
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_1Viz1mHQBJTZC4LNRbACBr">
                      <div className="MledJ7PgcHJrGk3HqztQ6">
                        <div className="_2hjN8YEXvUlBjZpbgiB8pW">
                          <input
                            type="text"
                            ref="input"
                            // autocomplete="off"
                            // autocorrect="off"
                            value={this.state.searchInputText}
                            placeholder="请输入商家或商品名称"
                            className="_2dKIhWcVoK6dKmAsuB2ilE"
                            onChange={this.getInputValue.bind (this)}
                          />
                          <span className="_3OmedCRCknKzWOgR5ljiKF" />
                        </div>
                      </div>
                      <i
                        className="GYeczk8gsrSrgBGyZp8Wk nGpU9BLTYLmEcgByFKB6X"
                        onClick={this.searchClear.bind (this)}
                      />
                      <div
                        className="_1XvjUOPMjzQ0GChHyalouv"
                        onClick={this.stopLink.bind (this)}
                      >

                        搜索
                      </div>
                    </div>
                    <div
                      className="_3cINVluqHj6tCTNiKRF1iN"
                      className={this.hiddne ()}
                    >
                      <nav className="_2sfI29f85VTfXX91JT2Cu1">热门搜索</nav>
                      <section className="_1OkBHtjTymSCVcNtCceay9">
                        {this.state.alist.map ((item, index) => {
                          return (
                            <Link
                              href="javascript:;"
                              className="_3btjiM1xrniZzfprwVfwT-"
                              key={index}
                              to={{
                                pathname: '/search',
                              }}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </section>
                    </div>
                    <div
                      className="_2jh-GWIDQu0AL9LO6wNZ5L"
                      className={this.hiddne1 ()}
                      // className={this.hiddne3 ()}
                    >
                      <nav className="_206R4t_-PeSw2bXsejYUHu">
                        历史搜索
                        <span
                          className="zJMUxgYuD6h5g_9SAoP9X"
                          onClick={this.show2.bind (this)}
                        />

                      </nav>

                      <div
                        className="oYyQ00rZdXndU0VNpAMhe"
                        className={
                          this.state.record == []
                            ? 'oYyQ00rZdXndU0VNpAMhe hiddenBox'
                            : 'oYyQ00rZdXndU0VNpAMhe'
                        }
                      >
                        {this.props.record.map ((item, index) => {
                          return (
                            <a
                              href="javascript:;"
                              className="Setzgy6lNmmWKJEGaDBYD"
                              key={index}
                            >
                              {item.name}
                            </a>
                          );
                        })}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div
            className="global-base-container12"
            className={
              this.state.bool20
                ? 'global-base-container12'
                : 'global-base-container12 hiddenBox'
            }
          >
            <div className="global-base-containerchishi">
              请输入商家或商品名称
            </div>
          </div>

        </div>
        <Historys />
        <SearchResult history={this.props.history} />
      </div>
    );
  }
}
export default connect (state => {
  return state;
  // console.log (state);
}) (Details);
