import React, { useEffect, useState } from "react";


export default function PostsFunction() {
  const [posts, setPosts] = useState([]);

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    debugger;
    console.log("use effect.");
    setPosts([1,2,3,4,5,6,7,8,99,33]);
  },[]);

  return (
    <div>
      <p>Post Function With Hooks component</p>
      <ul>
        {posts.map((item,index) => (
          <li key={index+1}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
