import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/PageWrapper"
import { WatchAndGetUserDetails } from "../services/auth"
import Sidebar from "../components/Sidebar/Sidebar"

const stateDefault = {
  isLoading: true,
  event: {
    data: "",
    id: "",
  },
  user: {},
}

class EventTemplate extends Component {
  state = stateDefault

  componentDidMount = () => {
    const post = this.props.data.wordpressWpEventos
    const { acf } = post
    WatchAndGetUserDetails(user => {
      this.setState({
        user,
        event: {
          ...this.state.event,
          ...acf,
        },
      })
    })
  }

  render() {
    const post = this.props.data.wordpressWpEventos
    console.log(post)
    const {
      event: { data },
    } = this.state
    return (
      <Layout>
        <h1
          className="m-bottom-20 fs-custom color-white"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div className="grid">
          <div className="sm-8-12">
            {data && <p className="m-bottom-20 color-white">Data: {data}</p>}
            <div
              className="content_ color-white m-bottom-100"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="sm-4-12">
            <Sidebar />
          </div>
        </div>
      </Layout>
    )
  }
}

export default EventTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpEventos(id: { eq: $id }) {
      title
      id
      content
      acf {
        key
        data
      }
    }
  }
`
