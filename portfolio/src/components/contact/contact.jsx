import { getImageUrl } from "../../utils";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="text">
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <div className="link">
        <a href="mailto:pakorn22120@gmail.com">
          <img src={getImageUrl("contact/email.png")} alt="e-mail icon" />
          pakorn22120@gmail.com
        </a>
        <a href="https://github.com/PakornBank">
          <img src={getImageUrl("contact/github.png")} alt="git-hub icon" />
          github.com/PakornBank
        </a>
        <a href="tel:+66863739707">
          <img src={getImageUrl("contact/phone.png")} alt="phone icon" />
          086-373-9707
        </a>
      </div>
    </div>
  );
}
