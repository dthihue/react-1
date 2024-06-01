import { Component } from 'react'
import Header from "./header"
import Footer from "./footer"
import Content from "./comtent"
import Navigation from "./navigation"
// createElemnet('div');//object
// Fragment: nhiệm vụ bao bọc toàn bộ nội dung giao diện trả về tránh cùng cấp, nó sẽ ko hiện lên trên giao diện
// chú ý: ko được return về những thẻ cùng cấp với nhau, phải có 1 thẻ lớn nhất bao bọc ngoài cùng 
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
       <Header/>
       <div className="row">
        <div className="col-6">
        <Navigation/>
        </div>
        <div className="col-6">
        <Content/>
        </div>
       </div>
       <Footer />
      </div>
    )
  }
}
