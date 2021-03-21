import React from 'react';
import './page-component.styles.css'

const PageComponent = (props) => {
    return (
        <div className={`page column ${props.className}`}>
          {props.children}
        </div>
    )
}

export default PageComponent
