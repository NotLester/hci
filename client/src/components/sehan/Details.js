import React, { useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

import "./details.css";


const Details = () => {
  function selfies() {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        swal("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
    <div id="body3">
      <form id="f1">
        <h1 id="fz">Product Details</h1>
        <img
          src="https://i.pinimg.com/736x/b9/02/b9/b902b9aad58334dd19ad738bfb0083a2--broom-corn-things-i-want.jpg"
          id="imgd"
        />

        <table id="tb1">
          <tr id="tr1">
            <td id="td1">Product Name</td>
            <td id="td1"> Broom </td>
          </tr>

          <tr id="tr1">
            <td id="td1">Unit Price</td>
            <td id="td1"> Rs:300.00 </td>
          </tr>

          <tr id="tr1">
            <td id="td1">Seller Name</td>
            <td id="td1"> Kasun </td>
          </tr>

          <tr id="tr1">
            <td id="td1">Contact Number</td>
            <td id="td1"> 0719081929 </td>
          </tr>

          <tr id="tr1">
            <td id="td1">Discription</td>
            <td id="td1"> Good product </td>
          </tr>
        </table>

        <Link to="/edit">
          {" "}
          <button id="btnedit">Edit</button>
        </Link>
        <Link to="/view">
          {" "}
          <button onClick={selfies} id="btndelete">
            Delete
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Details;
