import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    WEBSITES: "Websites",
    MOBILE: "Mobile",
    // GRAPHICS: "Graphics",
  };

  const projectsData = [
    {
      title: "Digital Skills",
      projectInfo:
        "An online tech school.",
      client: "Xphiz",
      // technologies: "HTML, CSS, PHP, Java",
      industry: "IT",
      date: "2022",
      url: {
        name: "Xphiz",
        link: "https://xphiz.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/xphiz/",
        twitter: "http://www.twitter.com/xphiz/",
        google: "http://www.google.com/xphiz/",
        instagram: "https://www.instagram.com/xphiz/",
        mail: "",
      },
      thumbImage: "images/projects/xphizpic.png",
      sliderImages: [
        "images/projects/project-1.1.png",
        "images/projects/project-1.2.png",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Strydes Hospital",
      projectInfo:
        "This is a forum designed for hospital patients for them to be able to have acces to their hospital records and datas.",
      client: "Stride Hospital",
      // technologies: "HTML, CSS, PHP, Java",
      industry: "Health",
      date: "2022",
      url: {
        name: "Strydes Hospital",
        link: "https://hospital-frontend-8eii-kv2py363k-empresszinah.vercel.app/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/strydeshospital/",
        twitter: "http://www.twitter.com/strydeshospital/",
        google: "http://www.google.com/strydeshospital/",
        instagram: "https://www.instagram.com/strydeshospital/",
        mail: "",
      },
      thumbImage: "images/projects/Strydes.png",
      sliderImages: [
        "images/projects/project-1.1.png",
        "images/projects/project-1.2.png",
      ],
      categories: [filters.WEBSITES],
    },
    // {
    //   title: "Health Community",
    //   projectInfo:
    //     "This is a forum designed for mothers to discuss everything beneficial to their health, kids, and society.",
    //   client: "Mum Confession",
    //   technologies: "HTML, CSS, PHP, Java",
    //   industry: "Community",
    //   date: "2022",
    //   url: {
    //     name: "Mum Confession",
    //     link: "https://mumconfessions.com/",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/mumconfessions/",
    //     twitter: "http://www.twitter.com/mumconfessions/",
    //     google: "http://www.google.com/mumconfessions/",
    //     instagram: "https://www.instagram.com/mumconfessions/",
    //     mail: "",
    //   },
    //   thumbImage: "images/projects/project-1.png",
    //   sliderImages: [
    //     "images/projects/project-1.1.png",
    //     "images/projects/project-1.2.png",
    //   ],
    //   categories: [filters.WEBSITES],
    // },
    {
      title: "Health Community",
      projectInfo:
        "This is a forum designed for mothers to discuss everything beneficial to their health, kids, and society.",
      client: "Mum Confession",
      technologies: "HTML, CSS, PHP, Java",
      industry: "Community",
      date: "2022",
      url: {
        name: "Mum Confession",
        link: "https://mumconfessions.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/mumconfessions/",
        twitter: "http://www.twitter.com/mumconfessions/",
        google: "http://www.google.com/mumconfessions/",
        instagram: "https://www.instagram.com/mumconfessions/",
        mail: "",
      },
      thumbImage: "images/projects/project-1.png",
      sliderImages: [
        "images/projects/project-1.1.png",
        "images/projects/project-1.2.png",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Real Estate",
      projectInfo:
        "I designed this platform for the marketing and selling of properties of different kinds.",
      client: "Huge Dream",
      technologies: "HTML, CSS3, Javascript, React ",
      industry: "Real Estate",
      date: "2022",
      url: {
        name: "Huge Dream Properties",
        link: "https://hugedreamproperties.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/hugedreamproperties/",
        twitter: "http://www.twitter.com/hugedreamproperties/",
        google: "http://www.google.com/hugedreamproperties/",
        instagram: "http://www.instagram.com/hugedreamproperties/",
        mail: "",
      },
      thumbImage: "images/projects/project-2.png",
      sliderImages: [
        "images/projects/project-2.1.png",
        "images/projects/project-2.png",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Ecommerce",
      projectInfo:
        "This is an Ecommerce website that deals with all kinds of executives' wooden types of furniture and products.",
      client: "Wooxy",
      technologies: "HTML5, CSS3, PHP, Java",
      industry: "Ecommerce",
      date: "2023",
      url: {
        name: "Wooxy",
        link: "https://wooxy.ng/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/wooxy.ng/",
        twitter: "http://www.twitter.com/wooxy.ng/",
        google: "http://www.google.com//wooxy.ng",
        instagram: "http://www.instagram.com//wooxy.ng",
        mail: "",
      },
      thumbImage: "images/projects/project-3.png",
      sliderImages: [
        "images/projects/project-3.1.png",
        "images/projects/project-3.png",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Market Place",
      projectInfo:
        "Coopel Global is a marketplace where people come together to sell and purchase different products of their choice, it also has a category dedicated to learning.",
      client: "Copeel Global",
      technologies: "HTML5, CSS3, PHP, Java",
      industry: "Marketing",
      date: "2023",
      url: {
        name: "Copeel",
        link: "https://copeelglobal.org/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/copeelglobal.org/",
        twitter: "http://www.twitter.com/copeelglobal.org/",
        google: "http://www.google.com/copeelglobal.org/",
        instagram: "http://www.instagram.com/copeelglobal.org/",
        mail: "",
      },
      thumbImage: "images/projects/project-4.png",
      sliderImages: [
        "images/projects/project-4.1.png",
        "images/projects/project-4.2.png",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "App Store",
      projectInfo:
        "I developed this application for a fashion brand. It is an app where fashion products can be ordered conveniently",
      client: "Charmz",
      technologies: "HTML5, CSS3, Javascript, React",
      industry: "Ecommerce",
      date: "2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "",
      },
      thumbImage: "images/projects/project-5.png",
      sliderImages: [
        "images/projects/project-1.png",
        "images/projects/project-5.PNg",
      ],
      categories: [filters.MOBILE],
    },
    {
      title: "Corperate Firm",
      projectInfo:
        "I developed this corporate firm that deals with the law. It is a platform where people interested in the lawful process meet with a lawyer to help them carry out the task.",
      client: "Franklyne Osezua",
      technologies: "HTML5, CSS3, PHP, Java",
      industry: "Law",
      date: "2023",
      url: {
        name: "Legal Work Associates",
        link: "https://legalworksassociates.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/legalworksassociates.com/",
        twitter: "http://www.twitter.com/legalworksassociates.com/",
        google: "http://www.google.com/legalworksassociates.com/",
        instagram: "http://www.instagram.com/legalworksassociates.com/",
        mail: "",
      },
      thumbImage: "images/projects/project-6.png",
      sliderImages: [
        "images/projects/project-6.png",
        "images/projects/project-6.png",
      ],
      categories: [filters.WEBSITES],
    },
    // {
    //   title: "Brand Logo",
    //   projectInfo:
    //     "I designed this logo according to what the client needs for the brand.",
    //   client: "Empress",
    //   technologies: "",
    //   industry: "Branding",
    //   date: "2023",
    //   url: {
    //     name: "Empresszee",
    //     link: "",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "",
    //   },
    //   thumbImage: "images/projects/project-7.jpeg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.GRAPHICS],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
