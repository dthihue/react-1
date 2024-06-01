import React, { Component } from "react";
/**
 * Sử dụng arrow function cho mọi function hoặc method. Arrow function ko có ngữ cảnh (context) riêng.
 * - phân biệt methood và thế nào là function ?
 * - cơ chế closure
 * 
 */
export default class HandleEvent extends Component {
  handleClick() {
    console.log("hello");
  }
  print(name) {
    console.log("Name:", name);
  }
  // curry function
  print2(name) {
    // closure
    // lúc tạo ra function này thì nó nhớ là có giá trị là 'hoa 2 '
    return()=>{
      console.log("Name:", name);
      //gọi function này
    };
  }
  render() {
    // nhấn button thì log ra chữ hello
    return (
      <div>
        {/* {createElement("button", {
          onClick: () => {
            console.log('Hello');
          },
        },
        'click me'
        )} */}
        <button onClick={this.handleClick}>Click me</button>
        <button
          onClick={() => {
            this.print("Hoa");
          }}
        >
          Print Hoa
        </button>

        <button onClick={this.print2("Hoa 2")}>
          Print Hoa 2
        </button>
      </div>
    );
  }
}
