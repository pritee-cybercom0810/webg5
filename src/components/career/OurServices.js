import React from 'react'
import Tick from "../../assets/images/career/tick-square.png"

const OurServices = ({OurServices}) => {
    // const { data, loading, error } = useQuery(query)

    // if (loading) {
    //     return <></>
    // }
    // if (error) {
    //     console.error('data', error)
    //     return <>Error</>
    // }

    const {
        title,heading,careerFeatures,tickList,bannerImage
    } = OurServices

    return (
        <React.Fragment>
            {/* Service Left Image Style */}
             {/* <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <Image fluid={servicesOne.image?.formats?.small?.url || servicesOne.image?.url} />
                                <img src={servicesOne.image?.formats?.small?.url || servicesOne.image?.url} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {servicesOne.simpleText}
                                    </span>

                                    <h2>{servicesOne.header}</h2>
                                    <p>{servicesOne.helpText}</p>
                                    <ul className="about-list mb-0">
                                        {servicesOne.services.map(service => (
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
            </div>  */}
             <section className='career-service pt-70'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="about-content career-about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        {title}
                                    </span>
                                    <h1>{heading}</h1>
                                    <ul className='features-list'>
                                        {careerFeatures.map((feature)=><li>
                                            <img src={feature?.image?.url} alt="features"></img>
                                            <h3>{feature.heading}</h3>
                                            <p>{feature.feature}</p>
                                        </li>
                                        )}
                                    </ul>
                                    <ul className='services-list'>
                                        {tickList.map((list)=> <li>
                                            <img src={Tick} alt="tick-icon"></img>
                                            <p>{list.listItem}</p>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='image-part'>
                                <img src={bannerImage?.url} alt="career-about-banner"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 


            {/* End Service Left Image Style */}

            {/* Service Right Image Style */}
            {/* <div className="our-mission-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {servicesTwo.simpleText}
                                    </span>
                                    
                                    <h2>{servicesTwo.header}</h2>
                                    <p>{servicesTwo.helpText}</p>

                                    <ul className="our-mission-list mb-0">
                                        {servicesTwo.services.map(service => (
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
                                <img src={servicesTwo.image?.formats?.small?.url || servicesTwo.image?.url} />
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