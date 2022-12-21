import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import Image from "gatsby-image"
// import { graphql, useStaticQuery } from "gatsby"
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
// import Features1 from "../../assets/images/career/features-1.png"
// import Features2 from "../../assets/images/career/features-2.png"
// import Features3 from "../../assets/images/career/features-3.png"
// import Features4 from "../../assets/images/career/features-4.png"
// import Banner from "../../assets/images/career/career-about-banner.png"
// import Tick from "../../assets/images/career/tick-square.png"


// const query = gql`
// {
//     servicesOne{
//       simpleText
//       header
//       helpText
//       image {
//               id,
//         name,
//         alternativeText,
//         formats,
//         width,
//         height,
//         ext,
//         url,
//         previewUrl,
//         mime,
//         size
//       }
//       services {
//         id
//         icon
//         services
//       }
//     }
//     servicesTwo {
//       simpleText
//       header
//       helpText
//       image {
//         id,
//         name,
//         alternativeText,
//         formats,
//         width,
//         height,
//         ext,
//         url,
//         previewUrl,
//         mime,
//         size
//       }
//       services {
//         id
//         icon
//         services
//       }
//     }
//   }
// `;

// const query = graphql`
//   {
//     strapiServicesOne {
//         simpleText
//         header
//         helpText
//         image {
//           childImageSharp {
//             fluid {
//                 ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         services {
//           id
//           icon
//           services
//         }
//     }
//     strapiServicesTwo {
//         simpleText
//         header
//         helpText
//         image {
//             childImageSharp {
//               fluid {
//                   ...GatsbyImageSharpFluid
//               }
//             }
//         }
//         services {
//           id
//           icon
//           services
//         }
//     }
//   }
// `

const OurServices = (props) => {
    // const { data, loading, error } = useQuery(query)

    // if (loading) {
    //     return <></>
    // }
    // if (error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }

const {
        servicesOne
    } = props.servicesOne
    const {servicesTwo} = props.servicesTwo
    // const {
    //     servicesOne, servicesTwo
    // } = data
    // console.log(services)
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
             <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <Image fluid={servicesOne?.image?.formats?.small?.url || servicesOne?.image?.url} />
                                <img src={servicesOne?.image?.formats?.small?.url || servicesOne?.image?.url} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {servicesOne?.simpleText}
                                    </span>

                                    <h2>{servicesOne?.header}</h2>
                                    <p>{servicesOne?.helpText}</p>
                                    <ul className="about-list mb-0">
                                        {servicesOne?.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <section className='career-service'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="about-content career-about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        Design & Development
                                    </span>
                                    <h2>Your Life At Cybercom</h2>
                                    <ul className='features-list'>
                                        <li>
                                            <img src={Features1} alt="features"></img>
                                            <h3>200+</h3>
                                            <p>Developers</p>
                                        </li>
                                        <li>
                                            <img src={Features2} alt="features"></img>
                                            <h3>250+</h3>
                                            <p>Customers</p>
                                        </li>
                                        <li>
                                            <img src={Features3} alt="features"></img>
                                            <h3>20+</h3>
                                            <p>Years of experience</p>
                                        </li>
                                        <li>
                                            <img src={Features4} alt="features"></img>
                                            <h3>1000+</h3>
                                            <p>Projects</p>
                                        </li>
                                    </ul>
                                    <ul className='services-list'>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Excellent Office Infrastructure</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Best in Industry Training</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Friendly Working Environment</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Latest Technological Growth</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Flexible Timings</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Great Learning & Growing Opportunity</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>5 Days Working</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Reward Programs</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Hybrid Culture</p>
                                        </li>
                                        <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>Performance Bonus</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='image-part'>
                                <img src={Banner} alt="career-about-banner"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* End Service Left Image Style */}

            {/* Service Right Image Style */}
            {/* <div className="our-mission-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {servicesTwo?.simpleText}
                                    </span>
                                    
                                    <h2>{servicesTwo?.header}</h2>
                                    <p>{servicesTwo?.helpText}</p>

                                    <ul className="our-mission-list mb-0">
                                        {servicesTwo?.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <img src={servicesTwo?.image?.formats?.small?.url || servicesTwo?.image?.url} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default OurServices;