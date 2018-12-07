import { Carousel, WingBlank } from 'antd-mobile';
import clickUtil from '@/utils/clickUtil';

class Swiper extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    const { scale } = this.props;
    this.setState({
      imgHeight: 375 / parseFloat(scale)+'px'
    })
  }

  render() {
    const { items } = this.props
    return (
        <Carousel
          autoplay={false}
          infinite
        >
          {items.map(val => (
            <div
              onClick={() => clickUtil(val)}
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              
            >
              <img
                src={val['image']}
                alt=""
                style={{ width: '100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
 
    );
  }
}

export default Swiper;
