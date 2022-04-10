import React from 'react';
import { Table } from 'react-bootstrap';


const TableFiles = ({ data }) => {
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ file, lines }, i) => (
          lines.map((line, z) => (
              <tr key={`${i}-${z}`}>
              <td>{file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        ))}
      </tbody>
    </Table>
  );
}

export default TableFiles;
