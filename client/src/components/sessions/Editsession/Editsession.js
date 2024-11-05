import React, { useEffect, useState } from "react";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Mainfooter from "../../footer/Mainfooter/Maingooter";
import Subfooter from "../../footer/Subfooter/Subfooter";
import "../AddSession/addsession.css";
import Reactquill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../../Editor/Editor";
import { Navigate, useParams,useHistory  } from "react-router-dom";
const Editsession = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [redirect, setRedirect] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/posts/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files[0]);
    }
    const response = await fetch("http://localhost:5000/posts/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }



  return (
    <>
      <Combinenav />
      <div className="add__session__container">
        <form onSubmit={updatePost}>
          <div className="add__input__credentails">
            <input
              className="add__input"
              type="text"
              placeholder="title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
          <div className="add__input__credentails">
            <input
              className="add__input"
              type="text"
              placeholder="title"
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
            />
          </div>
          <div className="add__input__credentails">
            <input
              className="add__input"
              type="file"
              placeholder="title"
              onChange={(ev) => setFiles(ev.target.files)}
            />
          </div>
          <div className="add__input__credentails">
            {/* <textarea className="add__input__text" name="" id="" cols="50" rows="30" placeholder="description"></textarea> */}
            {/* <Reactquill className="dr" /> */}
            <Editor value={content} onChange={setContent} />
          </div>
          <div className="add__input__credentails">
            <button type="submit" className="adder__btn">
              save session
            </button>
          </div>
        </form>
      </div>
      <Mainfooter />
      <Subfooter />
    </>
  );
};

export default Editsession;
