import React from "react"
import "./MainIcon.css"
import CatLogo from "../../../images/cat.png"
class MainIcon extends React.Component {
  render() {
    return (
      <div className="mainIcon">
        <img src={CatLogo}></img>
      </div>
    )
  }
}
export default MainIcon
