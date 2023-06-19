import React from "react";
import Footer from "../footer/footer";

function Home() {
  return (
    <>
      <div className="container-home" id="home-content">
        <div>
          <h1 id="home-title">Bristol Robotics Laboratory</h1>

          <p id="sub-title">
            Bristol Robotics Laboratory (BRL) is the most comprehensive academic
            centre for multi-disciplinary robotics research in the UK.
            <br /> It is a collaborative partnership between the University of
            the West of England (UWE Bristol) and the University of Bristol.
          </p>

          <a href="/contact">
            <button className="button-home" type="submit">
              Let's Talk
            </button>
          </a>
        </div>
      </div>

      <section class="about">
        <div class="home-row">
          <div class="about-left">
            <h2>Fintech is all about excellence in the world of business</h2>
            <img
              id="image1-home"
              src="https://images.pexels.com/photos/12499181/pexels-photo-12499181.jpeg?auto=compress&cs=tinysrgb&w=3260&h=1250&dpr=1"
              alt=""
            />
          </div>
          <div class="about-middle">
            <h2>Our History</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              officiis quis omnis, cum culpa nisi!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              officiis quis omm officiis quis omnis, cum culpa nisi!
            </p>
            <a href="/blog" class="btn">
              Read More
            </a>
          </div>
          <div class="about-right">
            <h2>Vision & Mission</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              officiis quis omnis, cum culpa nisi!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              officiis quis omm officiis quis omnis, cum culpa nisi!
            </p>
            <a href="/blog" class="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <div className="home-back-image1"></div>

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
              <h2>Business engagement</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="/blog" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Research areas</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="/blog" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Feature Mission</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="/blog" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>

      <div className="home-back-image2"></div>

      <section class="about">
        <div class="home-row">
          <div class="about-middle">
            <h2>Who we are</h2>
            <p>
              Bristol Robotics Laboratory (BRL) is the most comprehensive
              academic centre for multi-disciplinary robotics research in the
              UK.
            </p>

            <p>
              It is a collaborative partnership between the University of the
              West of England (UWE Bristol) and the University of Bristol, and
              home to a vibrant community of over 450 academics, researchers and
              industry practitioners.
            </p>
          </div>

          <div class="about-left">
            <img
              className="image2-home"
              src="https://lirp.cdn-website.com/4eb3016f/dms3rep/multi/opt/BRL%2BAboutUs-be7a7192-325w.jpg"
              alt=""
            />
          </div>
          <div class="about-right">
            <h2>What we do</h2>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
