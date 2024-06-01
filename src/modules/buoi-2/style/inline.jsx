import React, { Component } from 'react'

export default class Inline extends Component {
  render() {
    /**
     * bgc: xanh
     * clolor: white
     * fz: 30px
     * padding: 50px
     * HTML: <div style = {"background-color: green; color: white"}> InlineStyle</div>
     */
    /**
     * Sự khác biệt giữa các react và html
     * react: object
     * html: string 
     */
    return (
      <div style ={{
        backgroundColor:'green',
        color: 'white',
        fontSize: '30px',
        padding:50,// gắn cho đơn vị mặc định là px
        marginTop:'5rem',
      }}>Inline Style</div>
    )
  }
}
