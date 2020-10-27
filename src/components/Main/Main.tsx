import React from "react"
import "./Main.css"
import MainForm from "./MainForm/MainForm"
import MainIcon from "./MainIcon/MainIcon"
class Main extends React.Component {
  render() {
    return (
      <main id="main">
        <MainForm />
        <MainIcon />
      </main>
    )
  }
}
export default Main
