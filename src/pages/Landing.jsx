import React from "react";
import main from "../assets/images/main.jpg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
           Hello , Forks this website is build for job searching.
          Dedicated to helping you find your dream job. Our platform is designed to connect job seekers with employers and provide a user-friendly experience. We understand the challenges that come with finding the right job, and our mission is to make the process as seamless and efficient as possible. Whether you are just starting your career or looking to take the next step, our website offers a variety of job opportunities and resources to help you succeed.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="JobSter" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
