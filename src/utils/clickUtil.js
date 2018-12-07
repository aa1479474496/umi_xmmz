import RouterUtil from './RouterUtil'


export default function clickUtil(item) {
  let { type } = item;
  switch (type) {
    case 'url':
      location.href = item.data;
      break;
  
    default:
      break;
  }
}