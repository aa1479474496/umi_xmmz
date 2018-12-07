import { queryTabs, queryTabsContent, bonus } from '@/services/api';

function test() {}

export default {
  namespace: 'home',

  state: {
    tabs: [],
    fixedTabs: [],
    tabContent: {},
    currentContent: {},
    secIndex: 0
  },

  effects: {
    *getTabs(_, { call, put }) {
      const response = yield call(queryTabs);
      if (response.code === 200) {
        // console.log(response);
        const fixedTabs = response.datas.tabs.map(item => {
          return Object.assign({}, item, {title: item.name})
        })
        yield put({
          type: 'saveTabs',
          payload:{
            tabs: response.datas.tabs,
            fixedTabs,
          }
        });

        yield put({
          type: 'bonus'
        })

        yield put({
          type: 'getContent',
          payload: {
            special_id: response.datas.tabs[0]['special_id'],
            name: response.datas.tabs[0]['name'],
            page: 10,
            curpage: 1
          }
        })
      }
    },

    *bonus(_, { call, put }) {
      const response = yield call(bonus);
      console.log('bonus', response);
    },

    *getContent({ payload }, { call, put }) {
      const { special_id, page, curpage, name } = payload;
      const response = yield call(queryTabsContent, { special_id, page, curpage, name });
      if (response.code === 200) {
        // console.log('responseContent', response);
        yield put({
          type: 'saveTabContent',
          payload: {
            tabContent: {
              [name]: response.datas
            }
          }
        });
        yield put({
          type: 'saveCurrentContent',
          payload: {
            currentContent: response.datas
          }
        })
      }
      
    }
  },

  reducers: {
    saveTabs(state, { payload } ) {
      return {
        ...state,
        ...payload
      }
    },
    saveTabContent(state, { payload }) {
      return {
        ...state,
        tabContent: {
          ...state.tabContent,
          ...payload.tabContent
        }
      }
    },
    saveCurrentContent(state, { payload }) {
      return {
        ...state,
        currentContent: payload.currentContent
      }
    }
  }
}