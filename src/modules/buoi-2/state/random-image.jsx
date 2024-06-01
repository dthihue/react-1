import { Component } from "react";

export default class RandomImage extends Component {
    constructor(){
        super();

        this.state = {
         img:"https://i.pravatar.cc/?img=4"
        };
    }
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.state.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button onClick={()=>{
                const num = Math.floor(Math.random() * 50) + 1;
                this.setState({
                    // để chuyển qua temletstring nhấn clrl+ . -> chọn conver to...
                    img:`https://i.pravatar.cc/?img=${num}`,
                });
            }} href="#" className="btn btn-primary">
              Random
            </button>
          </div>
        </div>
      </div>
    );
  }
}
