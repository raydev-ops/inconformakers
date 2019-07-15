import React from "react"
import { WatchAuth } from "../../services/auth"

class Private extends React.Component {
  state = {
    user: null,
    isLogged: false,
  }

  componentDidMount = () => {
    WatchAuth(user => this.setState({ isLogged: !!user, user }))
  }

  render() {
    const { Component } = this.props
    console.log("private")
    return <Component {...this.state} />
  }
}

export default Private
