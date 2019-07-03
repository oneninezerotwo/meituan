import React from 'react';
import './History.scss';
import {connect} from 'react-redux';

class Historys extends React.Component {
  state = {
    record: [],
  };
  show2 () {
    let bool8 = !this.props.bool8;
    this.props.dispatch ({
      type: 'chuanbool',
      bool8,
    });

    // console.log (this.props.bool8);
    // console.log (this.state.bool8);
  }
  async show3 () {
    let bool9 = !this.props.bool9;
    this.props.dispatch ({
      type: 'chuanbool1',
      bool9,
    });
    let bool8 = !this.props.bool8;
    this.props.dispatch ({
      type: 'chuanbool',
      bool8,
    });
    const record = this.state.record;
    await this.setState ({
      record: [],
    });
    this.props.dispatch ({
      type: 'GETRECORD',
      record,
    });

    // console.log (this.props.bool8);
    // console.log (this.props.bool9);
    console.log (record, this.props.record);
  }
  render () {
    console.log (this);
    return (
      <div data-tag="ddd-global-container">
        <div data-reactroot="" className="global-base-container">
          <div className="g-base-default">
            <div className="g-base-default-wrapper">
              <div className="dddAlert___13AIo ddd-alert">
                <div className="dddOverlay___2Zh4f">
                  <div>
                    <div
                      className="main___1ycye"
                      className={
                        this.props.bool8
                          ? 'main___1ycye appear'
                          : 'main___1ycye'
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="main___2HyRR mt___1XUC4"
                    className={
                      this.props.bool8
                        ? 'main___2HyRR mt___1XUC4 appear'
                        : 'main___2HyRR mt___1XUC4'
                    }
                  >
                    <div className="content___3L01j content">
                      <div className="text___3bQr6 message___1vgG_ message">
                        <div>清空历史记录</div>
                      </div>
                    </div>
                    <div className="btnList___AwoSF rowDirection___11SMi">
                      <div
                        className="text___3bQr6 btnTxt___3RL8c btnItem___Y-C7_"
                        onClick={this.show2.bind (this)}
                      >
                        取消
                      </div>
                      <div
                        className="text___3bQr6 btnTxt___3RL8c btnItem___Y-C7_ highlight___3YP1L"
                        onClick={this.show3.bind (this)}
                      >
                        <div>确定</div>
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
  return state;
  // console.log (state);
}) (Historys);
