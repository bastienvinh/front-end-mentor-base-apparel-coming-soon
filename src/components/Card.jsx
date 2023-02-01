// 750 x 420

import "./Card.scss"

import { ReactComponent as SVGLogoTitle } from "../images/logo.svg"

import heroDesktop from "../images/hero-desktop.jpg"
import heroMobile from "../images/hero-mobile.jpg"
import Input from "./Input"
import { useState } from "react"


const Card = () => {
  const [isValid, setIsValid] = useState(true)

  return (
    <div className="card">
      <div className="logo-title">
        <SVGLogoTitle />
      </div>
      <div className="block__image">
        <picture>
          <source media="(max-width: 767px)" srcset={heroMobile} />
          <source media="(min-width: 768px)" srcset={heroDesktop} />
          <img src={heroMobile} alt="hero" />
        </picture>
      </div>
      <form className="message">
        <h3><span className="text-primary">WE'RE</span><br /> COMING<br /> SOON</h3>
        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to date with announcements and our launch deals.</p>
        <Input isValid={isValid} setIsValid={setIsValid} />
        { isValid ? null : <small className="invalid-feedback">Please provider a valid email</small>}
      </form>
    </div>
  )
}

export default Card