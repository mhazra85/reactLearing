import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <table className='myTable'>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Mangal</td>
    </tr>
    <tr>
      <td>Dipa</td>
    </tr>
  </table>
  )

  const x = 7;
  // let text = "";
  // if(x < 6){
  //   text = "You are not eleigle"
  // } else if(x > 6){
  //   text = "You are eleigle";
  // } else {
  //   text = "You are greate";
  // }

  let myText = <h2>{x > 6 ? "You are eleigle" : "You are not eleigle"}</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myText);
