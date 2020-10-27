import React from "react"
import "./FormStatistics.css"
import Statistics from "./Statistics/Statistics"
class FormStatistics extends React.Component {
  render() {
    return (
      <div className="formBoxStatistics">
        <Statistics amount={4569} text="Followers" />
        <div className="cnvss"></div>
        <Statistics amount={550} text="Following" />
      </div>
    )
  }
}
export default FormStatistics
