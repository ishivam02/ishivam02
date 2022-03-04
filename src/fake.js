// import Item from "antd/lib/list/Item";
import React, { useState, useEffect } from "react";
import Div from "./Modal";

function FakeApp() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState(null);

  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [desciption, setDescription] = useState("");
  const [ids, selectData] = useState(false);

  const img = {
    height: "30px",
    width: "30px",
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp);
        setData(resp);
      });
  }, []);
  function deletedata(id) {
    setData(data.filter((data) => data.id !== id));
  }

  function updateData(e) {
    setDatas(e);
    console.log(e);
    selectData(true);
  }

  //  function selectData(id){
  //    let item =data[id-1]
  //    setId (item.id)
  //    setTitle(item.title)
  //    setDescription(item.desciption)
  //    setPrice(item.price)
  //  }
  return (
    <>
      <div className="App">
        <h2 align="center">Fake Api</h2>
        <table className="Table" border="3">
          <tbody>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>Image</td>
              <th>Actions</th>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <img alt="none" style={img} src={item.image} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletedata(item.id);
                    }}
                  >
                    Delete
                  </button>

                  <td>
                    {/* <button onClick={() => updateData(item.id)}>Update</button> */}
                    <button onClick={() => updateData(item)}>Update</button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
          {ids && (
            <Div
              datas={data}
              show={ids}
              data={datas}
              closeModel={selectData}
            ></Div>
          )}
        </table>
      </div>
    </>
  );
}
export default FakeApp;
