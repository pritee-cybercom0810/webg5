import React from 'react'
import {Link} from 'gatsby'
// import { graphql, useStaticQuery } from "gatsby"
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";

// const query = gql`
// {
//     solution {
//       simpleText
//       headerText
//       helpText
//       homeBannerText
//       homeBannerText2
//     }
//     serviceSolutions(sort:"sort:asc"){
//       icon
//       title
//       shortText
//       slug
//       iconImage {
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
//     }
//     }
//   }
// `;
const OurSolutions = ({data,serviceSolutions}) => {
    // const { data, loading, error } = useQuery(query)

    // if(loading) {
    //     return <></>
    // }
    // if(error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }


    const {
        headerText,homeBannerText,homeBannerText2,
        
    } = data

    const solutions = serviceSolutions

    return (
        <section className="solutions-area pb-70">
            
            <div className="container">
            
                <div className="section-title">
                
                    {/* <span className="sub-title">
                        <img src={starIcon} alt="star" /> 
                        {simpleText}
                    </span> */}
                    <h2>{headerText}</h2>
                    <p className="manageText">{homeBannerText}</p>
            <p className="manageText">{homeBannerText2}</p>
                    {/* <p>{helpText}</p> */}
                </div>

                <div className="row">
                    {solutions.slice(0,4).map((solution, idx) => (
                        <div className="col-lg-3 col-sm-6" key={idx}>
                            <div className="single-solutions-box adjustBox">
                                <div className="icon">
                                    <i>
                                        <img src={solution.iconImage?.formats?.small?.url || solution.iconImage?.url} alt="featureImage"></img>
                                        
                                    </i>
                                </div>
                                <h3>
                                    <Link to={`/solution/${solution.slug}`}>
                                        {solution.title}
                                    </Link>
                                </h3>
                                <p>{solution.shortText}</p>
                                {/* <Link to={`/solution/${solution.slug}`} className="view-details-btn">
                                    View Details
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurSolutions