import React from "react";
import investerquoteImage from '../img/invester-quote.png'

const Reviews = ({ reviews }) => (
  <div className="invesrer-review">
    <h3>See what our Investors saying</h3>
    <div className="review-slide">
      <span className="review-quote">
        <img src={investerquoteImage} alt="image" />
      </span>
      <div className="review-content">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {reviews.map( (item,index) => (
              <div className={index===0?"carousel-item active":"carousel-item"} >
                <p>{item.quote}</p>
              </div>
            ))}
          </div>
          <ol className="carousel-indicators">
            {reviews.map( (item,index) => (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index===0?"active":null}
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
