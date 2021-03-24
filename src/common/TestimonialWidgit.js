import React from "react";

const TestimonialWidgit = props => {
  return (
    <div
      className="col-md-4 col-xs-12 col-lg-4 col-sm-12 col-xl-4 classColumn"
      style={{ padding: "0px" }}
    >
      {/* <div class="awc-three-thirtythree-c0 "> */}
      <div class="three-thirtythree-c0 dcomparsys">
        <div>
          <div class="standardpromo section">
            <a
              class="promo-focus"
              href="/us/en/pages/careers/articles/awards-and-recognition.html"
              target="_self"
              data-cq-id="9c68c797"
              data-promoname="Awards and recognition"
              data-promocategory="curated"
              data-promotype="standard"
              data-promocontenttype="article"
              data-contenttype="lifeatdeloitte"
            >
              <div class="standard-promo careers-color">
                <h3 class="tertiary-headline">{props.name}</h3>
                <p class="promo-label">{props.location}</p>
                <div class="page-description-for-promo">{props.data}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="iconbox">
        <i
          className="material-icons"
          style={{ marginTop: "-14px", marginLeft: "-13px" }}
        >
          thumb_up
        </i>
      </div>
      <div className="TestimonialCardDetail">
        <p
          className="dstQuote"
          style={{ marginBottom: "-3rem", marginRight: "30rem" }}
        ></p>
        {props.data}
        <p
          className="dstQuotes"
          style={{ marginBottom: "-4rem", marginRight: "30rem" }}
        ></p>
      </div>
      <div className="TestimonialNamer">
        <p style={{ fontWeight: "600", fontSize: "22px" }}>{props.name}</p>
        <p style={{ fontWeight: "600", fontSize: "15px" }}>{props.location}</p>
      </div>
    */}
    </div>
  );
};
export default TestimonialWidgit;
