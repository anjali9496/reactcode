import React, { Component } from "react";

export default class PostsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log("component did mount call.");
    debugger;
        this.setState((prevState) => ({
            posts:  [1,2,3,4,5,6,6,7,7,7,7,6,7,7,7,7,8,7,7],
        }))
  }
  render() {
    return (
      <div>
        <p>Post Class component</p>
        <ul>
          {this.state.posts.map((item,index) => (
            <li key={index+1}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
