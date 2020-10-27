import React from "react"
type Props = {
  amount: number
  text: string
}
class Statistics extends React.Component<Props> {
  render() {
    return (
      <div className="formInfo">
        <p>{this.props.amount}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
export default Statistics
