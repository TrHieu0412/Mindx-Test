import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className="todo-header">
        <Link classname="todo-all" to="/Alltext"> All </Link>
        <Link classname="todo-active" to="/Active"> Active </Link>
        <Link classname="todo-all" to="/Completed"> Completed </Link>
    </div>
    
  )
}

export default Header
