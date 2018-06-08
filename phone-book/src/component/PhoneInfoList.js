import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    //{추출할 프로퍼티명 : 할당하고자 하는 변수명} = 객체 -> 프로퍼티명과 변수명이 같다면 할당할 변수명 생략가능(property shorthand)
    console.log(this.props)
    const list = data.map( //data = App.js의  information 객체
      info => (
        <PhoneInfo
          key={info.id} //key 는 리액트에서 배열을 렌더링을 할 때 꼭 필요한 값 -> 업데이트 효율성을 위해 필수 index값으로는 하지말자,고유id 추천
          info={info} //info = currentValue : 배열의 요소 중, 현재 처리되고 있는 요소
          onRemove={onRemove} // this.props.onRemove 메소드이기 때문에 App.js의 onRemove
          onUpdate={onUpdate} // this.props.onUpdate 메소드이기 때문에 App.js의 onUpdate
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;