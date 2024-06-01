import React, { Component } from "react";

export default class BindingData extends Component {
    getTitle(){
        // return thuộc kiểu dữ liệu có thể hiển thị lên được.
        // return<h2>Xin chào các bạn </h2>
        return 'xin chào các bạn.';
    }
  render() {
    const title = "cyber soft";
    const number = 100;
    const bool = true;
    const n = null;
    const un = undefined;
    // để binding data lên trên giao diện thì dùng dấu ngoặc nhọn: { } dùng để method hoặc sử dụng biến bên trong html 
    // Những kiểu dữ liệu nào chúng ta có thể binding lên được:  string, number,Array, thẻ html, component của React.
    // Những kiểu dữ liệu ko thể binding lên được: Boolearn, Null, undefined,Oject.
    // Oject: chỉ dành để show những thẻ do react tạo ra tương ứng vơi với thẻ html 
    return (
      <div>
        <h1>BindingData</h1>
        {/* để gọi method getTitle */}
        {this.getTitle()};
        <p>Title:{title}</p>
        <p>Number:{number}</p>
        <p>
            Boolean: {bool}
        </p>
        <p>
            Null:{null}
        </p>
        <p>
            Undefined: {un}
        </p>
        {/* chuyển Array -> String: join */}
        <p>
            Array: {[1,2].join('')}
        </p>
         <p>
            HTML: {<span>html</span>}
        </p>
        {/* <p>
        Component: {<CardRCC/>}
        </p>  */}
      </div>
    );
  }
}
