import React from 'react'

const Row = (props) => {
   let usableData = props.data
   if (props.data.length < 10) {
      usableData.push("")
   }
   
   const cells = usableData.map((cell, index) => {
      if (props.isHeader){
        return (
         <th key={index} style={props.style}>
            {cell}
         </th>)
      } else {
        return <td key={index} style={props.style}>{cell}</td>
      }
   })
   
   return (<tr>{cells}</tr>)
   
   //return (<div>{functiaMea()}</div>)
}

export default Row;