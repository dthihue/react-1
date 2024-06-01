// vai trò của file main là kết nối với html để show lên giao diện
import React from 'react'
import ReactDOM from 'react-dom/client'
//----
// import default
import App from './App.jsx'
// import CardRCC from "./card-rcc.jsx";
// import CardRFC from "./card-rfc.jsx";


//----
//document.getElementById('root'): lấy 1 phần tử trên giao diện có id là root 
// thẻ div có id là root là nơi bắt đầu của 1 dự án react.
// App là thẻ do chúng ta tự tạo. component.
// React.StrictMode: thẻ do thư viện react tạo.component
// React.StricMode? mục đích ipport vào sử dụng để là gì?

// tóm lại: đưa các component vào bên trong thẻ div#root 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CardRCC></CardRCC>
    <CardRFC></CardRFC> */}

    <App /> 
    
  </React.StrictMode>,
);

// function createRoot(ele){
//   return{
//     render(component){
//       ele.append(component);
//     },
//   };
// }
