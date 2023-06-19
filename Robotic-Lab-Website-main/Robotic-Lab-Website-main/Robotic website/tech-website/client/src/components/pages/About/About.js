import React from "react";
import Footer from "../footer/footer";

function About() {
  return (
    <>
      <div id="about-page">
        <h1>About Us</h1>
        <p>
          “BRL is a unique collaboration that harnesses the collective strengths
          of its university partners,
          <br /> and brings together the best expertise from industry and the
          academic community to spearhead
          <br /> Britain’s efforts to be a world leader in modern advanced
          robotics”.
        </p>
        <p>
          David Willetts,
          <br /> Minister of State for Universities and Science
          <br /> 2010 - 2014
        </p>
      </div>

      <div id="about-page2">
        <h3>Who we are</h3>
        <p>
          Bristol Robotics Laboratory (BRL) is the most comprehensive academic
          centre for multi-disciplinary robotics
          <br /> research in the UK. It is a collaborative partnership between
          the University of the West of England (UWE Bristol) and <br />
          the University of Bristol, and home to a vibrant community of over 450
          academics, researchers and industry
          <br />
          practitioners. Together, they are world leaders in current thinking on
          service robotics, intelligent autonomous
          <br /> systems and bio-engineering. An internationally recognised
          Centre of Excellence in Robotics, BRL’s state-of-the-art
          <br /> facilities cover an area of over 4,600 sq. metres (50,000 sq.
          feet).
        </p>
      </div>

      <div id="about-page3"></div>

      <section class="about2">
        <div class="about2-row">
          <div class="about2-left">
            <h2>What we can do for you</h2>
            <h1>Our mission</h1>
            <p>
              The primary mission of BRL is to understand the science,
              engineering and social role of robotics and embedded intelligence.
            </p>
            <p>
              In particular, the key challenges surrounding adaptive robotics,
              namely: dealing with people and their unpredictability,
              unstructured and uncertain environments, and equipping robots for
              flexible roles.
            </p>
            <p>
              BRL is a unique collaboration that harnesses the collective
              strengths of its partners to spearhead Britain’s efforts to be a
              world leader in modern advanced robotics.
            </p>
          </div>
          <div class="about2-right">
            <div class="about2-row">
              <div class="about2-card">
                <box-icon
                  type="logo"
                  name="apple"
                  color="#4CAF50"
                  size="60px"
                ></box-icon>
                <h2>Established Years</h2>
                <p>2006</p>
              </div>
              <div class="about2-card">
                <box-icon
                  type="logo"
                  name="android"
                  color="#4CAF50"
                  size="60px"
                ></box-icon>
                <h2>Research Groups</h2>
                <p>18</p>
              </div>
            </div>
            <div class="about2-row">
              <div class="about2-card">
                <box-icon name="data" color="#4CAF50" size="60px"></box-icon>
                <h2>Total Members</h2>
                <p>450+</p>
              </div>
              <div class="about2-card">
                <box-icon
                  name="line-chart-down"
                  color="#4CAF50"
                  size="60px"
                ></box-icon>
                <h2>Incubator Companies</h2>
                <p>28</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=860&h=550&dpr=1"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Our networks</h2>
              <p>
                BRL maintains strong national and international links with both
                industry and other research institutes and has an enviable track
                record of successful research and innovation. We are involved in
                multiple innovative applications of robotics for commercial and
                industrial exploitation accessed by the Bristol Technology
                Solutions programme, which includes a Technology Business
                Incubator and the Robotics.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://th.bing.com/th/id/R.7f82bfaf066be9c6d5861435b1580ff4?rik=g%2btbZzkI7nbBfQ&pid=ImgRaw&r=0"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Our teaching</h2>
              <p>
                In addition to its core research activities, BRL offers PhD
                level research programmes through its EPSRC funded Centre for
                Doctoral Training in Robotics and Autonomous Systems. The
                Laboratory offers a full range of taught courses at
                undergraduate and postgraduate levels, Masters level research
                programmes and selected internships.In addition, the BRL hosts
                FARSCOPE.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://th.bing.com/th/id/R.2bdafa955e591240037f60eb23052aed?rik=O6KcgABRiXLEeA&pid=ImgRaw&r=0"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Our facilities</h2>
              <p>
                The Laboratory is located in Bristol, South West England. The
                on-site facilities include full mechanical workshops, wet labs,
                rapid prototyping facilities, an ambient assisted living studio,
                flying arena, a 16,000L test pool and 3 Vicon 3D positioning
                systems. The Laboratory also hosts a lecture theatre, seminar
                rooms and a fully equipped video conference suite.
              </p>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
}

export default About;
