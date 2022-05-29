import React from 'react'
import './root.component.css';

export default function Root(props) {
  return (
    <React.Fragment>
      <ul>
        <li><a href="/angular">Angular App</a></li>
        <li><a href="/react">React App</a></li>
      </ul>
    </React.Fragment>
  )
}
