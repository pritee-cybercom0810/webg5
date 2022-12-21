import React from 'react'
import {Link} from 'gatsby'
// import { graphql, useStaticQuery } from "gatsby"
import shape from '../../assets/images/shape/circle-shape1.png'

// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";


// const query = gql`
// {
//     startYourProject {
//       images {
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
//       title
//       shortText
//       btnText
//       btnLink
//     }
// }
// `;

// const query = graphql`
// {
//     strapiStartYourProject {
//         images {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         title
//         shortText
//         btnText
//         btnLink
//     }
// }
// ` 

const ProjectStartArea = ({ProjectStartArea}) => {
    // const data = useStaticQuery(query)

    // const { data, loading, error } = useQuery(query)

    // if(loading) {
    //     return <></>
    // }
    // if(error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }
    // const {startYourProject: {
    //     images, title, shortText, btnText, btnLink
    // }} = data 
    const {images, title, shortText, btnText, btnLink} = ProjectStartArea 

    return (
        <div className="project-start-area ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img 
                                src={images?.formats?.small?.url || images?.url} 
                                alt="project" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{title}</h2>
                            <p>{shortText}</p>
                            
                            <Link to={btnLink} className="default-btn">
                                <i className="flaticon-right"></i> 
                                {btnText}
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-shape1">
                <img src={shape} alt="project" />
            </div>
        </div>
    )
}

export default ProjectStartArea;