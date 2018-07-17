---
templateKey: blog-post
title: Investor Key & the CRWD Network
path: Investor-Key- and-the-CRWD-Network
date: '2018-07-17T09:22:47+02:00'
author: Daniel Pichler
tags:
  - CRWD Network
description: >
  Your investor key is your unique ID verification on the Ethereum blockchain.
  Want to know what the other types of keys can do for you?
image: /img/investor-key-post.png
---


![CRWD Network - investor key contracts](/img/investor_key_contraxts.png)





Your investor key is your unique ID verification on the Ethereum blockchain. Its main control key, the management key, is tied to your identity and is your key to hold and trade asset tokens on the CRWD Network. 



The investor key was created by combining two EIP standards in an Ethereum smart contract; if you’ve tried out the demo, you’ll notice the investor key as the first large transaction on the Ethereum blockchain. The investor key allows you to add personal data to your address to make it compliant to be able to hold asset tokens. 



##  The Ethereum Contract - Identity 

## 

Ethereum’s contract allows KYC providers to store your KYC status after having checked your credentials; that is, you and your address are now associated to one another. In regards to identity management, several keys are required to approve changes to your identity as well as access to your verification data.  The main key is the management key, which holds the funds you own and can verify your identity and create additional keys. So long as this key is secure, nothing can happen to your funds. It should be kept in a hardware wallet or be handled on another secure device.



## Want to know what the other types of keys can do for you?

## 

Management Keys - Highest level, can sign claims and generate new keys

Action Keys - Can sign and approve claims that should be added to the investor key

Claim Signer Keys - KYC providers can use these to add identity information to the account

Encryption Keys - Can de-/encrypt unconfirmed claims sent to the investor key

Asset Token Consumer Keys - Can grant access to your ID documents





##  The Ethereum Contract - Claim Holder 

## 

Through the second part of the Ethereum smart contract, third parties (or in the case of the [CRWD Network](https://ico.conda.online), KYC providers) can add your identity data to your key. These additions are automatically approved if they come from KYC providers on a verified provider list. These claims can contain various pieces of information. For investing into CRWD Token in Austria, the different types of claims look like this:



Passport verification necessary for investments up to €5000

Video identification necessary for investments over €5000

Proof-of-fund origins verification necessary for investments over €100.000 



The claims are written into your investor key by the KYC provider in an unreadable but verifiable format. The information on the blockchain contains nothing that can be publicly interpreted, but gives some people the right to look up your ID information from a secure third party service. 



Before a new project can access your personal information, you have to approve their data access with your management key. You are also be able to revoke access to projects you previously gave consent to in case you sold the asset tokens you owned from them.



Want to learn more about the investor key? Find all the information in the [CRWD Network technical whitepaper](https://ico.conda.online/img/technical_whitepaper._v1.21.pdf).
