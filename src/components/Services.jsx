import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Design",
      desc: "I create a successful online presence, as it can help to attract and retain visitors, build credibility, and drive conversions.",
      icon: "fas fa-palette",
    },
    {
      name: "Web Development",
      desc: "As a professional web developer, I specialize in building responsive web applications and websites. I use programming languages, such as HTML, CSS, Reactjs and JavaScript, to create and maintain websites that are functional, user-friendly, and visually appealing.",
      icon: "fas fa-desktop",
    },
    {
      name: "App Design & Develop",
      desc: "I create software applications for mobile devices such as smartphones and tablets. The process typically involves multiple stages, including ideation, design, development, testing, and deployment.",
      icon: "fas fa-tablet",
    },
    {
      name: "Graphic Design",
      desc: "As a professional graphic designer I create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers. I  work on a variety of design projects, including logos, websites, advertisements, product packaging, and magazines.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "SEO Marketing",
      desc: "I help in optimizing a website or online content to rank higher in search engine results pages (SERPs) for specific keywords and phrases. My goal is to improve the quantity and quality of traffic to a website from organic search results.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Content Writing",
      desc: "As a content writer, my primary responsibility is to create written material that engages and informs an audience. This material can take many forms, including articles, blog posts, website copy, social media posts, product descriptions, and more.",
      icon: "fas fa-pen",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
