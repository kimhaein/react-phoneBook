import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm'
import PhoneInfoList from './component/PhoneInfoList'

class App extends Component {
  id = 2
  state = {  //defalt data
    information : [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }

    ]
  }
  // 리스트 추가 이벤트
  handleCreate = (data) => { 
   const {information} = this.state; // 현재 state
   this.setState({
    information: information.concat({id: this.id++,...data}) //array1.concat() : array1과 주어진 다른 항목 간의 연결을 포함하는 Array 개체를 반환합니다.
   })
  }
  // 리스트 제거 이벤트
  handleRemove = (id) => { 
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
