import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="titl">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="titl">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="titl">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="titl">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>GigGenius Business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience pakced with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore GigGenius Business</button>
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={1}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
