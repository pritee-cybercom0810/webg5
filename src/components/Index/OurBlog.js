import React from 'react'
import { Link } from 'gatsby'
import Image from "gatsby-image"
import starIcon from '../../assets/images/star-icon.png'
import user1 from '../../assets/images/user1.jpg'

// import { graphql, useStaticQuery } from "gatsby"
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";

// const query = gql`
// {
//     blogs(sort:"date:desc", limit:6){
//         title
//         slug
//         content
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
//         authorImage{
//             id
//             url
//           }
//         author
//         date
//     }
// }
// `;

// const query = graphql`
//     {
//         all(sort: {fields: date, order: DESC}, limit: 6) {
//             nodes {
//                 title
//                 slug
//                 content
//                 image {
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//                 author
//                 date
//             }
//         }
//     }
// `

const OurBlog = ({OurBlog}) => {

    // const { data, loading, error } = useQuery(query)

    // if(loading) {
    //     return <></>
    // }
    // if(error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }

    // console.log(OurBlog);

    const blogs= OurBlog

    return (
        <section className="blog-area pb-100 pt-100 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="blog" /> 
                        Our Blog
                    </span>
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    {
                        blogs?.slice(0,3).map((blog, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link to={`/blogs/${blog.slug}`}>
                                            <img src={blog?.image?.formats?.small?.url || blog?.image?.url} alt="blog-image"></img>
                                                {/* <Image fluid={blog?.image?.formats?.small?.url || ''} /> */}
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                       {blog?.authorImage?.url && <img src={blog?.authorImage?.url} className="rounded-circle" alt="blog" />}
                                                        { blog.author && <span>{blog.author}</span>}
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> {blog.date}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurBlog