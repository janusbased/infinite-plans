import React from 'react'
import { Link } from 'react-router-dom'

const RegentOfInterregnum = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className="Regent-of-Interregnum link none"
      to="/infinite-plans"
    >
      <p>Regent of Interregnum addresses samely disparate hands.</p>
      <p>They point to supermarkets full of fruit and nuts</p>
      <p>and glass cases labeled Positive Evidence,</p>
      <p>reporting me and my cause to those amassing human units.</p>
      <br />
      <p>Silence sits, its hands hanging down,</p>
      <p>dripping on an altar that founds its own invisibility.</p>
      <p>Its song gone dry speaks to its armor.</p>
      <p>Its slow thighs almost dance.</p>
      <br />
      <p>An extravagant crowning excuse besieges little life.</p>
    </Link>
  )
}

export default RegentOfInterregnum
