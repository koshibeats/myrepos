import Footer from "./Footer";
import useName from "../hooks/useName";
import ButtonSection from "./ButtonSection";
import { MyContext } from "../MyContext";
import React, { useContext } from "react";

export default function Main() {
  const message = useContext(MyContext);
  return (
    <div className="mainWrapper">
      <h1 className="name">{message}</h1>
      <p className="occupation">Fachinformatiker fuer Anwendungsentwicklung</p>
      <p className="link">github.com</p>
      <ButtonSection></ButtonSection>
      <div className="about">
        <h1 className="aboutHeader">About</h1>
        <p className="aboutContent">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
      </div>
      <div className="interest">
        <h1 className="interestHeader">Interest</h1>
        <p className="interestContent">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
      </div>
    </div>
  );
}
