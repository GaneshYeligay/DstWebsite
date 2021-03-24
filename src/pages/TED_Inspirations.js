import React from "react";
import "../dist/css/custom.css";

import TedImage1 from "../dist/img/tab-bar/TedImage1.jpeg";
import TedImage2 from "../dist/img/tab-bar/TedImage2.png";
import TedImage3 from "../dist/img/tab-bar/TedImage3.jpeg";
import "./Technical-finishing-school.css";
import Title from "./common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const TED_Inspirations = () => {
  return (
    <React.Fragment>
      <Title title={"INSPIRATION FROM TED TALKS"} />
      <div className="TEDBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">TED Inspiration</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* sectionBlog page-body product-desc */}
      <section class="sectionBlog">
        <div class="container-fluid page-body product-desc ted-talk ">
          <div className="containerGyapBreadcrumb"></div>

          <div class="row">
            <div class="col-md-7 col-md-offset-1 col-sm-12">
              <div class="blog-full-col">
                <div class="blog-full-img">
                  <img
                    src={TedImage1}
                    alt="Inspiration from TED Talks "
                    style={{ width: "100%" }}
                  />
                </div>
                <h3 class="blog-title">Ken Robinson</h3>
                <p>
                  My TED Talks suggestion starts with this video of Sir Ken
                  Robinson - it is amazing the way he conveys the message! Ken
                  Robinson makes an entertaining and profoundly moving case for
                  creating an education system that nurtures (rather than
                  undermines) creativity.
                </p>
                <p class="blog-text">For more details:</p>
                <a
                  href="https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity#t-10038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity#t-10038
                </a>
              </div>

              <div class="blog-details-col">
                <img
                  src={TedImage2}
                  alt="BRENE BROWN"
                  style={{ width: "100%" }}
                />
                <br />
                <br />
                <h3 class="blog-title">BRENE BROWN</h3>
                <p>
                  I have just seen her talking on TED, but I consider her as a
                  mentor.
                </p>
                <p>
                  She delivers a strong message about human connections. “If u
                  can't measure it, it doesn't exist! Feeling Worthy of being
                  connected will connect u forever!!”
                  Courage,Compassion,Connection and Vulnerability Key things in
                  life!
                </p>
                <p class="blog-text">For more details:</p>
                <a
                  href="https://www.ted.com/talks/brene_brown_on_vulnerability?referrer=playlist-11_must_see_ted_talks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.ted.com/talks/brene_brown_on_vulnerability?referrer=playlist-11_must_see_ted_talks
                </a>
              </div>

              <div class="blog-details-col">
                <img
                  src={TedImage3}
                  alt="Amy Cuddy"
                  style={{ width: "100%" }}
                />
                <br />
                <br />
                <h3 class="blog-title">Amy Cuddy </h3>
                <p>
                  Body language affects how others see us, but it may also
                  change how we see ourselves. Social psychologist Amy Cuddy
                  argues that “power posing” - standing in a posture of
                  confidence, even when we don't feel confident - can boost
                  feelings of confidence, and might have an impact on our
                  chances for success - Don't fake it till u do it.. fake it
                  till u become it!! - Do power posing every day for 2 minutes!!
                  - Use power posing before entering into a stressful
                  environment.. it brings out the best in u!! .
                </p>

                <p class="blog-text">For more details:</p>
                <p class="blog-text">
                  <a
                    href="https://www.ted.com/talks/amy_cuddy_your_body_language_shapes_who_you_are?referrer=playlist-11_must_see_ted_talks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.ted.com/talks/amy_cuddy_your_body_language_shapes_who_you_are?referrer=playlist-11_must_see_ted_talks
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="sidebar-col">
                <div class="categories">
                  <div class="sidebar-title">
                    <h3>Blogs</h3>
                  </div>
                  <ul class="clearfix">
                    <li>
                      <i class="far fa-hand-point-right"></i>
                      <a href="internship_blog.php">
                        Internship Stories and Lessons Learned
                      </a>
                    </li>
                    <li>
                      <i class="far fa-hand-point-right"></i>
                      <a href="fdp_blog.php">
                        Faculty Development Program (FDP)
                      </a>
                    </li>
                    <li>
                      <i class="far fa-hand-point-right"></i>
                      <a href="inspiration_talk_blog.php">
                        Inspiration from TED Talks!
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TED_Inspirations;
