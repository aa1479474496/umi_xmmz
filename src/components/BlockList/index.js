import React, { Component, Fragment } from 'react';
import Blocks from './Blocks';

class BlockList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabContent } = this.props;
    return (
      <div>
        {
          tabContent['special_list'] && tabContent['special_list'].map((item, index) => {
            return (
              <Fragment key={index}>
                <Blocks item={item} />
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default BlockList;
