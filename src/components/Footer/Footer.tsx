import React from "react"
import "./Footer.css"
import FooterAddress from "./FooterAddress/FooterAddress"
import FooterIcon from "./FooterIcon/FooterIcon"
import FooterMail from "./FooterMail/FooterMail"
class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <FooterAddress />
        <FooterIcon />
        <FooterMail />
      </footer>
    )
  }
}
export default Footer
