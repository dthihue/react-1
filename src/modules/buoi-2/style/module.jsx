import React, { Component } from 'react'
// import default : thay đổi tên tùy ý S,style,St,..

import S from "./index.module.css";
// console.log(S);
// console.log(S["heading-2"]);

export function mergeClassName(...cn){
// cn: Array
// cn : ['a','b', 'c'] => 'a b c'
// join:
return cn.join(" ");
}
export default class Module extends Component {
  render() {
    return (
      <div>
        <h2 className={mergeClassName(S["heading-2"] , S["container"])}>Cyber</h2>
      </div>
    )
  }
}
