import React , { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import DynamicForm from '../components/DynamicForm';


function Homepage() {
    const dropdownOptions = [
        
        { value: 'IPC All Versions (IC)', label: 'IPC All Versions (IC)' },
        { value: 'Publication Date (PBD)', label: 'Publication Date (PBD)' }
    ];

    const operatorOptions = [
        { value: 'AND', label: 'AND' },
        { value: 'OR', label: 'OR' }
    ];


  return (
   
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm dropdownOptions={dropdownOptions} operatorOptions={operatorOptions} />
    </div>


  )
}

export default Homepage