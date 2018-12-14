import React from 'react';

function Main(props) {
  return (
    <main className="main">
      <div>this is main</div>
      {props.children}
    </main>
  );
}

export default Main;
