import React, { Component } from "react";

const listCar = [
  {
    id: 1,
    name: "car 1",
    price: "99",
    image: "https://i.pravatar.cc?img=1",
  },
  {
    id: 2,
    name: "car 2",
    price: "92",
    image: "https://i.pravatar.cc?img=2",
  },
  {
    id: 3,
    name: "car 3",
    price: "93",
    image: "https://i.pravatar.cc?img=3",
  },
  {
    id: 4,
    name: "car 4",
    price: "94",
    image: "https://i.pravatar.cc?img=4",
  },
];
// khi render với mảng thì mỗi phần tử con nên có 1 key 

export default class Array extends Component {
  renderListCar = () => {
    const listTr = listCar.map((item) => {
      return (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            <img
              style={{ width: 100, height: 100 }}
              src={item.image}
            />
          </td>
        </tr>
      );
    });
    return listTr;
  };
  renderListButton = () => {
    const colors = ["black", "green", "blue", "yellow"];
    const listButton = colors.map((item) => {
      return (
        <button key={item} className="btn btn-success mx-2">
          {item}
        </button>
      );
    });

    return listButton;
  };

  render() {
    // return [<button className="btn btn-success mx-2">1</button>,
    //  <button className="btn btn-success">2</button>,]
    // const colors = ['black','green','blue','yellow'];
    // .map: lặp qua từng phần tử của mảng và trả về phần tử mới ứng với return

    return (
      <div>
        {/* {[
          <button className="btn btn-success mx-2">Black</button>,
          <button className="btn btn-success">Green</button>,
          <button className="btn btn-success mx-2">Blue</button>,
          <button className="btn btn-success">Yellow</button>,
        ]} */}
        {/* {
          colors.map((item) => {
            return <button key={item} className="btn btn-success mx-2">{item}</button>;
          })
        } */}
        {this.renderListButton()}

        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">image</th>
            </tr>
          </thead>
          <tbody>
            {[
              <tr>
                <th scope="row">1</th>
                <td>car 1</td>
                <td>99$</td>
                <td>
                  <img
                    style={{ width: 100, height: 100 }}
                    src="https://i.pravatar.cc?img=1"
                  />
                </td>
              </tr>,

              <tr>
                <th scope="row">2</th>
                <td>car 2</td>
                <td>92$</td>
                <td>
                  <img
                    style={{ width: 100, height: 100 }}
                    src="https://i.pravatar.cc?img=2"
                  />
                </td>
              </tr>,
            ]}
          </tbody>
        </table>
      </div>
    );
  }
}
