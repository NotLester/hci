import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./new.css";
import axios from "axios";
import swal from "sweetalert2";
import Alert from "../alert/Alert";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Subfooter from '../footer/Subfooter/Subfooter'
import Maingooter from '../footer/Mainfooter/Maingooter'
export default function New() {
  const [productname, setProductname] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [sellername, setSellername] = useState("");
  const [contactno, setContactno] = useState("");
  const [description, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();
    // addTask(taskInp);
    // e.target.reset()
    const newProduct = {
      productname: productname,
      unitprice: unitprice,
      sellername: sellername,
      contactno: contactno,
      description: description,
    };

    axios
      .post("http://localhost:5000/product/add", newProduct)
      .then(() => {
        // alert("Product Added");
        Alert("Product added", "product added successfully");
      })
      .catch((error) => {
        alert(error);
      });

      setTimeout(()=> {
        window.location.replace("http://localhost:3000/view");
      },1500)
  }


  return (
    <div className="added">
      <Combinenav />

      <div id="body1">
        <div className="hj">
          <form id="form1">
            <h1>Add Product</h1>

            <div class="form-group">
              <input
                type="text"
                value={productname}
                class="form-control"
                id="inputproductname"
                placeholder="Product Name"
                onChange={(e) => {
                  setProductname(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="Number"
                class="form-control"
                id="inputunitprice"
                placeholder="Unit Price"
                onChange={(e) => {
                  setUnitprice(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputsellername"
                placeholder="Seller Name"
                onChange={(e) => {
                  setSellername(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="Number"
                class="form-control"
                id="inputcontactnumber"
                placeholder="Contact Number"
                onChange={(e) => {
                  setContactno(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputdescription"
                placeholder="Discription"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <p id="pnew">Upload Product Image</p>
            </div>
            <div>
              <Link to="/view">
                {" "}
                <input type="submit" onClick={sendData} id="btn1" />
                add
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Subfooter />
      <Maingooter />
    </div>
  );
}
