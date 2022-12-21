import React from 'react'
import { Link } from 'gatsby'
import ReactWOW from 'react-wow'
// import Image from "gatsby-image"
// import { graphql, useStaticQuery } from "gatsby"
// import { useQuery, gql } from "@apollo/client";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
// import ContentLoader from "react-content-loader"
// const query = gql`
// {
//     defaultBanner {
//         header
//         helpText
//         btnText
//         btnLink
//         image {
//             id,
//             name,
//             alternativeText,
//             formats,
//             width,
//             height,
//             ext,
//             url,
//             previewUrl,
//             mime,
//             size
//         }
//     }
//   }
// `;
const Banner = ({data}) => {
    // const { data, loading, error } = useQuery(query);

    // if (loading) {
    //     return (
    //         <div className="it-services-banner">
    //             <div className="container">
    //                 <div className="row align-items-center">
    //                     <div className="col-lg-6 col-md-12">
    //                         <div className="main-banner-content">
    //                             <ContentLoader 
    //                                 speed={2}
    //                                 width={500}
    //                                 height={55}
    //                                 backgroundColor="#f3f3f3"
    //                                 foregroundColor="#ecebeb"
    //                             >
    //                                 <rect x="0" y="0" rx="3" ry="3" width="500" height="50" /> 
    //                             </ContentLoader>
    //                             <ContentLoader 
    //                                 speed={2}
    //                                 width={500}
    //                                 height={50}
    //                                 backgroundColor="#f3f3f3"
    //                                 foregroundColor="#ecebeb"
    //                             >
    //                                 <rect x="0" y="0" rx="3" ry="3" width="350" height="20" /> 
    //                                 <rect x="0" y="25" rx="3" ry="3" width="150" height="20" /> 
    //                             </ContentLoader>
    //                                 <div className="btn-box">
    //                                 <ContentLoader 
    //                                     speed={2}
    //                                     width={500}
    //                                     height={50}
    //                                     backgroundColor="#F69727"
    //                                     foregroundColor="#ecebeb"
    //                                 >
    //                                     <rect x="0" y="0" rx="3" ry="3" width="145" height="50" /> 
    //                                 </ContentLoader>
    //                                 </div>
    //                         </div>
    //                     </div>

    //                     <div className="col-lg-6 col-md-12">
    //                             <div className="main-banner-image">
    //                                 <ContentLoader 
    //                                     speed={2}
    //                                     width={250}
    //                                     height={250}
    //                                     backgroundColor="#f3f3f3"
    //                                     foregroundColor="#ecebeb"
    //                                 >
    //                                     <rect x="0" y="0" rx="3" ry="3" width="250" height="250" /> 
    //                                 </ContentLoader>
    //                             </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // if (error) {
    //     console.log('error', error)
    //     return <div>Error</div>;
    // }
    // const {defaultBanner: {header, helpText, btnText, btnLink, image}} = data
    const {header, helpText, btnText, btnLink, image} = data
  return (
    <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>{header}</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>{helpText}</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to={btnLink} className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        {btnText} <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <img src={image?.formats?.small?.url || ''} alt="banner" />
                                {/* <Image fluid={image.childImageSharp.fluid} /> */}
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default Banner

