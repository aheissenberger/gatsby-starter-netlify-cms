import React from "react";

const Reviews = ({ reviews }) => (
  <div className="invesrer-review">
    <h3>See what our Investors saying</h3>
    <div className="review-slide">
      <span className="review-quote">
        <img src="./img/invester-quote.png" alt="image" />
      </span>
      <div className="review-content">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {reviews.map(item => (
              <div className="carousel-item">
                <p>{item.quote}</p>
              </div>
            ))}
          </div>
          <ol className="carousel-indicators">
            {reviews.map(item => (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className
              >
                <a>
                  <span>
                    <img src={item.image} alt="image" />
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
