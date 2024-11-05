import ViewSession from "./ViewSession";
import Post from "./ViewSession";
import { useEffect, useState } from "react";

export default function Index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        // console.log(posts)
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => <ViewSession {...post} />)}\\</>;
}
