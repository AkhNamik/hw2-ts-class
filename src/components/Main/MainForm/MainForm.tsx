import React from "react"
import "./MainForm.css"
import FormStatistics from "../FormStatistics/FormStatistics"
import ProfileIcon from "../../../images/252.png"
class MainForm extends React.Component {
  render() {
    return (
      <div className="mainBox">
        <h2>Johny Dou Profile</h2>
        <div className="cnvs"></div>
        <div className="mainBoxImg">
          <img src={ProfileIcon}></img>
        </div>
        <FormStatistics />
      </div>
    )
  }
}
export default MainForm
