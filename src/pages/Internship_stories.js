import React from "react";
import "../dist/css/custom.css";
// import TestimonialWidgit from "../util/TestimonialWidgit";
// import Data from "../WebsiteData/Testimonial/Feedback";
import intership from "../dist/img/tab-bar/Internship.jpg";
import "./Technical-finishing-school.css";
import Title from "./common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const InterShip_Stories = () => {
  return (
    <React.Fragment>
      <Title title={"INTERSHIP STORIES"} />
      <div className="IntershipStoryBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">InterShip Stories</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <section class="sectionBlog">
        <div class="container-fluid page-body product-desc  ted-talk">
          <div className="containerGyapBreadcrumb"></div>

          <div class="row">
            <div
              class="col-md-7 col-md-offset-1 col-sm-12"
              style={{ paddingRight: "15px", paddingLeft: "15px" }}
            >
              <div class="blog-full-col">
                <div class="blog-full-img">
                  <img
                    src={intership}
                    alt="Internship stories "
                    style={{
                      width: "100 %",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div class="blog-full-wd-bar">
                    <div class="right-angle"></div>

                    <i
                      class="fa fa-user"
                      aria-hidden="true"
                      style={{ color: "white" }}
                    ></i>
                    <span class="cw"> By </span>
                    <a href="/">
                      <strong>Prashanth Ram</strong>
                    </a>
                  </div>
                </div>
                {/* <!--                        <h3 class="blog-title">Ken Robinson</h3>--> */}
                <p>
                  An internship turning into a job is one of the best and
                  rewarding outcomes of an internship. Not every, but many
                  internships have the possibility of developing into full-time
                  employment. An internship makes the classroom's abstract
                  theories and learned examples concrete by placing the student
                  in a real life work situation with real live co-workers
                  performing actual professional tasks, which the job
                  encompasses.{" "}
                </p>
                <p>
                  As Digital Shark offers the “Super Internship Program (SIP)”
                  for many students, allow me to share 5 views around the theme
                  of internship that has made a huge impact.
                </p>
                <h3 class="blog-title">Story 1</h3>
                <p>
                  Interning at a start-up has many benefits: If you are
                  interested in technology or think you may want to start a
                  company one day, it's a great way to try out your future
                  career path. I credit my college internship at Digital Shark
                  as what started me off on that path.{" "}
                </p>
                <div class="text-right">
                  <span class="blog-title-span">- Neetha (JNTUH)</span>
                </div>
                <h3 class="blog-title">Story 2</h3>
                <p>
                  I undertook an internship during my final year engineering
                  through an organization called Digital Shark Technology. I
                  wanted to do an internship because I felt that it was
                  absolutely essential to be equipped with the people skills,
                  professional competencies and business acumen that top
                  employers look for in graduate job applications.{" "}
                </p>
                <p>
                  I initially heard about the Digital Shark scheme through the
                  Texas Instruments university program service. Through the
                  foundation, I was in a fortunate position to learn technical
                  aspects of development activities. I got internship through
                  three different areas of the business, including corporate
                  communications, technical, and product development.{" "}
                </p>
                <div class="text-right">
                  <span class="blog-title-span">- Prithvi</span>
                </div>
                <h3 class="blog-title">Story 3</h3>
                <p>
                  “I did my internship as a development intern. I am working on
                  improving my technical skills to industrial standards. In
                  addition to that MatLab, process engineering and statistical
                  controls classes are playing important roles in my project to
                  analyze the data and expect the outcomes. My summer 2017
                  internship at Digital Shark Technology has strengthened my
                  engineering skills and helped me gain huge technical
                  experience in the production process.”{" "}
                </p>
                <div class="text-right">
                  <span class="blog-title-span">- Krishna Prasad</span>
                </div>
                <h3 class="blog-title">Story 4</h3>
                <p>
                  “This summer, I completed a 10-week internship with Digital
                  Shark Technology Pvt Ltd in Bangalore. The program started
                  with a training program to familiarize interns with the
                  business and culture. During Base training, I went through
                  customer service training and spent a full day taking customer
                  phone calls. We also got the opportunity to shadow and assist
                  DST Technicians for two days with understanding customers
                  requirement. Once we completed training, we worked on our
                  final projects and presentations for the remainder of the
                  summer. The internship program culminated in visiting few
                  places in and around Bangalore.. This internship has given me
                  great business and technical experience as well as a love for
                  the beauty of Bengaluru!”
                </p>
                <div class="text-right">
                  <span class="blog-title-span">- Amitha G</span>
                </div>
                <h3 class="blog-title">Story 5</h3>
                <p>
                  “Digital Shark Technology has provided me with an exceptional
                  internship experience where I've been able to contribute to
                  actual client projects. I've always wanted to find a job that
                  had the perfect balance of working within the tech space and
                  working with people and consulting at DST has certainly
                  fulfilled these expectations. With a fun company culture and
                  continuous learning, this internship has provided me with
                  exposure and training in the quote-to-cash space as well as
                  knowledge within the Sales force platform that will without a
                  doubt help fuel my career after graduation.”{" "}
                </p>
                <div class="text-right">
                  <span class="blog-title-span">- Robin Joseph</span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-12"
              style={{ paddingRight: "15px", paddingLeft: "15px" }}
            >
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
export default InterShip_Stories;
