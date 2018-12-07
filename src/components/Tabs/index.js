import { Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import BlockList from './../BlockList';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const TabExample = ({ tabs, children, changeTab, tabContent, swipeable, changeSwipeable }) => {
  const change = (tab, index) => {
    // console.log(tab, index);
    changeTab(tab, index);
  }
  const content = (name, tabContent) => {
    if (name in tabContent) {
      return tabContent[name];
    }
    else {
      return {}
    }

  }
  return (
    <div>
      <StickyContainer>
        <Tabs tabs={tabs}
          initalPage={'t2'}
          renderTabBar={renderTabBar}
          onChange={change}
          swipeable={swipeable}
        >
          {
            tabs.map(item => (
              <Fragment key={item.name}>
                <BlockList
                  tab={item}
                  tabContent={content(item.name, tabContent)}
                />
              </Fragment>
            ))
          }
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  );
}
export default TabExample;