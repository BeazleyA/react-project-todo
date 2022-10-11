import React from 'react';
import datalist from '../JSON/list.json';

// const list = [
//   {
//     id: 'Make Lunch',
//     firstname: 'Pastabox',
//     lastname: 'Dietcoke',
//     year: 2022,
//   },
//   {
//     id: 'Phone doctors',
//     firstname: 'Thurleigh Road Practise',
//     lastname: 'Blood test',
//     year: 2022,
//   },
// ];


export const Data = () => {
    return (
          <ul>
            {datalist.map(item => (
              <li key={item.id}>
                <div>{item.id}</div>
                <div>{item.firstname}</div>
                <div>{item.lastname}</div>
                <div>{item.year}</div>
              </li>
            ))}
          </ul>
        );
    }


// export const ComplexList = () => {

// return (
//   <ul>
//     {list.map(item => (
//       <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
// );
// }
