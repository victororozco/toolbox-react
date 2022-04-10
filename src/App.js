import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Files from './services/files'

import './App.css';
import TableFiles from './components/table-files';

function App() {
  const [ files, setFiles ] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const getFiles = await Files.get_all_files()
    setFiles([...getFiles.data.data])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Test App</h1>
      </header>
      <Container fluid className="App-content">
        { files && <TableFiles data={files} /> }
      </Container>
    </div>
  );
}

export default App;
