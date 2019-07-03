import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
class Hoc extends React.Component {
  render () {
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
                          <i className="Ew1X4LyRc6w1Ybtp768N _1xYBF7VbiJPjnsXdvS9Sw3" />
                          <div>
                            <div
                              className="_2hnjuTZDqLPTm_PSybunpO"
                              style="padding: 18px 0px;"
                            >
                              <div className="_25c3pW7gqBC1E-obW7ILRj">搜索页</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_1Viz1mHQBJTZC4LNRbACBr">
                      <div className="MledJ7PgcHJrGk3HqztQ6">
                        <form className="_2hjN8YEXvUlBjZpbgiB8pW">
                          <input
                            type="text"
                            autocomplete="off"
                            autocorrect="off"
                            placeholder="请输入商家或商品名称"
                            className="_2dKIhWcVoK6dKmAsuB2ilE"
                            value=""
                          />
                          <span className="_3OmedCRCknKzWOgR5ljiKF" />
                        </form>
                      </div>
                      <i className="GYeczk8gsrSrgBGyZp8Wk nGpU9BLTYLmEcgByFKB6X" />
                      <div className="_1XvjUOPMjzQ0GChHyalouv">搜索</div>
                    </div>
                    <div className="_3cINVluqHj6tCTNiKRF1iN">
                      <nav className="_2sfI29f85VTfXX91JT2Cu1">热门搜索</nav>
                      <section className="_1OkBHtjTymSCVcNtCceay9">
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          粥
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          一点点
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          麻辣烫
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          小龙虾
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          麦当劳
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          沙拉
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          酸菜鱼
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          炸鸡
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          酸辣粉
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          华莱士
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          肠粉
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          猪脚饭
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          螺蛳粉
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          披萨
                        </a>
                        <a
                          href="javascript:;"
                          className="_3btjiM1xrniZzfprwVfwT-"
                        >
                          汤饭
                        </a>
                      </section>
                    </div>
                    <div className="_2jh-GWIDQu0AL9LO6wNZ5L">
                      <nav className="_206R4t_-PeSw2bXsejYUHu">
                        <span className="zJMUxgYuD6h5g_9SAoP9X" />
                      </nav>
                      <div className="oYyQ00rZdXndU0VNpAMhe">
                        <a
                          href="javascript:;"
                          className="Setzgy6lNmmWKJEGaDBYD"
                        />
                        <a
                          href="javascript:;"
                          className="Setzgy6lNmmWKJEGaDBYD"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect (state => {
  // 1.subscribe
  // 2.getState
  return state;
}) (Hoc);
