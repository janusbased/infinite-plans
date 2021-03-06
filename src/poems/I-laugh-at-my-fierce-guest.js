import React from 'react'
import { Link } from 'react-router-dom'

const ILaughAtMyFierceGuest = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className="I-laugh-at-my-fierce-guest link none"
      to="/"
    >
      <div className="vertically-centered">
        <p>
          I laugh at my fierce guest. He squints around modestly, as if on a
          stranger's property.
        </p>
        <p>
          He makes mouths at the invisible event, rattling with diction and
          dice.
        </p>
        <br />
        <p>
          But he is chained to my children, riddle-happy. And he tells them of
          the permanent war machine:
        </p>
        <p>the tremendous precision instrument of civilization.</p>
      </div>
    </Link>
  )
}

export default ILaughAtMyFierceGuest
