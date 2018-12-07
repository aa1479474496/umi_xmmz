import React, { Component } from 'react';
import { connect } from 'dva';
import TabExample from '@/components/Tabs';

@connect(({ home }) => ({
  home
}))
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentIndex: 0
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getTabs'
    })
  }

  secTabs = (tab, index) => {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      console.log('同一个tab');
      return;
    }
    this.setState({
      currentIndex: index
    });
    const { dispatch, home } = this.props;
    const { tabs, tabContent } = home;
    if (tabs[index].name in tabContent) {
      dispatch({
        type: 'saveCurrentContent',
        payload: {
          currentContent: tabContent[tabs[index].name]
        }
      });
      return;
    };
    dispatch({
      type: 'home/getContent',
      payload: {
        special_id: tabs[index].special_id,
        name: tabs[index].name,
        page: 10,
        curpage: 1
      }
    })
  }

  render() {
    const { currentIndex, swipeable } = this.state;
    const { home } = this.props;
    const { tabs, fixedTabs, tabContent } = home;
    
    return (
      <div>
        <TabExample 
          tabs={fixedTabs} 
          tabContent={tabContent}
          changeTab={this.secTabs}
        >
        </TabExample>
          
      </div>
    )
  }
}

export default Home;
