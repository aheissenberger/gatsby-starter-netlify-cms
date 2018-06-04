//const util = require("util");

exports.handler = (event, context, callback) => {
  //console.log(util.inspect(event, false, null));
  //console.log(util.inspect(context, false, null));

  const request = event.Records[0].cf.request;
  const uri = request.uri;

  // Redirect some popular search results to their new pages
  const redirects = [
    { test: /^\/whitelist\/?$/g, targetURI: "/i/whitelist" },
    { test: /^\/order\/?$/g, targetURI: "/i/order" },
    { test: /^\/f\/payment-method$/g, targetURI: "/i/whitelist" },
    { test: /^\/f\/?$/g, targetURI: "/i/whitelist" },
    { test: /^\/f\/user\/login$/g, targetURI: "/i/login" },
    { test: /^\/f\/user\/register$/g, targetURI: "/i/whitelist" },
    { test: /^\/dashboard\/?$/g, targetURI: "/i/dashboard" },
    { test: /^\/whitepaper\/?$/g, targetURI: "/img/conda-white-paper.pdf" },
    { test: /^\/lightpaper\/?$/g, targetURI: "/img/CONDA-Light-paper.pdf" },
    { test: /^\/pitchdeck\/?$/g, targetURI: "/img/CONDA-pitchdeck.pdf" },
    { test: /^\/exchangerate\/?$/g, targetURI: "/icoinfo" },
    { test: /^\/join-pre-sale\/?$/g, targetURI: "/icoinfo" },
    { test: /^\/bounty\/?$/g, targetURI: "/crwd-network-bounty-program/" },
    { test: /^\/referral\/?$/g, targetURI: "/crwd-network-referral-program/" },
    {
      test: /^\/download-legal\/presale_orderform_legalperson.pdf$/g,
      targetURI: "/img/pre_sale_crowdsale_order_form_legal_persons_20180330.pdf"
    },
    {
      test: /^\/download-legal\/presale_crwd_token_distribution_agreement_crowd.pdf$/g,
      targetURI:
        "/img/CRWD_Token_Distribution_Agreement_20180604.pdf"
    },
    {
      test: /^\/download-legal\/crwd_token_general_terms.pdf$/g,
      targetURI: "/img/[final]_crwd_token_general_terms_20180328.pdf"
    },

    {
      test: /^\/bonus-crwd-token-why-are-we-giving-free-tokens\/?$/g,
      targetURI: "/bonus-crwd-tokens-–-why-are-we-giving-free-tokens"
    },
    {
      test: /^\/conda-crwd-network-tour-part-½\/?$/g,
      targetURI:
        "/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week"
    },
    {
      test: /^\/conda-ico-meet-us-international\/?$/g,
      targetURI: "/blog/conda-ico-meet-us-international"
    },
    { test: /^\/how-to-avoid-scam\/?$/g, targetURI: "/faqs/how-to-avoid-scam" },
    {
      test: /^\/how-to-benefit-from-buying-crwd-token\/?$/g,
      targetURI: "/faqs/how-to-benefit-from-buying-crwd-token"
    },
    {
      test: /^\/introducing-conda-ico-private-sale\/?$/g,
      targetURI: "/introducing-the-conda-ico-private-sale"
    },
    {
      test: /^\/kyc-why-does-conda-value-it-so-much\/?$/g,
      targetURI: "/kyc-–-why-does-conda-value-it-so-much"
    },
    {
      test: /^\/press-release-initial-coin-offering-austrian-crowd-investing-platform-conda-starts-pre-sale\/?$/g,
      targetURI:
        "/press-release-initial-coin-offering-–-austrian-crowdinvesting-platform-conda-starts-pre-sale"
    },
    {
      test: /^\/secure-token-ecosystem\/?$/g,
      targetURI:
        "/2018-03-29-conda-–-introducing-a-secure-token-ecosystem-for-start-ups-and-smes"
    },
    {
      test: /^\/the-crypto-guide-for-beginners-what-is-a-smart-contract\/?$/g,
      targetURI: "/the-crypto-guide-for-beginners-–-what-is-a-smart-contract"
    },
    {
      test: /^\/the-crypto-guide-for-beginners-what-is-a-wallet\/?$/g,
      targetURI: "/the-crypto-guide-for-beginners-–-what-is-a-wallet"
    },
    {
      test: /^\/the-crypto-guide-for-beginners-what-is-kyc\/?$/g,
      targetURI: "/the-crypto-guide-for-beginners-–-what-is-kyc"
    },
    {
      test: /^\/the-crypto-guide-for-beginners-what-to-know-before-investing-in-an-ico\/?$/g,
      targetURI:
        "/the-crypto-guide-for-beginners-–-what-to-know-before-investing-in-an-ico"
    },
    {
      test: /^\/the-crypto-guide-for-beginners-why-are-token-burned\/?$/g,
      targetURI: "/the-crypto-guide-for-beginners-–-why-are-tokens-burned"
    },
    {
      test: /^\/what-is-a-token-the-crypto-guide-for-beginners\/?$/g,
      targetURI: "/the-crypto-guide-for-beginners-–-what-is-a-token"
    },
    {
      test: /^\/what-is-an-ico-the-crypto-guide-for-beginners\/?$/g,
      targetURI: "/faq/what-is-an-ico-the-crypto-guide-for-beginners"
    },
    {
      test: /^\/what-is-blockchain-the-crypto-guide-for-beginners\/?$/g,
      targetURI: "/faqs/what-is-blockchain-the-crypto-guide-for-beginners"
    },

    {
      test: /^\/token2049-get-your-exclusive-15-discount-now\/?$/g,
      targetURI:
        "/token2049-–-the-token-and-cryptocurrency-ecosystem-is-meeting-in-the-heart-of-asia/"
    }
  ];

  const redirect = redirects.find(r => uri.match(r.test));
  if (redirect) {
    const response = {
      status: "301",
      statusDescription: "Moved Permanently",
      headers: {
        location: [
          {
            key: "Location",
            value: /* "https://www.ximedes.com" + */ redirect.targetURI
          }
        ]
      }
    };

    callback(null, response);
    return;
  }

  // Make sure directory requests serve index.html
  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (!uri.includes(".")) {
    request.uri += "/index.html";
  }

  callback(null, request);
};
