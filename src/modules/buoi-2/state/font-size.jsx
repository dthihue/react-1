import React, { Component } from 'react'

export default class FontSize extends Component {
    constructor(){
        super();

        this.state = {
            fontSize:16,
        }
    }
  render() {
    /**
     * 1. Xác định state (tên và kiểu dữ liệu)
     * 2. Binding state (Khi state thay đổi thì giao diện thay đổi)
     * 3. Trigger: gắn sự kiện (khi click button thì sẽ cập nhật state)
     */
    // tăng giảm font-size thẻ p.
    return (
      <div>
        <p style={{
            fontSize: this.state.fontSize,
        }}
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla error reiciendis doloremque quae.
        </p>
        <div>
            <button onClick = {()=>{
                const newState = {
                    fontSize: this.state.fontSize + 1,
                }
                this.setState(newState);
            }} className="btn btn-success mx-2">+</button>
            <button onClick = {()=>{
                const newState = {
                    fontSize: this.state.fontSize - 1,
                }
                this.setState(newState);
            }} className="btn btn-success mx-2">-</button>
        </div>

      </div>
    )
  }
}
