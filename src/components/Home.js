import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {'Liza'} is a Web Developer from {'NewYork'}
      </h1>
    </div>
  );
}

export default Home;
