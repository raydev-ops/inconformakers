import React from "react"
import Proptypes from "prop-types"
import { Link } from "gatsby"

const MainMenu = ({ menu = [] }) => {
  return (
    <ul className="d-flex">
      {menu.map(({ title, url }, index) => {
        return (
          <li className="m-left-10" key={index}>
            <Link className="color-white m-left-20" to={`/${url}`}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

MainMenu.propTypes = {
  menu: Proptypes.array.isRequired,
}

export default MainMenu
