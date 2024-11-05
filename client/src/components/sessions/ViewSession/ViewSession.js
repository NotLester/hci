import React, { useEffect, useState } from "react";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Subfooter from "../../footer/Subfooter/Subfooter";
import Maingooter from "../../footer/Mainfooter/Maingooter";
import "./viewsession.css";
import fakedata from "./Viewfake";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatISO9075 } from "date-fns";
import moment from 'moment';


export default function ViewSession({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div>
      {/* <Combinenav /> */}

      <div className="card">
        <div className="card__img">
          <Link to={`/post/${_id}`}>
            <img
              className="card__img1"
              src={"http://localhost:5000/" + cover}
              alt=""
            />
          </Link>
        </div>
        <div className="card__details">
          <Link to="/session">
            <h1 className="card__title">{title.slice(0,30)}...</h1>
          </Link>

          <div className="card__user">
            <h2 className="username">{author.username}</h2>
            <h2 className="date">{moment(createdAt).fromNow()}</h2>
          </div>
          <p className="card__para">{summary}</p>
        </div>
      </div>
      {/* <Maingooter /> */}
      {/* <Subfooter /> */}
    </div>
  );
}

// export default ViewSession;
