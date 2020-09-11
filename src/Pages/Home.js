import React from "react";

function Home() {
  return (
    <div>
      <header>
        <img
          src={`${process.env.PUBLIC_URL}/Asserts/abhiyanta_logo.png`}
          alt="logo"
        />
        <p>Site Under Construction</p>
        <p>Great things coming soon...</p>
      </header>
    </div>
  );
}

export default Home;
