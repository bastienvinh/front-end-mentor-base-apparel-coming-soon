import { useState } from "react"
import { ReactComponent as SVGArrow } from "../images/icon-arrow.svg"

import Button from "./Button"

import "./Input.scss"

const Input = ({ isValid, setIsValid }) => {
  const [email, setEmail] = useState("")

  const onClick = () => {
    setIsValid(email !== "")
  }

  return (
    <div className={`input-group ${isValid ? "" : "error"}`}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required />
      <Button onClick={onClick}><SVGArrow /></Button>
    </div>
  )
}

export default Input