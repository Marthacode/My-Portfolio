import React from "react";
import phone from './phone.png'
import email from './email.png'
import twitter from './twitter.png'
import linktin from './linktin.png'

const Contact=()=> {
  return (
    <div className="contact">
      <div class="container text-light">
        <div class="align-items-center my-5">
         <h1>GET <span className="text-warning">IN TOUCH</span></h1>
         <p>I AM ALWAYS OPEN TO DISCUSS SOFTWARE DEVELOPMENT WORK AND COLLABORATION</p>
        </div>
        <div className="row">
          <div className="list col-md-4">
            <ul>
              <li>Social Profiles</li>
              <li><a href=""><img className="mt-3" src={phone} alt="reach-me-via-phone" /></a>090349229894</li>
              <li><a href=""><img className="mt-3" src={email} alt="reach-me-via-mail"/></a>onuh4martha@gmail.com</li>
              <li><a href="https://www.twitter.com/martha_onuh"><img className="mt-3" src={twitter} alt="reach-me-on-twitter" /></a>@martha_onuh</li>
              <li><a href="https://www.linkedin.com/in/martha-onuh-3047091b0"><img className="mt-3" src={linktin} alt="reach-me-on-linktin" /></a>Martha Onuh</li>
            </ul>

          </div>
          <div className="myform col-md-8">
            <p>If you have any questions, suggestions, or project, 
            you can fill out this form and I wil get back to you soonest!!!</p>
            <form className="">
              <div className="row">
              <input className="col-4 form-group" type="text" placeholder="YOUR NAME" />
              <input className="col-4 form-group ml-5" type="email" placeholder="YOUR EMAIL" />
              </div>
              <div className="row mt-5">
              <textarea className="form-control" placeholder="YOUR MESSEGE" />
              </div>
              <div className="row">
                <button type="submit" className="btn btn-warning btn-large mt-5">SEND MESSEGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;