import React from 'react';
import { Component } from 'react'

const OtherComponent = ({ nickname, balls }) => {
  return (
    <div>
      <h1>i am: {nickname}</h1>
      <p>and i have {balls} balls</p>
    </div>
  );
};

export default OtherComponent;

// class MyComponent extends Component {
//   override render() {
//     return <div>
//       return <h1>Hello, React world!</h1>;
//       <p>FooBar: {this.props.fooBar}</p>
//       <p>Baz: {this.props.baz}</p>
//     </div>
//   }
// }

// const MyReactComponent = () => {
//   return <h1>Hello, React world!</h1>;
// };

// export default MyReactComponent;