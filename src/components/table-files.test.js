import React from 'react'
import {
  render,
} from '@testing-library/react'
import TableFiles from "./table-files"

it('renders without crashing', async () => {
  const data = [{
    file: "test2.csv",
    lines: [
      {
        "text": "bRbAtxaZkFEy",
        "number": 8,
        "hex": "d74ea2d68e0588b3712d8b05312bbff8"
      }
    ]
  }]

  render(< TableFiles data={data}/>)
})