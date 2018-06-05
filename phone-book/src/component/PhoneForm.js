import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name:'',
        phone:''
    }
    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            // 이벤트 객체에 담겨 있는 현재의 텍스트 값을 읽어옴 
            [e.target.name]: e.target.value, // Computed property names : 객체의 키값을 []안에 쓰면 변수 또는 식을 넣을 수 있음
        })
    }
    handleSubmit = (e) => {
        // form에서 submit이 발생하면 페이지 리로딩 되기 때문에 방지
        e.preventDefault();
        // props 로 받은 onCreate 함수를 호출
        this.props.onCreate(this.state);
        // value 초기화
        this.setState({
            name:'',
            phone:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder = "이름"
                    value = {this.state.name}
                    onChange = {this.handleChange} // input의 값이 바뀔때 마다 발생하는 이벤트
                    name = "name" //input 구분
                />
                <input
                    placeholder = "전화번호"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    name = "phone"
                />
                {/* <div>{this.state.name} {this.state.phone}</div> */}
                <button type="submit">등록</button>
            </form>
        )
    }

}
export default PhoneForm;