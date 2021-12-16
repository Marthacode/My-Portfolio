import React from "react";
import avater1 from './avater1.jpg'
import me1 from './me1.jpg'

const About=()=> {
  return (
    <div className="about">
      <div className="container text-light ">
        <h1>ABOUT <span className="text-warning">ME</span></h1>
        <h5>I DESIGN AND CODE BEAUTIFUL THINGS AND I LOVE WHAT I DO</h5>
        <div className="row mt-5  d-flex align-items-center justify-content-center">
          <div className="col-md-4">
            <img className="mee img-fluid" src={me1} alt="me" />
          </div>
          <div className="col-md-4 text-light">
            <table>
              <tbody>
               <tr>
                 <td className="text-muted">First Name  &nbsp; &nbsp;</td>
                 <td> Martha</td>
               </tr>
               <tr >
                 <td className="text-muted">Last Name  &nbsp;</td>
                 <td> Onuh</td>
               </tr>
               <tr>
                 <td className="text-muted">Birthdate   &nbsp;</td>
                 <td> 6th May </td>
               </tr>
               <tr>
                 <td className="text-muted">Nationality   &nbsp;</td>
                 <td> Nigerian</td>
               </tr>
               <tr>
                 <td className="text-muted">Experience   &nbsp;</td>
                 <td> 2 Years</td>
               </tr>
               <tr>
                 <td className="text-muted">Address   &nbsp;</td>
                 <td> Makurdi</td>
               </tr>

              </tbody>
            </table>
          </div>
          <div className="col-md-4">
          <table>
              <tbody>
               <tr>
                 <td className="text-muted">Freelance   &nbsp; &nbsp;</td>
                 <td> Available</td>
               </tr>
               <tr >
                 <td className="text-muted">Remote Job  &nbsp;</td>
                 <td> Available</td>
               </tr>
               <tr>
                 <td className="text-muted">Email   &nbsp;</td>
                 <td>onuh4martha@gmail.com</td>
               </tr>
               <tr>
                 <td className="text-muted">Language   &nbsp;</td>
                 <td> English</td>
               </tr>
               <tr>
                 <td className="text-muted">Twitter   &nbsp;</td>
                 <td> @martha_onuh</td>
               </tr>
               <tr>
                 <td className="text-muted">Address   &nbsp;</td>
                 <td> Makurdi</td>
               </tr>

              </tbody>
            </table>
          </div>
          
        </div>
        <div className="row  mt-5  d-flex align-items-center justify-content-center">
          <h2 className="col-12"><span className="text-warning">MY </span>SKILLS</h2>
        </div>
        <div class="skills row text-warning mt-3">
          <h5 className="col-md-3">HTML</h5>
          <h5 className="col-md-3">CSS</h5>
          <h5 className="col-md-3">JAVASCRIPT</h5>
          <h5 className="col-md-3">BOOTSTRAP</h5>
          </div>
          <div class="skills row text-warning mt-3">
          <h5 className="col-md-3">JQUERY</h5>
          <h5 className="col-md-3">GIT</h5>
          <h5 className="col-md-3">REACT</h5>
          <h5 className="col-md-3">NPM</h5>
          </div>
      </div>
    </div>
  );
}

export default About;
