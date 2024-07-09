// Main.js
import React from 'react';
import basketballImg from './images/basketballImg.png';
import footballImg from './images/footballImg.png';
import motorsportImg from './images/motorsportImg.png';
import volleyballImg from './images/volleyballImg.png';
import horseRacingImg from './images/horseRacingImg.png';
import cyclingImg from './images/cyclingImg.png';
import boxingImg from './images/boxingImg.png'; // Add a boxing image
import hockeyImg from './images/hockeyImg.png'; // Add a hockey image
import badmintonImg from './images/badmintonImg.png'; // Add a badminton image
import authorImg from './images/authorImg.jpeg'; // Add an author image
import footballTableImg from './images/poll.png'; // Add the football table image
import newsletterImage from './images/newsletter_image.png'; // Add the newsletter image

const Main = () => {
  return (
    <div className="main-content">
      <section className="hero" id="home">
        <div className="hero-text">
          <h1>“THE GOAT OF FOOTBALL”</h1>
          <p>
            The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals.
          </p>
          <button className="btn btn-primary">CONTINUE READING</button>
        </div>
      </section>
      <section className="categories" id="sports">
        <h2>Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={basketballImg} alt="Basketball" />
            <p>BASKETBALL</p>
          </div>
          <div className="category-card">
            <img src={footballImg} alt="Football" />
            <p>FOOTBALL</p>
          </div>
          <div className="category-card">
            <img src={motorsportImg} alt="Motorsport" />
            <p>MOTORSPORT</p>
          </div>
          <div className="category-card">
            <img src={volleyballImg} alt="Volleyball" />
            <p>VOLLEYBALL</p>
          </div>
        </div>
      </section>
      <section className="trending-news" id="trending">
        <h2>Trending News</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={horseRacingImg} alt="Horse Racing" />
            <div className="news-content">
              <p className="news-meta">Race98 - 03 June 2023</p>
              <h3 className="news-title">6-Year-Old Horse wins first place at Belmont</h3>
              <p className="news-summary">NEW YORK—A 6-year-old horse, being the youngest in the Oscar championship, has come first place.</p>
            </div>
          </div>
          <div className="news-card">
            <img src={cyclingImg} alt="Cycling" />
            <div className="news-content">
              <p className="news-meta">Jony.Ls - 03 June 2023</p>
              <h3 className="news-title">Savilia Blunk Embraces Longer Season</h3>
              <p className="news-summary">Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some races.</p>
            </div>
          </div>
          <div className="news-card">
            <img src={boxingImg} alt="Boxing" />
            <div className="news-content">
              <p className="news-meta">King.F - 03 June 2023</p>
              <h3 className="news-title">Ryan Garcia is fighting again.</h3>
              <p className="news-summary">Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sports-articles" id="articles">
        <h2>Sports Article</h2>
        <div className="article-cards">
          <div className="article-card">
            <img src={basketballImg} alt="Basketball" className="article-img" />
            <div className="article-content">
              <div className="article-meta">
                <img src={authorImg} alt="Author" className="author-img" />
                <div>
                  <p className="author-name">Abdu Barkhad</p>
                  <p className="article-date">04 June 2023</p>
                </div>
              </div>
              <h3 className="article-title">5 Exercises Basketball Players Should Be Using To Develop Strength</h3>
              <p className="article-summary">This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.</p>
              <div className="article-actions">
                <button className="like-btn"><i className="fa fa-heart"></i></button>
                <button className="comment-btn">COMMENT</button>
              </div>
            </div>
          </div>
          <div className="article-card">
            <img src={hockeyImg} alt="Hockey" className="article-img" />
            <div className="article-content">
              <div className="article-meta">
                <img src={authorImg} alt="Author" className="author-img" />
                <div>
                  <p className="author-name">Sahil Naser</p>
                  <p className="article-date">03 June 2023</p>
                </div>
              </div>
              <h3 className="article-title">Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year</h3>
              <p className="article-summary">The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.</p>
              <div className="article-actions">
                <button className="like-btn"><i class="fa fa-heart"></i></button>
                <button className="comment-btn">COMMENT</button>
              </div>
            </div>
          </div>
          <div className="article-card">
            <img src={badmintonImg} alt="Badminton" className="article-img" />
            <div className="article-content">
              <div className="article-meta">
                <img src={authorImg} alt="Author" className="author-img" />
                <div>
                  <p className="author-name">Tuasif Islam</p>
                  <p className="article-date">01 June 2023</p>
                </div>
              </div>
              <h3 className="article-title">‘Outdoor’ Badminton Gets Support From Local Federation</h3>
              <p className="article-summary">The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.</p>
              <div className="article-actions">
                <button className="like-btn"><i class="fa fa-heart"></i></button>
                <button className="comment-btn">COMMENT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add the table image at the bottom */}
      <section className="football-table">
        <h2>Polls</h2>
        <img src={footballTableImg} alt="Football Table" />
      </section>
      {/* Add the newsletter form at the end */}
      <section className="newsletter" style={{ backgroundImage: `url(${newsletterImage})` }}>
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Main;
