import React, { Component, Fragment } from 'react';

import Swiper from './Swiper';
import Divider from './Divider';

export default class Blocks extends Component {
  constructor(props) {
    super(props);
  }
  touch(e) {
    e.stopPropagation();
  }
  blocks() {
    const { item } = this.props;
    if (item['item_type'] == 'adv_list') {
      return (
        <div onTouchStart={(e) => this.touch(e)}>
          <Swiper items={item['items']} scale={item['scale']}></Swiper>
        </div>
      )
    }
    else if (item['item_type'] == 'divider') {
      return (
        <Divider items={item}/>
      )
      return; 
    }
    else {
      return (
        <div>aaaaa</div>
      )
    }
  }
  render() {
    return (
      <Fragment>
        {this.blocks()}
      </Fragment>
    )
  }
}