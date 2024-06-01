import React, { Component } from "react";

/**
 * - State: là trạng thái của component
 * - Sau khi cập nhật state thì method render tự động gọi lại.
 * - Để cập nhật state thì chúng ta phải sử dụng method setState được kế thừa từ class cha Component.  
 * 1. cách khai báo state
 * 2. cách sử dụng
 * 3. cách cập nhật state
 * 4. Nguyên tắc hoạt động : tự động gọi lại method render của component. 
 */
// class Component {
//   state = {};

//   setState(object){
//     Object.entries(object).forEach(([key,value]) => {
//       state[key] = value;
//     })
//   }
// }
export default class State extends Component {
  constructor() {
    super();

    // khai báo state của component
    this.state = {
      isLogin: true,
    };
  }
  // cách 2:
  showAction = () => {
    if (this.state.isLogin) {
      return (
        <div>
          <span>ĐangHue</span>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              const newState ={
                isLogin:false,
              }
              this.setState(newState)
              this.render();
            }}
          >
            Đăng Xuất
          </button>
        </div>
      );
    }
    return (
      <div>
        <button className="btn btn-success mx-2">Đăng Ký</button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            const newState={
              isLogin:true,
            }
            this.setState(newState);
          }}
        >
          Đăng Nhập
        </button>
      </div>
    );
  };
  render() {
    const isLogin = true;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>

              {/* cách 1 */}
              {/* sử dụng toán tử 3 ngôi để render với  điều kiện */}
              {/* {
                isLogin ? (
                    <div>
                <span>ĐangHue</span>
                <button className="btn btn-success mx-2">Đăng Xuất</button>
              </div>
                ) : (
                    <div>
                <button className="btn btn-success mx-2">Đăng Nhập</button>
                <button className="btn btn-success mx-2">Đăng Ký</button>
              </div>
                )
              } */}
              {this.showAction(this.isLogin)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
