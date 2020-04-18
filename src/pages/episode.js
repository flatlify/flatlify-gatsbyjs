import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Show } from "../components/showCard/showCard"

import css from "./episode.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={css}>
      {/* {shows.map(show => (
        <Show show={show} />
      ))} */}
    </div>
  </Layout>
)

export default IndexPage
