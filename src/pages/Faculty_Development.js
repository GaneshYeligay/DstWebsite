import React from "react";
import "../dist/css/custom.css";

import Faculty from "../dist/img/tab-bar/Faculty.jpg";
import "./Technical-finishing-school.css";
import facul1 from "../dist/img/tab-bar/facul1.png";
import facul2 from "../dist/img/tab-bar/facul2.png";
import facul3 from "../dist/img/tab-bar/facul3.png";
import facul4 from "../dist/img/tab-bar/facul4.png";
import Title from "./common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Faculty_Development = () => {
  return (
    <React.Fragment>
      <Title title="FACULTY DEVELOPMENT PROGRAMS" />
      <div className="FacultyBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Faculty Development</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <section class="sectionBlog">
        <div class="container-fluid page-body product-desc ted-talk">
          <div className="containerGyapBreadcrumb"></div>

          <div
            class="row"
            style={{ paddingRight: "15px", paddingLeft: "15px" }}
          >
            <div class="col-md-7 col-md-offset-1 col-sm-12">
              <div class="blog-full-col">
                <div class="blog-full-img">
                  <img
                    src={Faculty}
                    alt="Faculty Development Programs "
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div class="blog-full-wd-bar">
                    <div class="right-angle"></div>

                    <i
                      class="fa fa-user "
                      aria-hidden="true"
                      style={{ color: "white", fontSize: "14px" }}
                    ></i>
                    <span class="cw"> By </span>
                    <a href="/">
                      <strong>Prashanth Ram</strong>
                    </a>
                  </div>
                </div>
                <p>
                  The Faculty Development program will bring together professors
                  and technical resources in teaching and learning the latest
                  technology. Faculties can be more effective in their teaching
                  process by having practical hands on experience. The main
                  intension of this program is in developing and maintaining
                  professional competences of faculty members.
                </p>
                <p> Faculty Development Programs topics includes:</p>
                <p> 1. Workshops on IOT Concept, </p>
                <p>
                  {" "}
                  2. Digital Signal Processing - Image Processing/Video
                  Processing{" "}
                </p>
                <p> 3. Embedded Systems</p>
                <p style={{ marginBottom: "60px" }}>
                  {" "}
                  4. Robotics System Design
                </p>
                <div class="blog-details-col" style={{ marginBottom: "60px" }}>
                  {/* <!--                             <h3 class="blog-title">Workshops on IOT Concept</h3>--> */}
                  <img
                    src={facul1}
                    alt="Workshops on IOT Concept"
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="blog-details-col" style={{ marginBottom: "60px" }}>
                  {/* <!--<h3 class="blog-title">Digital Signal Processing</h3>--> */}
                  <img
                    src={facul2}
                    alt="Digital Signal Processing"
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="blog-details-col" style={{ marginBottom: "60px" }}>
                  <img
                    src={facul3}
                    alt="Embedded Systems"
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="blog-details-col" style={{ marginBottom: "60px" }}>
                  <img
                    src={facul4}
                    alt="Robotics System Design"
                    style={{ width: "100%" }}
                  />
                </div>

                <p>
                  Let us also have a quick overview of the top 6 highlights of
                  FDP's, and why faculty from across the world works towards it.
                </p>
                <ul class="list-icons">
                  <li>
                    <i class="icon-check-1"></i>Developing skills and preparing
                    students to be ready for industry standards.
                  </li>
                  <li>
                    <i class="icon-check-1"></i>Trying to push students to be on
                    Top all the time.
                  </li>
                  <li>
                    <i class="icon-check-1"></i>Network Network Network -
                    Faculties will be connected to industries and real time
                    projects.
                  </li>
                  <li>
                    <i class="icon-check-1"></i>Finding true interests and
                    Inspiring students.
                  </li>
                  <li>
                    <i class="icon-check-1"></i>Course Redesigning - In some
                    universities, the primary obstacle to student learning may
                    be found in the design of the course itself. Our FDP's
                    invites faculty to rethink about the way their course is
                    structured, to re-assess the assignments that students are
                    submitting.
                  </li>
                  <li>
                    <i class="icon-check-1"></i>Exploring multiple ways -
                    Teaching with Technology: Getting Started. Want to employ
                    new instructional technologies, but not sure where to begin
                    or how to proceed? These workshops recommends a step-by-step
                    approach to latest technologies and offers help in getting
                    started.
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="sidebar-col">
                <div class="categories">
                  <div class="sidebar-title">
                    <h3>Blogs</h3>
                  </div>
                  <hr></hr>
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
      </section>{" "}
    </React.Fragment>
  );
};
export default Faculty_Development;
