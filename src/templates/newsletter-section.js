import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const NewsletterSectionTemplate = ({
  title1,
  title2,
  placeholder,
  label
}) => {
  return (
    <section id="newsletter" className="ico-team">
      <div className="news-letter">
        <div className="container">
          <div className="news-letter__block">
            <div className="block-inner">
              <p>{title1}</p>
              <h3>{title1}</h3>
              <div className="news-feild">
                <form
                  action="https://conda.us7.list-manage.com/subscribe/post?u=7756e216dd2606870dfb053c2&id=7c86d50a4e"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="c12 c6-lg mx-auto validate text-center"
                  target="_blank"
                  noValidate
                >
                  <div>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="form-control"
                      placeholder={placeholder}
                      id="mce-EMAIL"
                      required=""
                    />

                    <input
                      type="submit"
                      value={label}
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="btn btn-success"
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_7756e216dd2606870dfb053c2_7c86d50a4e"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <div class="textwidget custom-html-widget"><!-- Begin MailChimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>

// <div id="ico-conda-subscribe" class="row d-flex flex-wrap">
// 	<form action="https://conda.us7.list-manage.com/subscribe/post?u=7756e216dd2606870dfb053c2&amp;id=7c86d50a4e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="c12 c6-lg mx-auto validate text-center" target="_blank" novalidate="">
// 		<h3 class="mb-3"><label for="mce-EMAIL">All news &amp; updates about our upcoming ICO</label></h3>
// 		<div id="mc_embed_signup_scroll" class="d-flex w100 align-items-stretch">

// 			<input type="email" value="" name="EMAIL" class="email mr-3" id="mce-EMAIL" placeholder="Your email address" required="">
// 			<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
// 			<div style="position: absolute; left: -5000px;" aria-hidden="true">
// 				<input type="text" name="b_7756e216dd2606870dfb053c2_7c86d50a4e" tabindex="-1" value="">
// 			</div>
// 		    <div class="clear">
// 		    	<input type="submit" value="Notify me" name="subscribe" id="mc-embedded-subscribe" class="i-btn i-btn-lg i-btn-secondary h100">
// 		    </div>
// 		   </div>
// 	<div></div></form>
// </div>
// <!--End mc_embed_signup--></div>
