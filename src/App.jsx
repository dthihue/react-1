// Nơi để show những component lên trên giao diện===

import Array from "./modules/buoi-2/array/array";

// import RandomImage from "./modules/buoi-2/state/random-image";

// import ChangeColor from "./modules/buoi-2/state/change-color"

// import FontSize from "./modules/buoi-2/state/font-size"

// import State from "./modules/buoi-2/state/state"

// import External from "./modules/buoi-2/style/external"
// import External2 from "./modules/buoi-2/style/external-2"
// import Module from "./modules/buoi-2/style/module"

// import HandleEvent from "./modules/buoi-1/binding-data/handle-event"
// import Inline from "./modules/buoi-2/style/inline"

// import CardRCC from "./card-rcc";
// import CardRFC from "./card-rfc";
// import HomePage from "./modules/buoi-1/home-page/home-page";
// import BindingData from './modules/buoi-1/binding-data/binding-data'
/*import Array from './modules/buoi-2/array/array';

* lưu ý: 
- khi tạo một component thì phải đặt tên chữ hoa viết đầu.
- Để phân biệt với các thẻ HTML (div,p,h1,section,...)

*/

//  đây là function component
function App() {
  return (
    <div>
      <Array/>
      {/* <RandomImage /> */}
      {/* <ChangeColor/> */}
      {/* <FontSize/> */}
      {/* <State/> */}
      {/* <Module/> */}
      {/* <External2/>  */}
      {/* <External/> */}
      {/* <Inline/> */}
      {/* <HandleEvent/> */}
      {/* <BindingData/> */}
      {/* <HomePage></HomePage> */}
      {/* <CardRCC></CardRCC>
      <CardRFC></CardRFC> */}
    </div>
  );
}

export default App;
