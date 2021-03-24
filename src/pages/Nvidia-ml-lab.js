import React from "react";
import Card from "./common/Card";
import radium from "radium";
import Nvidia1 from "../dist/img/Nvidia_lab/Nvidia1.jpg";
import Nvidia2 from "../dist/img/Nvidia_lab/Nvidia2.jpg";
import Nvidia3 from "../dist/img/Nvidia_lab/Nvidia3.jpg";
import Nvidia_jetson from "../dist/img/tab-bar/jetson.png";
import Title from "./common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const DstInnovationLab = () => {
  let containerBody = {
    height: "auto",
    backgroundColor: "#fff",
    marginTop: "10rem",
    marginBottom: "3rem",
  };

  return (
    <React.Fragment>
      <Title
        title="Rigol"
        img={
          "http://pluspng.com/img-png/nvidia-png-nvidia-yeni-c-kacak-olan-oyunlar-icin-yeni-game-ready-suruculerini-yay-nlad-1000.png"
        }
        imgStyle={{ marginTop: "9rem", height: "10rem" }}
      />
      <div className="NvidiaBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Nvidia</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div
        className="container-fluid page-body"
        style={{
          paddingRight: "15px",
          "@media screen and (min-width:900px)": { marginTop: "-6%" },
        }}
      >
        <div className="container sdp-body" style={containerBody}>
          {/*  data start --*/}
          <div className="col-xm-12  col-sm-12 col-md-4   col-lg-4 col-xl-4 colCardStyle">
            <Card
              title="i AM ai"
              cardArea="cardArea_NvidiaLab"
              img={Nvidia1}
              btlLbl="Read More"
              height={"158px"}
              cardDataStyle="cardDataStyleNvidiaLabs"
              cardButtonPosition="cardButtonPosition2"
            >
              <span>
                AI is a living, ever evolving entity that brings about change
                across industries around the globe. As it evolves, so do we all.
                From the visionaries, healers, and navigators to the creators,
                protectors, and teachers. It’s what drives us today. And what
                comes next.
                {/*  tools, labs, and teaching materials so students can learn the
                latest technology in the classrooms and labs. From teaching
                materials to design projects, our selection of advanced analog
                and embedded processing technologies from the best products in
                the market, we fuel the passions of students and educators in
                university labs across India. */}
              </span>
            </Card>
          </div>

          <div className="col-xm-12  col-sm-12 col-md-4   col-lg-4 col-xl-4 colCardStyle">
            <Card
              title="NVIDIA DGX Systems"
              cardArea="cardArea_NvidiaLab"
              img={Nvidia2}
              height={"158px"}
              btlLbl="Read More"
              cardDataStyle="cardDataStyleNvidiaLabs"
              cardButtonPosition="cardButtonPosition2"
              LinkTo="/Nvidia_DGX_Stations"
            >
              <span>
                Developed to meet the demands of AI and analytics, NVIDIA® DGX™
                Systems are built on the revolutionary NVIDIA Volta™ GPU
                platform. Combined with innovative GPU-optimized software and
                simplified management tools,...
              </span>
            </Card>
          </div>

          <div className="col-xm-12  col-sm-12 col-md-4   col-lg-4 col-xl-4 colCardStyle">
            <Card
              title="Deep Learning Softwares"
              cardArea="cardArea_NvidiaLab"
              img={Nvidia3}
              height={"158px"}
              btlLbl="Read More"
              cardDataStyle="cardDataStyleNvidiaLabs"
              cardButtonPosition="cardButtonPosition2"
              LinkTo="/Nvidia_Deep_Learning_sw"
            >
              <div>
                <p className="text-justify">
                  The NVIDIA Deep Learning GPU Training System (DIGITS) puts the
                  power of Deep Learning into the hands of budding Engineers.
                  DIGITS can be used to rapidly train the highly accurate deep
                  neural network (DNNs) for image classification,...
                  {/* , conducting
                  workshops, seminars, faculty development programs and
                  knowledge exchanges through conferences, etc. */}
                </p>
                {/* <p class="text-justify">
                  Digital Shark had partnered with Texas Instruments for TI
                  University Program till 2018. Currently we have partnered with
                  NVIDIA, Rigol & Simcom and we are together contributing to
                  nurturing and fostering a strong collaborative relationship
                  with the Universities. This has resulted in exemplary outcome
                  for the benefit of Indian engineering community as a whole.
                </p> */}
              </div>
            </Card>
          </div>

          <div className="col-xm-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 colCardStyle">
            <Card
              title="NVIDIA JETSON "
              cardArea="cardArea_NvidiaLab"
              img={Nvidia_jetson}
              height={"158px"}
              btlLbl="Read More"
              cardDataStyle="cardDataStyleNvidiaLabs"
              cardButtonPosition="cardButtonPosition2"
              LinkTo="/nvidia"
            >
              <span>
                NVIDIA Jetson systems provide the performance and power
                efficiency to run autonomous machines software, faster and with
                less power. Each is a complete System-on-Module (SOM), with CPU,
                GPU, PMIC, DRAM, and flash storage—saving development time
              </span>
            </Card>
          </div>

          {/*  data end --*/}
        </div>
      </div>
    </React.Fragment>
  );
};

export default radium(DstInnovationLab);
