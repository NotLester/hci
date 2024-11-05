import { useEffect, useState } from "react";
import ViewSession from "./ViewSession/ViewSession";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Maingooter from "../footer/Mainfooter/Maingooter";
import Subfooter from "../footer/Subfooter/Subfooter";
import BarLoader from "react-spinners/BarLoader";

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:5000/posts/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    // return a spinner if data is still loading
    return (
      <div className="loader-container">
      <BarLoader color={"#0077FF"}  size={150} />
    </div>
    );
  }

  return (
    <>
    <Combinenav />
      {/* {loading ? ( */}
        <div className="">
          {/* <BarLoader color={"#0077FF"} loading={loading} size={150} /> */}
        </div>
      {/* // ) : ( */}
        <div className="post-container">
          {posts.map((post) => (
            <ViewSession {...post} />
          ))}
        </div>
      {/* )} */}
      <Maingooter />
      <Subfooter />
    </>
  );
}
