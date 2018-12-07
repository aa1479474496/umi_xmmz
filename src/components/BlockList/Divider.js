import React, { Fragment, Component } from 'react';
import clickUtil from '@/utils/clickUtil';


export default class Divider extends Component {
  divider = () => {
    const { items } = this.props;
    if (items['bg_type'] == 'image') {
      return (
        <img src={items['bg_data']} alt="" style={{ display: 'block', width: '100%' }} />
      )
    }
    else {
      return (
        <div style={{ background: items['bg_data'] }}></div>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.divider()}
      </Fragment>
    )
  }
}
