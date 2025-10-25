import { HeadLineWrapper, PrivacyContainer } from "./privacy-policy";

import Footer from "../components/Footer";
import Image from "next/image";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeadLineWrapper>
        <Image
          src="/img/legal-terms-img.jpg"
          alt="headline image"
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="content-wrapper">
          <h1>Executive Summary</h1>
        </div>
      </HeadLineWrapper>
      <SummaryContainer>
        <div className="content-wrapper">
          <p>
            Rhema Christian Ministries of Canada Inc. (Rhema) is a registered charitable and not-for-profit organization
            located in Toronto, Canada, with a mandate to Change & Affect Lives through the enhancement and improvement
            of the spiritual, social, and economic climate of the city of Toronto and ultimately the country of Canada.
            Established in the fall of 1999 by Orim M. Meikle, the organization has touched the lives of thousands from
            a variety of social and ethnic backgrounds within the Greater Toronto Area, across the country and around
            the globe.{" "}
          </p>
          <p>
            Unique to Rhema is its comprehensive approach to modern-day living. Coining the contemporary term holistic
            living, Rhema is incorporating all aspects of living into one essential organization. These services are
            dedicated to the promotion of physical well–being, spiritual well–being, and the economic empowerment of the
            individual with the visionary goal of “empowering people to live better lives.”{" "}
          </p>
          <p>
            Through the expansion plans contemplated herein, Rhema is seeking to strategically position itself to supply
            the demands of today’s generation for wholesome work, commercial, entertainment and residential
            environments. The organization’s rapid growth and appeal in its relatively short history have created the
            need for the development of a community campus. This campus includes a multi-purpose/multi-use conference
            center complete with music and television production facilities, educational and meeting rooms, catering,
            and event facilities. Multiple wings within this facility will provide services to the many children and
            youth who have come to call Rhema their community, recreational and educational center. This same facility
            will also house corporate and administrative head offices for the day-to-day activities of the organization.{" "}
          </p>
          <p>
            In keeping with its mission to provide products and services which meet people at their point of need, Rhema
            seeks to construct a Community Life Center. This state-of-the-art center is designed to address the
            recreational and social needs of our local community. Through innovative programming and activities, the
            center aims to touch many lives by creating the necessary balance between spiritual and social development,
            while providing a necessary outlet for thousands of families that are seeking recreation and relaxation in a
            safe and wholesome environment.{" "}
          </p>
          <p>
            Educational development is a significant component of Rhema’s message of holistic empowerment. As such, it
            is seeking to develop leading-edge educational facilities ranging from daycare through to a life-long
            learning campus. By pursuing and providing academic excellence through facilities such as The King’s College
            Preparatory School, The School for the Performing Arts, The Training & Development Centre, and much more,
            this phase of Rhema’s development will serve as a bridge for those desirous of educational excellence yet
            are unable to carry the astronomical costs often associated with such learning. Within these institutions,
            students from every walk and age of life will be able to discover their life’s purpose and true destiny.{" "}
          </p>
          <p>
            To address the need for affordable health care, Rhema is seeking to develop a World Healing Center, complete
            with hospital-like facilities, a rehabilitation center and counselling services. This facility is designed
            to address the needs of the infirm, those who have been incarcerated and are seeking to be reintegrated into
            society, along with those who are searching for the encouragement and direction which comes with
            professional and empathetic counsel. With a strong focus on healing and rehabilitation, the Center aims to
            procure wholeness for all who access its services.{" "}
          </p>
          <p>
            The final phase of the Rhema development will address affordable housing for families and the elderly within
            the community. With a passion to serve the elderly, Rhema will endeavour to provide housing for senior
            citizens through complexes which provide the best in care and quality for those entering their golden years.
            Rhema believes that retirement living complexes should be state-of-the-art facilities designed to serve the
            elderly with excellence, dignity, and care.{" "}
          </p>
          <p>
            With the development of these facilities, coupled with their current growth projections, Rhema will be
            positioned to affect the lives of many in the coming years. We believe that the services provided through
            the various facilities will ultimately produce the best quality of life for those who are searching for true
            meaning in life.{" "}
          </p>
          <p>
            The entire Project is estimated at a cost of approximately $1 billion and will be developed in three (3)
            phases:{" "}
          </p>
          Phase I: Community Development: Building Strong Communities
          <ul>
            <li>The Conference Centre </li>
            <li>The Community Life Centre</li>
            <li>The Centre for Healing & Wellness </li>
          </ul>
          Phase II: Educational Development: Equipping Generations
          <ul>
            <li>King’s College Preparatory School</li>
            <li>The Life-Long Learning Centre </li>
            <li>The Training & Development Centre </li>
            <li>The Botanical Gardens & Museum of Arts </li>
          </ul>
          Phase III: Economic Development: Creating Legacy
          <ul>
            <li>The Centre for Retail Services </li>
            <li>The Community Living Centre </li>
            <li>The Senior’s Living Centre </li>
          </ul>
        </div>
      </SummaryContainer>
      <Footer />
    </>
  );
};

export const SummaryContainer = styled(PrivacyContainer)`
  padding: 2rem 0;
  word-wrap: break-word;

  .content-wrapper {
    width: 78rem;
    max-width: 90vw;

    a {
      color: var(--blue);
    }

    p,
    ol,
    ul {
      margin-bottom: 1rem;
    }
    li {
      margin-left: 1rem;
    }
  }
`;

export default PrivacyPolicy;
