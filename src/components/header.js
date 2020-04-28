import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Paper from "@material-ui/core/Paper"
import SearchIcon from "@material-ui/icons/Search"

import css from "./header.module.css"
const Header = ({ siteTitle }) => (
  <Paper elevation={4}>
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.h1}>
          <Link to="/" className={css.link}>
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <button className={css.searchIcon}>
            <SearchIcon></SearchIcon>
          </button>
        </nav>
      </div>
    </header>
  </Paper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
