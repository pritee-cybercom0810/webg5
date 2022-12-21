import React from 'react'
import {Link} from 'gatsby'
// import { graphql, useStaticQuery } from "gatsby"
import starIcon from '../../assets/images/star-icon.png'
import shape from '../../assets/images/shape/shape1.svg'
import Loadable from '@loadable/component'
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        }
    }
};

// const query = gql`
// {
//     testimonial {
//         subTitle
//         title
//         shortText
//         item {
//             id
//             name
//               feedbackText
//             designation
//               image {
//               id,
//               name,
//               alternativeText,
//               formats,
//               width,
//               height,
//               ext,
//               url,
//               previewUrl,
//               mime,
//               size
//             }
//         }
//     }
// }
// `;

// const query = graphql`
// {
//     strapiTestimonials {
//         subTitle
//         title
//         shortText
//         item {
//             id
//             name
//             image {
//                 childImageSharp {
//                     fluid {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//             feedbackText
//             designation
//         }
//     }
// }
// ` 

const Testimonials = ({Testimonials}) => {
    // Carousel
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    // strapiTestimonials
    // const data = useStaticQuery(query)

    // const { data, loading, error } = useQuery(query)

    // if(loading) {
    //     return <></>
    // }
    // if(error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }

    // const {testimonial: {
    //     subTitle, title, shortText, item
    // }} = data 

    // console.log('Testimonials', Testimonials);
    const {subTitle, title, shortText, item} = Testimonials 
    return (
        <div className="testimonials-area bg-f1f8fb pt-100 pb-70 equal_height_testimonials">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="testimonial" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    {item?.map(list => (
                        <div className="single-testimonials-item" key={list.id}>
                            <div className='d-flex'>
                                <div className='image-part'>
                                     <img
                                        src={list.image?.formats?.small?.url || list.image?.url} 
                                        alt="Client Image" 
                                        className='t-clientImage'
                                    />
                                    </div>
                                <div className='content-part'>
                                    <p className='text-left'>{list.feedbackText}</p>
                                    <div className="client-info">
                                        <div className="d-flex justify-content-start align-items-center">
                                        
                                            <div className="title ml-0">
                                                <h3>{list.name}</h3>
                                                <span>{list.designation}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel> : ''}

                {/* <div className="testimonials-view-btn text-center">
                    <Link to="/testimonials" className="default-btn">
                        <i className="flaticon-view"></i> 
                        Check Out All Reviews <span></span>
                    </Link>
                </div> */}
            </div>

            {/* <div className="shape-img1">
                <img src={shape} alt="testimonial" />
            </div> */}
        </div>
    )
}

export default Testimonials;