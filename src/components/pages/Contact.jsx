import { useState } from "react";
import { validEmail } from "../../utils/helper";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const change = (e) => {
    const { target } = e;
    const it = target.name;
    const iv = target.value;
    
    if (it === 'email') {
      setEmail(iv);
      if (!validEmail(iv)) {
      setErrorMessage('Email is invalid');
      } else if (validEmail(iv)) {
        setErrorMessage('');
      }
    }
  }


  return (
    <div id="mb">
      <h1>Contact</h1>
      <form id="Contacted">
      <label >Name</label><br></br>
      <input type="text" id="name" /><br></br>
      <label >Email</label><br></br>
      <input type="text" id="email" value={email} onChange={change} name="email" />
      {errorMessage && (
          <p className="error-text" id="error">{errorMessage}</p>
      )}<br></br>
      <label >Message</label><br></br>
      <textarea type="text" id="message" rows="6" cols="30" ></textarea><br></br><br></br>
      <button type="submit">Contact me!</button>
      </form>
    </div>
  );
}
