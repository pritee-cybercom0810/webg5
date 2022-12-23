import React from "react";
import Footer from "../components/App/Footer";
import Layout from "../components/App/Layout";
import CurrentOpening from "../components/career/CurrentOpening";
import Feedback from "../components/career/Feedback";
import HiringProcess from "../components/career/HiringProcess";
import OurIntro from "../components/career/OurIntro";
import OurServices from "../components/career/OurServices";
import PageBanner from "../components/career/PageBanner";
import PhotoGallery from "../components/career/PhotoGallery";

const career = ({ serverData }) => {
  return (
    <Layout pageName="career">
      <PageBanner />
      <OurServices OurServices={serverData.OurServices} />
      <OurIntro OurIntro={serverData.OurIntro} />
      <HiringProcess HiringProcess={serverData.HiringProcess} />
      <CurrentOpening CurrentOpening={serverData.CurrentOpening} />
      <PhotoGallery PhotoGallery={serverData.PhotoGallery}/>
      <Feedback Feedback={serverData.Feedback}/>
      <Footer footer={serverData.footer} />
    </Layout >
  );
};

export async function getServerData() {
  try {
    const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
    const OurServices = await fetch(
      `${process.env.GATSBY_API_URL}career-section-1`
    );
    const OurIntro = await fetch(
      `${process.env.GATSBY_API_URL}career-section-2`
    );
    const HiringProcess = await fetch(
      `${process.env.GATSBY_API_URL}career-section-3`
    );
    const CurrentOpening = await fetch(
      `${process.env.GATSBY_API_URL}career-section-3`
    );
    const PhotoGallery = await fetch(
      `${process.env.GATSBY_API_URL}career-photo-gallary`
    );
    const Feedback = await fetch(
      `${process.env.GATSBY_API_URL}career-employe-feedback`
    );
    return {
      props: {
        footer: await footer.json(),
        OurServices: await OurServices.json(),
        OurIntro: await OurIntro.json(),
        HiringProcess: await HiringProcess.json(),
        CurrentOpening: await CurrentOpening.json(),
        PhotoGallery:await PhotoGallery.json(),
        Feedback:await Feedback.json()
      },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
export const Head = () => <title>Career Page</title>;
export default career;
