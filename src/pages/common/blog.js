import React from "react";
import intership from "../../dist/img/tab-bar/Internship.jpg";
import Faculty from "../../dist/img/tab-bar/OurBlog_2.png";
import Inspiration from "../../dist/img/tab-bar/OurBlog_3.jpg";
import Card from "./Card";

const Blog = () => {
  const titleStyle1 = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "19px",
    fontWeight: "600",
    textAlign: "left",
    padding: "10px",
    marginTop: "-50px",
    lineHeight: "1",
  };
  const titleStyle2 = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "19px",
    fontWeight: "600",
    textAlign: "left",
    padding: "10px",
    // marginBottom: "27px",
    marginTop: "-50px",
    lineHeight: "1",
  };
  const titleStyle3 = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "19px",
    fontWeight: "600",
    textAlign: "left",
    padding: "10px",
    marginBottom: "22px",
    marginTop: "-50px",
    lineHeight: "1",
  };

  return (
    <React.Fragment>
      <section className="blogArea">
        <div className="container-fluid">
          <div className="container text-center" style={{ height: "85px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div className="sectionTitle">
                <h2>OUR BLOG</h2>
                <p className="paraStyle">
                  This is a blog talking about making technology work for you,
                  instead of making you work for technology.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 fw-600">
              <Card
                title="INTERNSHIP STORIES AND LESSONS LEARNED  "
                img={intership}
                height={"220px"}
                style={titleStyle1}
                cardArea="cardArea_blog"
                LinkTo={"/Intership_Stories"}
                textOnImage="27 JANUARY, 2018"
                cardDataStyle="cardDataStyle"
                data={
                  <p
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      textAlign: "justify",
                    }}
                  >
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{
                        paddingRight: "5px",
                      }}
                    ></i>
                    By Prashanth Ram
                    <br />
                    <br />
                    An internship turning into a job is one of the best and
                    rewarding outcomes of an internship. Not every, but many
                    internships have the possibility of
                  </p>
                }
                btlLbl="Read More"
                btnStyle={{
                  padding: "10px 20px",
                  background: "#015e9e",
                  color: "white",
                  position: "relative",
                  borderRadius: "0px",
                  border: "1px solid #015e9e",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "17px",
                    lineHeight: "27px",
                    textAlign: "justify",
                  }}
                >
                  <i
                    className="fa fa-user"
                    aria-hidden="true"
                    style={{
                      paddingRight: "5px",
                    }}
                  ></i>
                  By Prashanth Ram
                  <br />
                  <br />
                  An internship turning into a job is one of the best and
                  rewarding outcomes of an internship. Not every, but many
                  internships have the possibility of
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 fw-600">
              <Card
                title={<span>FACULTY DEVELOPMENT PROGRAM (FDP)</span>}
                img={Faculty}
                height={"220px"}
                style={titleStyle2}
                cardArea="cardArea_blog"
                LinkTo={"/Faculty_Development"}
                textOnImage="8 FEBRUARY, 2018"
                cardDataStyle="cardDataStyle"
                data={
                  <p
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      textAlign: "justify",
                    }}
                  >
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{
                        paddingRight: "5px",
                      }}
                    ></i>
                    By Prashanth Ram
                    <br />
                    <br />
                    The Faculty Development program will bring together
                    professors and technical resources in teaching and learning
                    the latest technology.
                  </p>
                }
                btlLbl="Read More"
                btnStyle={{
                  padding: "10px 20px",
                  background: "#015e9e",
                  color: "white",
                  position: "relative",
                  borderRadius: "0px",
                  border: "1px solid #015e9e",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              ></Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 fw-600">
              <Card
                title={<span>INSPIRATION FROM TED TALKS!</span>}
                img={Inspiration}
                height={"220px"}
                style={titleStyle3}
                // cardButtonPosition="cardButtonPosition"
                cardDataStyle="cardDataStyle"
                LinkTo={"/TED_Inspirations"}
                textOnImage="30 MARCH, 2018"
                cardArea="cardArea_blog"
                data={
                  <p
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      textAlign: "justify",
                    }}
                  >
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{
                        paddingRight: "5px",
                      }}
                    ></i>
                    By Prashanth Ram
                    <br />
                    <br />
                    My TED Talks suggestion starts with this video of Sir Ken
                    Robinson - it is amazing the way he conveys the message!
                  </p>
                }
                btlLbl="Read More"
                btnStyle={{
                  padding: "10px 20px",
                  background: "#015e9e",
                  color: "white",
                  position: "relative",
                  borderRadius: "0px",
                  border: "1px solid #015e9e",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              ></Card>
            </div>
          </div>
        </div>
      </section>
      {/*    <Contactbar /> */}
    </React.Fragment>
  );
};
export default Blog;
