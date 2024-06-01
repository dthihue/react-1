// tạo class component
// gõ nhanh: rcc
import React, { Component, createElement } from 'react'

// JS + HTML: jsx
// code HTML trong file js.
export default class CardRCC extends Component {
  // sử dụng method render để show nôị dung trên giao diện. Đặt trong kết quả trả về của method render
  render() {
    //Babel: html -> createElement
    // return (
    //   createElement("div", {className: "card"}, "Crad RCB" )
    // )

    return <div className="card">Crad RCC</div>
  }
}
