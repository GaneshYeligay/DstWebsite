import React from "react";
import radium from "radium";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump"; // Importing Zoom effect
const Module = prps => {
  // let liStyle = { float: "left" };
  const scrollTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  return (
    <Jump bottom>
     
      <div className="smallTabBar-container">
      {/* <div className="feedback">
       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">feedback</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
</div> */}
        <ul
          className="smallTabBar"
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden"
          }}
        >
          <li>
            <Link to="/ContactUs" onClick={scrollTop}>
              <i className="material-icons">supervisor_account</i>
              <span>Contact</span>
              
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={scrollTop}>
              <i className="material-icons">help</i>
              <span>AboutUs</span>
            </Link>
          </li>
          <li>
            <a
              href="http://www.twitter.com/Digitalshark_14?s=09"
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: "0.2rem" }}
            >
              <i
                className="fab fa-twitter-square"
                area-hidden="true"
                style={{ fontSize: "2.2rem" }}
              ></i>
              <span>twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/digitalsharktechs"
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: "0.2rem" }}
            >
              <i
                className="fab fa-facebook-square"
                area-hidden="true"
                style={{ fontSize: "2.2rem" }}
              ></i>
              <span>facebook</span>
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/company/digitalsharktechnology"
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: "0.2rem" }}
            >
              <i
                className="fab fa-linkedin"
                area-hidden="true"
                style={{ fontSize: "2.2rem" }}
              ></i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="http://www.instagram.com/digital.shark_technology/"
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: "0.2rem" }}
            >
              <i
                className="fab fa-instagram"
                area-hidden="true"
                style={{ fontSize: "2.2rem" }}
              ></i>
              <span>Instagram</span>
            </a>
          </li>
         
        </ul>
        {/* <div id="feedback-main">
  <div id="feedback-div">
    <form action="contact.php" method="post" class="form" id="feedback-form1" name="form1" enctype="multipart/form-data">

      <p class="name">
        <input name="name" type="name" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" required placeholder="Name" id="feedback-name" />
      </p>

      <p class="email">
        <input name="email" type="email" class="validate[required,custom[email]] feedback-input" id="feedback-email" placeholder="Email" required />
      </p>

      <p class="text">
        <textarea name="comment" type="comment" class="validate[required,length[6,300]] feedback-input" id="feedback-comment" required placeholder="Hey, I really love the site but I believe that you could incorporate some ..... and also get rid of the ...... on the section."></textarea>
      </p>

      <div class="feedback-submit">
        <input type="submit" value="SEND" id="feedback-button-blue" />
        <div class="feedback-ease"></div>
      </div>
    </form>
  </div>
</div>

<button id="popup" class="feedback-button" onclick="toggle_visibility()">Feedback</button>
<script src="_include/js/feedback.js"></script> */}

              {/* <div id="feedback">
			<a href="#popup1">Quick Enquiry</a>
		</div>
    <div id="popup1" class="overlay">
    <div class="popup">
    <div class="div1" style="background:#fff">
    <a class="close" href="#">×</a>
    <div class="content" id="quickenquire">
    <h3 style="text-align:center">Send Enquiry</h3>
    <form action="#">
    <label for="name">Name</label>
    <input type="text" id="name" name="name"></input>
    <label for="email">Email Id</label>
    <input type="email" id="email" name="email"></input>
    <label for="comment">Your Message</label>
   <textarea></textarea>
   <label for="contact">Contact No</label>
   <input type="text" id="contact" name="contact"></input>
   <label for="country">Country</label>
   <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    <input type="submit" value="Submit"></input>
    </form>
    </div>
    </div>
    </div>
    </div> */}
      </div>
      
    </Jump>
    //   function toggle_visibility() {
    //     var e = document.getElementById('feedback-main');
    //     if(e.style.display == 'block')
    //        e.style.display = 'none';
    //     else
    //        e.style.display = 'block';
    //  }
  );
};

export default radium(Module);
