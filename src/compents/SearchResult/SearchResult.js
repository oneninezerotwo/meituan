import React from 'react';
import './SearchResult.scss';
import {connect} from 'react-redux';
import axios from 'axios';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
class SearchResult extends React.Component {
  state = {
    bool: false,
    news: [],
    page: 1,
    isShowLoading: true,
    show: false,
    discounts2: [],
  };
  hiddne () {
    // console.log (this.props.searchInputText);
    if (this.props.searchInputText === '') {
      return '_1zGXHLaBXgaBbiVFuaSauS hiddenBox';
    } else {
      // console.log (this.state.searchInputText);
      return '_1zGXHLaBXgaBbiVFuaSauS';
    }
  }
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired,
  // };
  async loadMore () {
    const news = (await axios.get (
      'https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/shoplist',
      {
        params: {
          limit: 20,
          page: this.state.page,
        },
      }
    )).data.data.shopList;
    const discounts2 = news[0].discounts2[1].iconUrl;
    console.log (discounts2);
    await this.setState ({
      isShowLoading: true,
      news,
      discounts2,
    });
  }
  componentDidMount () {
    this.loadMore ();
    // console.log (this.state.news);
  }

  filterNews (arr, searchInputText) {
    return arr
      .filter (item => {
        if (item.shopName.indexOf (searchInputText) > -1) {
          return item;
        }
      })
      .map ((item, index) => {
        console.log (item.discounts2[0].iconUrl);
        console.log (item.discounts2[0].activityId);
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
                {item.discounts2.map ((item2, indexs) => {
                  return (
                    <img
                      key={indexs}
                      className="AfFiWWmxH7sZyCbsUX-r-"
                      alt=""
                      src={item2.iconUrl}
                    />
                  );
                })}

              </p>
              <p className="kcYoW-rB0_PRjLpeYg-i1">
                起送 {item.minPriceTip}
                <span className="_1Jhkie0-1SciWi1J4USiwa" />
                配送 {item.shippingFeeTip}
                <span className="_1Jhkie0-1SciWi1J4USiwa" />
                {item.distance}
              </p>
            </div>
          </li>
        );
      });
  }
  render () {
    console.log (this);
    return (
      <ul className="_1zGXHLaBXgaBbiVFuaSauS" className={this.hiddne ()}>
        {this.filterNews (this.state.news, this.props.searchInputText)}
      </ul>
    );
  }
}
export default connect (state => {
  return state;
  // console.log (state);
}) (SearchResult);
