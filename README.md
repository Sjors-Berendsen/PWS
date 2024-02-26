

Using Browser Extensions to Prevent Online Scams









By: Lucas Sloesen and Sjors Berendsen
Class: C6V 2023-2024
Subject: Informatics/Computer Science
Assisting Teacher: dhr. Dohmen
Date: Start: 07-07-2023
Due: 02-02-2024




























All Rights Reserved

Copyright © 2023-2024 Lucas Sloesen and Sjors Berendsen

Commons Attribution 4.0 International License. This permits anyone to copy, redistribute, remix, transmit and adapt the work provided the original work and source are appropriately cited.
The distributor does not grant you any other rights in relation to this file or the material in this file. In other words, all other rights are reserved.
For the avoidance of doubt, you must not adapt, edit, change, transform, publish, republish, distribute, redistribute, broadcast, rebroadcast or show or play in public this file or the material in this file (in any form or media) without appropriately and conspicuously citing the original work and source or from the distributor prior written permission.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For any questions regarding copyright, please contact lsloesen@ogvo.nl or sberendsen@ogvo.nl 

Contents
Contents	2
Preface	5
Introduction	6
Action Plan	6
Hypothesis	7
Chapter 1: How do internet scams work?	8
§1.1 Types Of Internet Scams	9
§1.1.1 Impersonation	10
§1.1.1.1 Phishing and Spoofing	11
§1.1.1.2 Fake error websites / Tech Support Scams	12
§1.1.1.3 Romance & Sextortion scams	13
§1.1.1.3.1 Overseas impersonation	13
§1.1.2 Social Engineering	14
§1.1.2.1 Chat platforms	15
§1.1.2.2 Personal Data Surveys	16
§1.1.2.3 Investment	17
§1.1.2.4 Employment	18
§1.1.3 Product and services	19
§1.1.3.1 The fake ecommerce website	20
§1.1.3.2 Fake services	21
§1.1.3.2.1 John’s Experience with False billing[18]	22
§1.2 Point of View: Scammer	23
§1.2.1 Who are these scammers	23
§1.2.1.1 Interview With a Scammer 1	23
§1.2.1.2 Interview With a Scammer 2	25
§1.2.2 How do they get your information	26
§1.3 Point of View: victim	27
§1.3.1 Interview with a victim	27
§1.3.2 What would have happened	27
§1.3.3 Who are the targeted individuals	27
Chapter 2: Current prevention systems	28
§2.1 Without Computer Science	28
§2.2 With Computer Science	29
§2.2.1 Which softwares are there already	29
§2.2.1.1 Antivirus	29
§2.2.1.2 Browser extensions	29
§2.2.2 How does ai/machine learning contribute to identifying these scams	30
§2.2.2.1 Spamfilter	30
§2.2.3 How did the makers of these prevention systems come up with them?	31
Chapter 3: What is an AI?	32
§3.1 How does natural language processing work?	33
§3.1.1 Example of a NLP	35
Chapter 4: How do chrome extensions work?	36
Chapter 5: Our prevention system	37
§5.1 Our idea	37
§5.1.1 How is it going to work	37
Block malicious downloads	37
Block ads	37
Scan emails and messages	37
Block phishing links & Malicious websites	37
Customizability	37
§5.1.2 Why a browser extension?	38
§5.1.3 What is it going to work with	38
Extension	38
API	38
AI	38
PyTorch	38
Pandas	38
Scikit-Learn	38
BERT / Hugging Face	39
§5.2 Development	40
§5.2.1 Extension	40
§5.2.1.1 Manifest	40
§5.2.1.2 UI/Frontend	41
§5.2.1.2.1 Extension Popup	41
§5.2.1.2.2 Settings Page	44
§5.2.1.2.3 Scam Score Popup	54
§5.2.1.2.4 Download Warning popup	58
§5.2.1.2.5 Error popup	61
§5.2.1.2.6 Thank you page	63
§5.2.1.2.7 Warning page	65
§5.2.1.3 Injection	66
§5.2.1.3.1 content.js	66
§5.2.1.4 Backend	70
§5.2.1.4.1 Background.js	71
§5.2.1.5 Issues we ran into	76
§5.2.2 AI detector	77
Programming	77
§5.2.2.1 Issues	77
§5.2.2.2 Training	77
§5.2.2.3 Final product	78
§5.2.2.3.1 train_model.py:	78
§5.2.2.3.2 model.py:	81
§5.2.2.3.3 predict.py	82
§5.2.2.3.4 Model	83
§5.2.2.4 API	84
§5.2.2.4.1 app.py:	84
§5.2.2.4.2 predict.py (V2):	85
§5.2.2.4.3 model.py:	86
Chapter 6: Discussion	87
§6.1 Problems	87
§6.2 User Feedback and Training Data	87
§6.3 Efficacy Metrics	87
§6.4 Code Efficiency and Response Times	87
§6.5 Model Accuracy	88
§6.6 Expanded Features and Application Support	89
§6.7 Text from Image Scan Support	89
§6.8 Resource Allocation	89
§6.9Phishing prevention	89
Chapter 7: Conclusion	90
Chapter 8: Sources	92
Attachment 1: Abbreviation list	95
Attachment 2: Logbook	96
2.1 Sjors' logbook	96
2.2 Lucas’ logbook	98


Preface
One of the mandatory parts of your exam file is the ProfielWerkStuk (PWS). The PWS is a great conclusion to your career in secondary education, where we can show what you have learned in recent years. This is our master's thesis!

Our names are Lucas Sloesen and Sjors Berendsen, Students of College Den Hulster in Venlo. When we were asked to choose a topic for our PWS, it was soon clear which subject we wanted to choose: Computer Science and internet scams. This was because of how topically the subject was. The reason we chose our subject, of internet scams on social platforms is that we have some first-hand experience ourselves, Lucas has been a hacker and social engineer as a hobby and had done some scambaiting (tricking scammers into thinking you're a victim and wasting their time) before. Sjors had a lot of programming experience and had made some things in Python and javascript before, so this profielwerkstuk is a combination of our hobbies and it connects well with our subject of choice, informatics.

Special thanks to:
- Mr Dohmen for being the assisting teacher in our research
- The people we interviewed for helping us show the point of view of each side of the situation
- Michael, Joost and Paul from Sliminict for educating Lucas on hacking

Introduction 

Our profielwerkstuk is about online scams. Not because we were victims of them, but because of how topical it is nowadays, and we had the luck to ‘experience’ how an online scam(mer) works. We also chose this topic, because we are interested in what lies behind the world we see, what is actually behind that email? In recent years, the online scamming branche has grown due to the excessive use of the internet. Can you even imagine a world without the greatest invention (for most of the people)? What about that one package you bought off Amazon, how would you have found it? How would you know when your package would arrive? How would you check if your train is on time? We can all do this, thanks to the internet. Luckily, the internet has brought multiple simplifications to our lives and for most people, a positive impact. As a man once said, ‘Every advantage has its disadvantages’, we also see some negative impacts of the internet, or to write it better, the abuse of the internet. 

Since mankind has existed, there have been numerous scammers around, all trying to earn a little bit of money for themselves. This could be because they are forced into the situation or any other reason we can think of. Scammers adapt to surroundings and possible new features or breakthroughs. Since the internet started to exist, scammers have made use of the internet to earn money. In the beginning, it was a pretty easy and anonymous thing to do. But as the internet developed further and further, getting the location and their information started to get more easy. Scammers adapted to this as well. Since then, the world of online scamming has become a Tom-and-Jerry game between scammers and law enforcement.

But the question may arise, what have we done so far to prevent ourselves from getting scammed? Well, you could say that depends on the kind of scam. What kind of online scams are there anyways? And what have we done so far to prevent this? Can we come up with our prevention system? Therefore our research question is: 

Can internet scams on social platforms be prevented using browser extensions?


Action Plan
Make hypothesis
Research internet scams
The general plan for application(s)
Research technologies needed for application(s)
Make application(s)
Test application(s)
Discussion and Conclusion
Hypothesis 
Our hypothesis posits that the creation and implementation of a browser extension, designed to actively identify and prevent various online scams, will result in a significant reduction in the frequency of successful scams for users employing devices compatible with the extension. We think that the extension will serve as a robust defence mechanism against a wide array of common online scams, including phishing attempts, malicious websites, and deceptive pop-ups, thereby improving the overall cybersecurity of users on the internet.

However, it is important to acknowledge the inherent complexity of the online threat landscape, and we recognize that exceptions and vulnerabilities will persist. Specifically, we anticipate challenges in preventing certain scams that occur through email or chat platforms, where threat actors may employ sophisticated social engineering tactics that exploit the inherent limitations of automated systems. In such cases, the reliance on natural language processing (NLP) may introduce an element of uncertainty, as automated systems can occasionally misinterpret contextual cues or encounter false positives and negatives.

Chapter 1: How do internet scams work? 
In this section of our research, we are going to discuss which types of internet scams there are, how these scams work from the point of view of the scammer and how they work from the point of view of the victim. We will however not be able to cover all scams because there are many scams and there tend to be new scams developing all the time. 
§1.1 Types Of Internet Scams
There are a lot of internet scams, with new ones being developed every single day. But there are a few common types of scams which get used more than the others. In this section we try to find the most commonly used scams and how they work.

§1.1.1 Impersonation
Impersonation scams are some of the most common types of scams used on the internet, as with the internet's anonymity, you can impersonate anyone and everyone. A few of the common impersonation scams are:
Phishing & Spoofing
Fake error websites / Tech Support Scams
Romance & Sextortion scams

§1.1.1.1 Phishing and Spoofing 
The definition of phishing is: "The fraudulent practice of sending emails or other messages purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers." [1] And the definition for spoofing attack is: “a spoofing attack is a situation in which a person or program successfully identifies as another by falsifying data, to gain an illegitimate advantage”[2]. According to fraud.org[3] Phishing and spoofing is the third most commonly used scam, making up around 17.5% of the total internet scams with a median loss for the victim of $800 USD. Most of the time, the victims are sent an email, message or some other form of text communication, which is made to look reputable (sometimes through spoofing), asking them to give valuable information such as bank details, social media account login, social security numbers, company secrets, etc. When phishing, a lot of scammers use spoofed emails, so it looks like the email is sent from a reputable domain and or company, and in the message which contains instructions on how to send the information to the scammer, a lot of the time this is a link which looks like a reputable domain, for example instead of discord.com they send a link which has dicsord.com or some other variation so it looks similar enough so people don’t immediately notice. These variations also happen with bank sites, so when you try to log in, they log in from their computer and send themselves money from the victim’s bank account.

§1.1.1.2 Fake error websites / Tech Support Scams
One of the most common ways people fall for the tech support scam is that they get sent to a fake error website, which starts making noise and giving popups that a virus is detected on your computer and that you need to call a number on the screen to remove the virus and repair your computer. Another way people fall for these tech support scams is that they get called by 
supposedly “Microsoft” and they have a virus on their computer. These phone- numbers/calls lead to a call centre, of which, according to the “dial one for scam”[4] paper by Najmeh Miramirkhani, 85% could be traced to locations in India, 7% to locations in the United States and 3% to locations in Costa Rica. That 85% of these call centres are located in India is logical, as it already is a popular location for outsourcing call centre work for English-speaking countries. To combat these call centres some YouTubers (for example Jim Browning[5])  try to waste these scammers' time and eventually, when they have enough evidence, shut down the call centre, but a lot of the time the owner of these call centres has bribed the local police, so nothing happens.


§1.1.1.3 Romance & Sextortion scams
According to the website romancescams.org ‘The number of romance scam cases is increasing rapidly with 21,000 cases in 2018 to 25,000 cases in 2019. In 2015, only 8,500 scams were filed. The cases have more than doubled in the past 5 years, according to the Federal Trade Commission.’[6]. Romance scams have gained huge popularity among every age group of scammers, especially during and after COVID-19. Because everyone was forced to sit at home for a certain period, people were looking to meet new people. People went on popular dating apps, made a profile and went on the search. Suddenly, a very good-looking person would approach them. You may not notice directly that it is a scam. According to ice.gov[7], most romance scammers ‘predominantly originate from Nigeria and Ghana’. There are multiple forms of Romance scams. 
§1.1.1.3.1 Overseas impersonation
One type of a Romance scam is overseas impersonation. The scammer tries to make a connection with the victim and gain trust. The scammer then forces the victim to send information or money. This could be by impersonating a US army officer, or just a foreign person. What these scammers often do is steal the ‘identity of a real soldier or create a completely new fake identity, stealing images and information from public databases on military members’[8]. There are a lot of so-called ‘formats’ on the internet that scammers make. These formats have been made because the English of most of these scammers is not great. By just searching ‘military format dating’, we can find a file uploaded to a Russian website. It contains a lot of sentences for the scammer to copy and paste. 

§1.1.2 Social Engineering
Social engineering is oftentimes a more advanced version of phishing, but more manipulative, as instead of directly asking for information, the scammer first builds a bond of trust, in real life or online, with their victim to get sensitive information like company secrets, credit cards and then extorts their victim or sells the information, or tries to get the victim to do something beneficial to the scammer, like being their money mule. A few examples of this are:
Chat platforms
Personal Data Surveys
Investment
Employment

§1.1.2.1 Chat platforms
As mentioned in our interview with an internet scam victim, we humans tend to trust people we follow on social media, because of a concept called parasocial relationships Parasocial relationships, which is where the relationship is only coming from one person[9], or the illusion is created for the one person that the second person has a relationship with them, even though there is nothing. The relationships on these chat platforms are one-sided as the creator doesn’t know the consumer, but the consumer “knows” the creator, or at least their internet persona, because of the feeling of a friendship-like bond the consumer gets, the consumer tends to trust the creator, which can lead to examples of what happened to the victim we interviewed. Another way scammers use social engineering on social platforms is through chat services, online chat services are very popular for social engineering scams as it makes it very easy for the scammer to get in contact with the victim. On the chat platforms the scammer has to build a “real” friendship with the victim, and then lead the victim into the trap like for example with the discord game scam, where the user downloads a virus, link paypal scam, where the scammer hacks the victim’s PayPal,  employment scams, where the victim works as part of a scam. 
All these scams either steal a user’s information or get them to do something beneficial to the scammer. [10][11]


§1.1.2.2 Personal Data Surveys
In this scam the victim gets sent through a funnel[12] (Which can be from Offering “Free” Gifts for Survey Fills through Phishing and Online advertising ) to a website on which they can fill out surveys to “earn money” examples include entry into a “sweepstakes” to win a trip or cash prize, a “coupon” for some popular product or service, or a gift card. But what these surveys are doing is collecting as much personal information from the victim so they can use it maliciously, examples include: 
Selling to advertisers
When their contact data is illicitly shared with advertisers (such as through lead gen fraud schemes), consumers may see a major increase in nuisance phone calls, emails, and texts from various sources. Some of these unwanted ads may even be from other fraudsters who, knowing the victim has fallen for other scams in the past, see them as an easy target. It could also be that online advertising becomes very personal, as the information is sent to online advertisers.
Compromising online login.
Online survey scams may ask unusual personal questions like “Where did you go to school?” or “What’s your favourite food?” While posing as a personality quiz, the scammer is collecting answers to common identity verification questions used by websites. With these questions, fraudsters can force password resets to access their victims’ online accounts. This can be used to defraud the victim of money, access services the victim paid for without their knowledge, or commit identity theft.
Identity theft
Using information collected during the “survey,” fraudsters can try to steal the identities of whoever takes the survey. For example, fraudsters could learn personal details about their victims, such as names, addresses, phone numbers, email information, and other data. Using this information, the fraudster could sign up for new credit cards or loans. This method could enable fraudsters to rack up tens of thousands of dollars in damages for each identity stolen.



§1.1.2.3 Investment
With the investment scam, the victim gets messaged by the scammer that there is a unique opportunity or tactic for investment with them and that they can earn a lot of money investing with them/their tactic. What these scammers do is send the victim to a fake investment, where the victim can“invest” but can’t withdraw from or they have to recruit others to invest too. According to tn.gov, the most common forms of Investment scams are[13]:
Crypto investment technique
The victim gets sent to a fake crypto investment site where they can deposit and “invest” but they are unable to withdraw from the site.
Affinity fraud
Scammers try to trick members of a group that has formed based on a common characteristic such as age, ethnicity, or religion. Scammers act like they are part of the group to win the trust of the group leader and its members. The scammers hope that if the group leader invests, others will invest too.
High Yield Investment Programs
 Scammers claim you’ll make high returns on your money if you invest with them. They say you’re guaranteed to make money off the investment. Often these investments aren’t real, or they’re selling stocks that have almost no value.
Pyramid/Ponzi Schemes
Scammers will tell you that a small investment can earn a large payout—or profit. But you have to find others to invest too. The “profit” that you get is just money paid by other investors. The scheme falls apart when the scammer runs out of new investors or takes all the money and runs.
Pump and Dump
Scammers buy cheap stocks and lie to potential purchasers about the quality of the stocks to raise their prices. You might think the stocks are a good investment, so you buy them at a higher price. Then the scammer then sells off the stock at a higher price, the stock price drops, and you’re left with worthless stocks.
Recovery Room Schemes
Scammers say they’ll help you get back money that you’ve lost in other investment schemes, but they want you to pay them first. After you pay them, they don’t do anything.
Unsuitable Financial Products
A financial advisor may try to sell you something that earns them a lot of money but is not a good investment for you. Financial products like annuities can take a long time to earn the money you were promised. And if you want to withdraw your money, you might have to pay a large fee. More generally, some financial advisors may bill you for services you didn’t receive or products you didn’t ask for.


§1.1.2.4 Employment
The victim gets a message from the scammer with a message containing something along the lines of this: “Do you want to make _$ per month? I have the job for you”. With the employment scam, the scammer offers the victim a job, with the promise they can earn a lot of money by accepting this job offer. But what the victim doesn’t know is that they are helping a scammer, with one of the following[14]:
Money Laundering
Recruiting other people to work for them
Scamming other people
Laundering other goods


Here are some examples of work-from-home job scams[15]:

Reshipping scams. If you’re searching for a job online, you might see positions advertised for quality control managers or virtual personal assistants that have been placed by scammers. But here’s how you can tell it’s a reshipping scam: once you’re “hired,” the company says that your “job” is to receive packages at home, throw away the original packaging and receipts, repackage the products, and then reship them to an address they give you. Sometimes the address is overseas. The products are often high-priced goods, like name-brand electronics, bought using stolen credit cards. Reshipping goods is never a real job. That’s simply being part of a scam. Sometimes the company tells you it will send your first paycheck after you work for a month, but the paycheck never arrives. When you try to contact the company, you’ll find that the phone number is often no longer connected and the website is deactivated. This “job” is a scam, and if you gave your personal information thinking it was for payroll, you may now have an identity theft problem. 

Reselling merchandise scams. In this scam, you may get a call out of the blue from a stranger offering you a job opportunity. Or you may see an ad online or in your local newspaper. They say you can make money buying brand-name luxury products for less than retail prices, and resell those products for a profit. But after you pay for the products, the package never arrives or, if it does, it’s usually junk.

Paycheck money mule. This job is being advertised as a low step-in job. It only requires a printer. The scammers launder the money from the other scam to this person. How it works, is that the scammers send a fake check from another scam, to the money mule. The money mule is then being asked to either send it to someone else or to cash it in at a bank.


Recruitment scams often work in combination with a Ponzi- or pyramid scheme where you get a commission when you recruit someone into the scheme.




§1.1.3 Product and services
A very common way for victims to get scammed is a product or service scam, as there is no real effort needed from the scammer except SEO (Search Engine Optimization) and/or advertising, common forms of this include:
The fake e-commerce website
Fake services
§1.1.3.1 The fake e-commerce website
On a fake e-commerce website, the scammers makes a webshop, but when the victim places an order, instead of delivering the products ordered by the victim the scammer delivers nothing or delivers something similar to the product ordered, for example, the victim orders a PlayStation plus coupon code for 12 months, the scammer gives the victim and account with PlayStation plus instead of delivering the coupon.


A good way to detect these fake e-commerce sites is to check for the following[16]:
Unknown address/shop
If you aren’t familiar with the site’s address, name or brand, there is a high possibility that it is a scam. The address may also have been altered.

Example of fake address, while it isn’t the same as an unknown one, it is a good example of what to look for in a URL
From: https://www.wellesley.edu/lts/techsupport/security/internet/fake
	
How did you get on that site?
If you got to the site through an advertisement, especially on Instagram, Facebook and the top Google result, there is a high chance that if it is an unknown shop, it is a fake shop.
Suspiciously cheap
If this site is very far below the normal prices on other sites, it probably is a scam.
No or few reviews 
Look for reviews on trusted sources like Trustpilot or Google, I there are very few or no reviews, the site is probably fake
Popular/seasonal items
If the website only has a few items, very related to the season (Barbecue in the summer, and other seasonal items.) or very expensive/popular (e-bikes, smartphones, etc.), there is a high probability that it is a scam.
No certifications
If the website doesn’t have any certifications, like the Trustpilot one, or when the certification embeds are fake,  it is a fake shop
All sizes are available.
If there is a huge discount but all sizes are available, the site is probably a scam as some sizes sell out very quickly when there is a sale
Only been active for a short time.
If the shop/account has been only registered for a month or so, that is suspicious. There are some websites that you can use to check a shop e.g. https://whois.icann.org/ 
Company details don’t give a lot of information
Criminals often copy information/photos from existing webshops and/or websites. If you see a registration number or other information, it doesn't mean that the information is theirs but could be stolen.

§1.1.3.2 Fake services

The scammers pose an offer for some service, but once the victim pays, the service isn’t delivered. Here are a few examples of this type of scam[17]:
Marketplace
Scammers set up accounts as sellers on popular online marketplaces such as Facebook; Gumtree; or eBay[note 1]. Often the buyers and sellers may be individuals rather than businesses. Scammers will also sell expensive products like cars, boats, or caravans. Always inspect the product before making a payment.
False billing
Scammers will contact you out of the blue and ask you to pay bills for services or products you haven’t ordered. If you didn’t order, don’t pay.
Also see §1.1.3.2.1 John’s experience with false billing
Rental Scams
Scammers pose as landlords for rental and holiday properties. They will post ads for rental properties that may not exist or that do exist, but they do not own. Scammers will come up with excuses about why you can’t inspect the property and will ask you to pay a bond or rent in advance. They may also ask you to send identity information like your license or passport.
Pet scams
Scammers set up fake websites to deceive you into paying money for popular breeds, cute puppies, or other pets. They set up fake profiles on social media and online marketplaces to convince you to buy a pet that doesn’t exist.
Health and medical product scams
Scammers offer health and medical products and services to deceive you to pay money for products that don’t work and won’t cure you.  Some of these products may be dangerous. If you are worried about your health always see a doctor. Never take medical advice from people on social media or online forums.
Psychic scams
Psychic and clairvoyant scammers approach you by post, email, telephone or even face-to-face. They predict a positive upcoming event or claim that you are in some sort of trouble and offer a solution.

[note 1] = Popular online platforms that are used to sell new/2nd hand items.
§1.1.3.2.1 John’s Experience with False Billing [18]]

John worked as an accounts manager for a local manufacturing business. Late on a Friday afternoon, he received an email which appeared to be from one of his regular suppliers, Mr Liu from Zhang-Fei Industries, a ball bearings supplier in Asia. Mr Liu’s email explained that due to a change in their internal finance system, he needed John to update their banking details, including a new account number.
John took the email at face value and changed the banking information in his company’s database. A few days later, John made a scheduled payment to Zhang-Fei Industries for $ 17,000 USD.

Two weeks later the ball bearings from Zheng Fei Industries had not arrived so John telephoned Mr Liu. Mr Liu said he hadn’t received payment for the last order and had consequently cancelled the shipment. John told Mr Liu that he had processed the payment personally to make sure it was paid according to the new arrangements. After some investigation, it became clear that Mr Liu had not sent any request to update his company’s banking details and John had fallen victim to a scam.

In the weeks to come, with the initial loss of $17,000 USD, the delay in supply flowing from missed orders and broken contractual obligations, John’s company estimated their loss to be over $ 30,000 USD.


§1.2 Point of View: Scammer 
§1.2.1 Who are these scammers 
Depending on what type of scam, there are a few hotspots around the world where these scammers originate from. The most impersonation/phishing scams come from The African West Coast, with Nigeria being the leader of most Impersonation scams. 

§1.2.1.1 Interview With a Scammer 1
We have interviewed a Nigerian scammer who goes by the name ‘‘WireDC/Wire Nation’’.  We came in contact with this person after one of our friends became a victim due to one of his scams. Due to a language barrier/poor knowledge of English on the other side, I (Lucas) rephrased the answers.


What was your situation before you started scamming?
Before I started scamming I had studied engineering. I had a job where I earned around 20.000 Naira (~€25)

Why did you start scamming?
I needed help because I lost my job but there was nobody to help me. I had no money for proper food so often I ate nuts and sugar. Our currency is very low as well. I contacted someone who taught me how to scam Americans and Europeans. 

How did you get into scamming?
I got into scamming through the internet. I contacted one of my friends, they are in a small organization. This organization has around 10-15 people and we all live in one house. We cannot leave without permission of the chairman.


What kind of scams are you doing/did you used to do?
At the moment I use the Romance scam to scam people. I go by the name of Thomas and try to build a romantic relationship with the other person on the other side. 

How successful have you been until now?
I'm quite successful. I am talking to multiple people at the moment and the money I have I’ve received I bought a phone and a ring


This interview is just with one of the scammers 
that are around the world. The newest form of scamming is Pig Butchering, and it originated from the southeastern part of Asia. Most of the people who start with this scam either are forced to because they have been lured in by smart businessmen. Another hotspot around the world is India, where people are again unconsciously scamming or are forced to scam because of their situation. Some people participate in online internet scamming without knowing what they are doing. These people can be considered victims of the online scamming world, as they help launder money for these people.



§1.2.1.2 Interview With a Scammer 2
If we analyze the following interview of 419eater.com[19],
We mostly see that these scammers are young Nigerian men who dream of making it in their lives by being professional sporters. Not only the scammers but also the Nigerian Law Forces seem to make a profit on the whole case. Although there are a lot of scammers around, on email platforms, only a very small handful of people (1 or 2) seem to fall for these scams. This is also because these scammers feel like everything they can get under $100 or $200 is not worth their time. The scammers are also very selective of their victims. Even if people fall for the scam, the person who got on hold of everything seems to have to split the profit with law enforcement and/or fellow scammers.

A small extract from the interview shows us that not many people respond to scam emails anymore.                                                                                                                                                                                                                                                                                                                          
‘‘Rick: How many of these people send a serious response to your first email? (Please give a percentage)
olabode: Few, very few, say less than 2%.
ashomah: few say ratio of 6-10both men and women
Vanity: 2-3 people.(%.03)
Ahmed: OUT OF 100% I GET 5% SERIOUS RESPONCE.’’
from: 419eater



§1.2.2 How do they get your information 
Because of the digitalization of many services people also transfer their information to instances because they require them. Sometimes there may be a data breach and the data gets leaked onto leak sites, where people can buy this information in bulk for small prices. Another way is making use of email scraping bots or scripts that search around the internet for the ‘@’ sign[20]. There are many examples that you can find online such as EmailHarvester - GitHub [20]

Another way that people get your information is through leaks, as mentioned before. According to Hackmageddon [21][22], there were 336 breach events in August of 2023. This comes to 10.84 attacks per day. Hackmageddon also states that there have been 67 Mega breaches so far in 2023. These mega-breaches have led to a breach of over 2 Billion records. One example is when the  Colorado Department of Health Care Policy & Financing (HCPF) got hacked in August. Names, addresses and personal information of over 4 million people got leaked. These records are then being sold on the dark web, for a relatively low price. For just USD$8, you can get a person's ‘fullz’. This means full information of someone: Name, Address, Email, Social Security number and when in luck even a credit/debit card number. When just searching for the term ‘fullz’, we can find a file containing several credentials as seen in the picture below. For safety reasons, we have chosen to blur the information of the victims to protect them.




§1.3 Point of View: victim 
In this section, we discuss what a scam looks like from the victim’s point of view by interviewing a victim.
§1.3.1 Interview with a victim
What is your name?
My name is Bilal. I live in the Netherlands and I have been a victim of wirenation through Instagram.

What happened?
One day I got a DM from a guy whom I followed on ig about cars which I followed about for a year (His account probably was compromised by wirenation too). I received a DM that I had won $1000. The person told me to click on the link to what prize I wanted

Where did the link direct you to?
They provided me with a link that directed me to the login page of Instagram. I logged in on the page to see what was up. After that, the scammer sent me a message where I had to pay a fee. Suddenly I was logged out because the guy had changed my password and recovery email address.

How did you get your account back?
There was a known programmer and social engineer and he got me back my account after some negotiating.

§1.3.2 What would have happened 
What would have happened if Wirenation got on hold of the account for a longer period of time? We asked Wirenation how the scam exactly works. According to him, he would have used the account to repeat everything exactly the same, to harvest some more accounts. After that, he would turn the accounts into something like a reliable shop or service, and promote/sell things.
§1.3.3 Who are the targeted individuals
Depending on the type of scam, there are different types of intended audiences. The romance scam may go through Facebook or Tinder. Both platforms tend to target different groups of people, but the most common group that falls for such scams are the elderly because they are not very good at detecting flaws or dangers from such online scams. 

Chapter 2: Current Prevention Systems
§2.1 Without Computer Science

One of the few prevention systems for preventing scams online is people telling others (especially high-risk individuals) what scams are common at that time, so they can detect it themselves and tell others about the scam. Another way is using common sense.

Common ways these work are:

In some American stores, such as Walmart, there are small warning signs along the gift card aisle[23]
IT classes for the elderly in local libraries and other public spaces
Using common sense
Don’t share your password with anyone (in-game tips and posters in schools and other public places)










§2.2 With Computer Science 
§2.2.1 Which software are there already
There are a lot of examples of software that try to prevent internet and computer scams, some examples include, 
antivirus software
Browser extensions
§2.2.1.1 Antivirus
Anti Viruses such as Norton, Bitdefender, McAfee and others try to prevent the installation of malware such as password stealers, extortion malware, crypto miners and other pieces of malware.

§2.2.1.2 Browser extensions
Browser extensions like Ublock origin blocking advertisements[24]  and guard.io (Online phishing and malware download prevention[25]) contribute a lot to preventing scams as they block users from seeing and visiting malicious advertisements, but as these browser extensions aren’t very popular among the population, they remain unused.




§2.2.2 How does AI/machine learning contribute to identifying these scams 
§2.2.2.1 Spamfilter
While spam filters aren't one AI but a smart combination of AIs and algorithms analyzing the e-mail or other forms of messaging. These AIs can check for the following[26][27]:
Sender
Account age (if possible)
If the account has been active for only a short amount of time, and is acting suspiciously, it gets put on the blacklist.
Suspicious activity (if possible)
If for example, the user has sent multiple similar messages in a short amount of time, the user gets put on a blacklist
(E-Mail)Service provider
Checks where the message was sent from, if for example, it is from an email address hosted on an unknown server, there is a high likelihood that the message gets blocked.
Blacklist
All messages from users/addresses on a blacklist get sent directly to the spam inbox.
Use of language
Keywords
Checks for words like password, money, dollar, investment, etc.
Spelling and grammar
Checks whether there are too many grammatical and spelling errors
Language 
Checks whether the language isn’t one of the languages the user speaks, if the user doesn’t the message gets sent to the spam inbox.
Attachments
Checks whether the contents of the attachments could be malicious.
Bayesian Filter
A personally trained AI which looks at the emails you send to spam manually and blocks out similar messages.




§2.2.3 How did the makers of these prevention systems come up with them? 
Guard.io[25]

Ublock Origin[28]
uBlock Origin (uBO)'s manifesto:
The user decides what web content is acceptable in their browser.
The uBO project does not support Adblock Plus' "Acceptable Ads Manifesto" because the "Acceptable Ads" marketing campaign is the business plan of a for-profit entity.
Users are the best placed to know what is or is not acceptable to them. uBO's sole purpose is to give users the means to enforce their choices.
McAfee
Sensing a business opportunity, John McAfeewent about creating antivirus software that could detect the computer virus and remove it automatically. In 1987, McAfee created McAfee Associates Inc. to sell this software, which he named VirusScan. This was the first anti-virus software brought to market and one of the first software products to be distributed over the Internet[29][30].





Chapter 3: What is an AI?

‘‘With an AI, the possibilities are endless’’. This is what GCLearnFree states on its platform on YouTube. But what is an AI? AI stands for Artificial Intelligence. You can compare an AI to a brain, but then in the form of software. Just like humans, AIs have to learn certain things. The same thing applies to humans. You can easily distinguish a dog from a cat because you’ve had enough ‘data’. Now back to the AI, it's just like giving computers a brain, allowing them to perform tasks that, until recently, only humans could do. For instance, think about your phone's facial recognition feature. That's AI at work, recognizing and unlocking your phone using its "smart eyes." AI is also the magic behind personalized recommendations on streaming platforms like Netflix. When you get suggestions for movies or shows you might like, it's not luck. Another cool example is self-driving cars. AI enables these vehicles to "see" the road, make decisions, and navigate safely without human control. These AIs don’t know everything at first, they need to be trained. Just like when babies start walking, they will learn by trial and error and they need to practice some time before they get hold of it. AI’s in this instance, work the same. As the first example we gave, you can make an AI that detects whether there is a dog or cat in the picture. The AI will then need to ‘practice’ with some existing data of a couple of thousands or millions of pictures of both dogs and cats. The AI in this instance will use mathematics to detect certain patterns. Based on these training data, you can build your own AI. This is an example of general artificial intelligence. For example, spam filters, make use of an AI with a dataset of words. This type of AI is called a NLP AI (natural language processing).


§3.1 How does natural language processing work?
Natural language processing (NLP) is a type of artificial intelligence that has the primary goal of helping machines understand, interpret, and generate human language in a way that is both meaningful and contextually relevant. NLP combines insights from linguistics, computer science, and cognitive psychology to develop algorithms and models that empower computers to work with language data. However, NLP has a few challenges. These include context or tone. Certain sentences can be interpreted differently as well.
NLP has a wide range of real-world applications, from improving search engine results and enhancing customer support through chatbots to making language interfaces more accessible and user-friendly. As NLP continues to evolve, it holds the potential to revolutionize how humans and machines interact, making technology more intuitive and capable of understanding and responding to natural language in a manner that closely mirrors human communication.

Let’s follow the steps of how an NLP AI would process a bunch of sentences[38].


Input
London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames in the southeast of the island of Great Britain, London has been a major settlement for two millennia. It was founded by the Romans, who named it Londinium.


Step 1: Divide the text into sentences


Output
London is the capital and most populous city of England and the United Kingdom
Standing on the River Thames in the southeast of the island of Great Britain, London has been a major settlement for two millennia.
 It was founded by the Romans, who named it Londinium



Step 2a: Sentence tokenization; process sentences one at a time



Step 2b: Word tokenization; split the words into separate words/tokens

(we will take the first sentence as an example from hereon)

Output
“London”, “is”, “ the”, “capital”, “and”, “most”, “populous”, “city”, “of”, “England”, “and”, “the”, “United”, “Kingdom”


Step 3: predicting parts of speech; what is the role of each token in the sentence?


Output
‘London’ = ‘Noun’, ‘is’= ‘Stopword’ … etc 

Step 4: Simplifying words to their standard form; removing all grammar
(has becomes have, students becomes student etc.)

Output
“London”(noun), “[be]”(verb), “ the”(determiner), “capital”(noun), “and”(conjunction), “most”(adverb), “populous”(adjective) …. etc


Step 5: Identifying stopwords and/or flagging them
(all flagged stopwords are flagged grey)

Output
“London”(noun), “[be]”(verb), “ the”(determiner), “capital”(noun), “and”(conjunction), “most”(adverb), “populous”(adjective) …. etc



Step 6: Dependency parsing: how do words relate to each other?


from: https://medium.com/@ritidass29/the-essential-guide-to-how-nlp-works-4d3bb23faf76 

Step 7: Entity recognition and flagging


Output
“London”(noun, geographic entity), “[be]”(verb), “ the”(determiner), “capital”(noun), “and”(conjunction), “most”(adverb), “populous”(adjective) …. etc


Step 8: Defining signal words/pronouns


Output
‘it’ 3rd sentence refers to ‘London’


This is just a small taste of how an NLP does text analysis. This is because of the immenseness of the NLP AI. The data that comes as a result of the previous steps, will then be analyzed even further using Linear Algebras and Probability



§3.1.1 Example of an NLP
BERT, short for Bidirectional Encoder Representations from Transformers is an NLP made by Google. What is unique about this language model is that it does not read the word from left to right, but it considers the words around it in the sentence to determine a more nuanced relationship between words. The architecture of the NLP is built on a neural network of Self-attention to determine how important words are for certain words in a sentence. During training, the NLP had to guess which word had to be filled into a sentence where one word was left out. As training data, BERT uses millions of words from sites such as Wikipedia.[39]


Bert neural network vs other NLP’s, from: https://medium.com/@samia.khalid/bert-explained-a-complete-guide-with-theory-and-tutorial-3ac9ebc8fa7c 




Chapter 4: How do Chrome extensions work?

A Chrome extension is a small software module (using JS, HTML, CSS etc) that users can install on the Google Chrome web browser to enhance its functionality or add specific features. These extensions are designed to customize and personalize the browsing experience, providing users with additional tools, utilities, or enhancements. Chrome extensions can range from simple utilities like ad blockers, password managers, and note-taking tools to more complex applications that modify the appearance of websites or automate repetitive tasks. Users can easily find and install Chrome extensions from the Chrome Web Store, and these extensions often appear as icons in the browser's toolbar, allowing users to access their features with a click. Chrome extensions play a vital role in tailoring the browser to individual preferences and needs, making the browsing experience more efficient and enjoyable[40].

These Chrome extensions are webpages that run in the background. The extension has more permissions than the average website, as it can access Chrome through the extensions API. These extensions work with so-called event listeners that wait until a certain event occurs, such as clicking a button, installing something etc, and then a certain action will be performed. You can compare it to an ON (similar to IF, but it waits until the statement is met) TRUE/FALSE statement:


pseudocode as example 
if ‘scan’ button clicked = true then
    take text from div with id=5 and store as = grabbed
    use API link to determine and input is var grabbed











Chapter 5: Our prevention system 
We are going to make an online-scam prevention system. It is going to be a browser extension, which blocks malicious downloads, blocks ads, scam emails/messages features, phishing links and malicious websites. 
§5.1 Our idea 
§5.1.1 How is it going to work 
This is a general plan of how it is going to work:
Block malicious downloads
Are you sure? popup for vulnerable file extensions like .msi, .vba, .exe, .jar, etc.
Block ads
Block any and all online advertisements, (recommends uBlock Origin on install)
Scan emails and messages
For the major platforms, like Gmail, Outlook, Discord, etc. Add a button.  
When the button is clicked, the message or email will be scanned by our AI for the use of language. A popup will appear, which shows the certainty results of our neural network, on the popup the user will be presented with two options, block and report, or ignore.
Block phishing links & Malicious websites
create a blacklist for known scam sites
block sites on personal (local) and our blacklist

Customizability
settings page where user can change the file extension that is blocked,
create their own blocked sites list

§5.1.2 Why a browser extension? 
As Chrome extensions are easy to install and are compatible with basically any device with a web browser, it is more likely that the people we want to protect with this can install it or can with a guide.
§5.1.3 What is it going to work with 
Extension
Our application is built as an extension using Chrome Manifest v3, ensuring compatibility with all Chromium browsers. Additionally, it is designed to be easily ported to Firefox, thanks to the guidelines provided on the Mozilla Extension Workshop website.[42]
We advise using uBlock Origin as the ad-blocker of choice, to add to our systems, considering its status as the best open-source ad-blocker in the market.

API
Our application leverages the Flask framework for building the API. Flask offers a straightforward and flexible approach to web development, making it an excellent choice for the backend. And because it is a Python package it works well with the AI which will be written in Python.

AI
The AI will be written in Python using the following packages
PyTorch
PyTorch is our preferred framework for AI-related tasks due to its widespread support for training models and general ease of use. Its dynamic computational graph makes it an excellent choice for research and development.

Pandas
For handling data, we utilize Pandas, a powerful and widely supported library. Its ease of use and comprehensive functionality for loading and manipulating data make it an ideal choice for data processing tasks.

Scikit-Learn
Scikit-Learn is integrated into our application for testing and evaluating models. With good support for various machine learning algorithms and tools for model evaluation, it enhances the robustness of our AI components.

BERT / Hugging Face
Our choice of BERT over GPT-2 is driven by the specific needs of our application. BERT is tailored for sequence analysis, aligning with our focus, while GPT-2 excels in generating text based on sequences, which is less relevant to our objectives.
§5.2 Development 
In this section we discuss our journey developing our idea and how we did it.
§5.2.1 Extension
§5.2.1.1 Manifest
The manifest is where you configure the extension and what permissions and API endpoints it can access, so chrome can display what the extension can access (for security purposes).

our manifest looks like this:
{
  "manifest_version": 3,
  "name": "Bedrock",
  "version": "1.0",
  "description": "Preventing Scams...",
  "permissions": [
    "storage",
    "tabs",
    "webNavigation",
    "activeTab",
    "downloads"
  ],
  "host_permissions": [
    "*://*/*"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
  },
  "icons": {
    "16": "images/icon16.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "commands": {
    "openSettings": {
      "suggested_key": {
        "default": "Ctrl+Shift+S"
      },
      "description": "Open Extension Settings"
    }
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["jquery.js","content.js"]
    }
  ]
}

§5.2.1.2 UI/Frontend
The UI is written in HTML as it is the markup language supported by all browsers and easily used in combination with javascript, the programming language used by browser extensions.

§5.2.1.2.1 Extension Popup

Screenshots of the extension popup in both disabled and enabled states

Popup.html:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Extension Popup</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <div class="popup-container">
    <h3>Bedrock Scam Prevention</h3>
    <button id="enable-button" class="round-button">Enabled</button>
    <button id="settings-button">Settings</button>
  </div>
  <script src="popup.js"></script>
</body>
</html>



Popup.css
body {
    background-color: #f0f0f0;
  }
 
  .popup-container {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
 
  .round-button {
    border-radius: 50%;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
 
  .round-button.enabled {
    background-color: #4CAF50;
    color: #ffffff;
  }
 
  .round-button.disabled {
    background-color: #FF5733;
    color: #ffffff;
  }
 

Popup.js
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the current state from local storage
  chrome.storage.local.get(['enabled'], function (result) {
    const isEnabled = result.enabled || false;
    updateButtonStyle(isEnabled);
  });


  // Handle button click event
  document.getElementById('enable-button').addEventListener('click', function () {
    // Toggle the state
    chrome.storage.local.get(['enabled'], function (result) {
      const isEnabled = !result.enabled || false;
      updateButtonStyle(isEnabled);


      // Save the updated state to local storage
      chrome.storage.local.set({ 'enabled': isEnabled });
    });
  });


  // Function to update the button style based on the state
  function updateButtonStyle(isEnabled) {
    const button = document.getElementById('enable-button');
    button.textContent = isEnabled ? 'Enabled' : 'Disabled';
    button.classList.remove(isEnabled ? 'disabled' : 'enabled');
    button.classList.add(isEnabled ? 'enabled' : 'disabled');
    document.body.style.backgroundColor = isEnabled ? '#e0f7fa' : '#ffccbc'; // Change background color based on state
  }


  // Handle settings button click event
  document.getElementById('settings-button').addEventListener('click', function () {
    openSettingsPage();
  });
    // Function to open the settings page
    function openSettingsPage() {
      chrome.tabs.create({ url: 'settings.html' });
    }


});
§5.2.1.2.2 Settings Page

A Screenshot of the settings page

settings.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Extension Settings</title>
  <link rel="stylesheet" href="settings.css">
</head>
<body>
  <div class="sidenav">
    <a href="#general">General</a>
    <a href="#blocked-sites">Blocked Sites</a>
    <a href="#Download-settings">Download Settings</a>
  </div>


  <div class="main">
    <h3>Extension Settings</h3>


    <section id="general">
      <h4>General Settings</h4>
      <p>No general settings needed rn</p>
    </section>


    <section id="blocked-sites">
      <h4>Blocked Sites</h4>
      <div id="blocked-sites-content">
        <div id="blocked-sites-tabs">
          <button id="your-sites-tab">Your Blocked Sites</button>
          <button id="standard-sites-tab">Standard Blocked Sites</button>
        </div>
        <div id="blocked-sites-list"></div>
        <div>
          <input type="text" id="new-site-input" placeholder="Enter site URL">
          <button id="add-site-button">+</button>
          <button id="remove-site-button">-</button>
        </div>
      </div>
    </section>


    <!-- Add this section to your HTML -->
  <section id="Download-settings">
    <h4>Downloads settings</h4>
    <div id="blocked-extensions-content">
      <h5>Blocked File Extensions</h5>
      <div id="blocked-extensions-list"></div>
      <div>
        <input type="text" id="new-extension-input" placeholder="Enter file extension">
        <button id="add-extension-button">+</button>
        <button id="remove-extension-button">-</button>
      </div>
    </div>
  </section>




   
  </div>


  <script src="settings.js"></script>
</body>
</html>
Settings.css
body {
  font-family: Arial, sans-serif;
}


.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  padding-top: 20px;
}


.sidenav a {
  padding: 8px 8px 8px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
}


.sidenav a:hover {
  color: #f1f1f1;
}


.main {
  margin-left: 220px;
  padding: 16px;
}


h3, h4, h5 {
  color: #333;
}


/* Additional Styles for Blocked Sites and Blocked Extensions */
#blocked-sites-tabs, #blocked-extensions-content {
  margin-bottom: 10px;
}


#blocked-sites-tabs button, #blocked-extensions-content button {
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
}


#blocked-sites-list, #blocked-extensions-list {
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}


#blocked-sites-list div, #blocked-extensions-list div {
  margin-bottom: 5px;
  cursor: pointer;
}


#blocked-sites-list div:hover, #blocked-extensions-list div:hover {
  background-color: #e0e0e0;
}


#blocked-sites-list div.selected, #blocked-extensions-list div.selected {
  background-color: #add8e6;
}


#new-site-input, #new-extension-input {
  margin-right: 10px;
}


#add-site-button, #remove-site-button, #add-extension-button, #remove-extension-button {
  padding: 5px 10px;
  cursor: pointer;
}









settings.js
document.addEventListener('DOMContentLoaded', function () {


    // Blocked Sites
    const yourSitesTab = document.getElementById('your-sites-tab');
    const standardSitesTab = document.getElementById('standard-sites-tab');
    const blockedSitesList = document.getElementById('blocked-sites-list');
    const newSiteInput = document.getElementById('new-site-input');
    const addSiteButton = document.getElementById('add-site-button');
    const removeSiteButton = document.getElementById('remove-site-button');
    newSiteInput.value = '';
    // Load Your Blocked Sites on page load
    loadBlockedSites('your-sites');
 
    yourSitesTab.addEventListener('click', function () {
      loadBlockedSites('your-sites');
    });
 
    standardSitesTab.addEventListener('click', function () {
      loadBlockedSites('standard-sites');
    });
 
    addSiteButton.addEventListener('click', function () {
      const newSite = newSiteInput.value.trim();
      if (newSite) {
        addBlockedSite(newSite);
      }
    });
 
    removeSiteButton.addEventListener('click', function () {
      const selectedSite = getSelectedSite();
      if (selectedSite) {
        removeBlockedSite(selectedSite);
      }
    });
 
    // Function to load blocked sites based on the tab
    function loadBlockedSites(tab) {
      const sitesKey = tab === 'your-sites' ? 'yourBlockedSites' : 'standardBlockedSites';
      chrome.storage.local.get([sitesKey], function (result) {
        const blockedSites = result[sitesKey] || [];
 
        blockedSitesList.innerHTML = ''; // Clear the previous content
 
        if (blockedSites.length > 0) {
          blockedSites.forEach(site => {
            const listItem = createBlockedSiteItem(site);
            blockedSitesList.appendChild(listItem);
          });
        } else {
          blockedSitesList.textContent = 'No blocked sites.';
        }
      });
    }
 
    // Function to add a blocked site
    function addBlockedSite(site) {
      chrome.storage.local.get(['yourBlockedSites'], function (result) {
        const yourBlockedSites = result.yourBlockedSites || [];
        yourBlockedSites.push(site);
 
        chrome.storage.local.set({ 'yourBlockedSites': yourBlockedSites }, function () {
          loadBlockedSites('your-sites');
          newSiteInput.value = ''; // Clear the input field
        });
      });
    }
 
    // Function to remove a blocked site
    function removeBlockedSite(site) {
        chrome.storage.local.get(['yourBlockedSites'], function (result) {
          const yourBlockedSites = result.yourBlockedSites || [];
          const updatedSites = yourBlockedSites.filter(s => s !== site);
     
          chrome.storage.local.set({ 'yourBlockedSites': updatedSites }, function () {
            loadBlockedSites('your-sites'); // Reload the list after removing a site
            newSiteInput.value = ''; // Clear the input field
          });
        });
      }
     
 
    // Function to create a blocked site list item
    function createBlockedSiteItem(site) {
        const listItem = document.createElement('div');
        listItem.textContent = site;
       
        // Add a click event listener to handle selection
        listItem.addEventListener('click', function () {
          // Remove the selected class from all items
          const allItems = blockedSitesList.querySelectorAll('div');
          allItems.forEach(item => item.classList.remove('selected'));
     
          // Add the selected class to the clicked item
          listItem.classList.add('selected');
     
          // Set the selected site in the input field
          newSiteInput.value = site;
        });
     
        return listItem;
      }
 
    // Function to get the selected blocked site from the list
    function getSelectedSite() {
      const selectedElement = blockedSitesList.querySelector('.selected');
      return selectedElement ? selectedElement.textContent : null;
    }




    const blockedExtensionsList = document.getElementById('blocked-extensions-list');
    const newExtensionInput = document.getElementById('new-extension-input');
    const addExtensionButton = document.getElementById('add-extension-button');
    const removeExtensionButton = document.getElementById('remove-extension-button');
    newExtensionInput.value = '';
    loadBlockedExtensions();


    addExtensionButton.addEventListener('click', function () {
        const newExtension = newExtensionInput.value.trim();
        if (newExtension) {
            addBlockedExtension(newExtension);
        }
    });


    removeExtensionButton.addEventListener('click', function () {
        const selectedExtension = getSelectedExtension();
        if (selectedExtension) {
            removeBlockedExtension(selectedExtension);
        }
    });


    function loadBlockedExtensions() {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];


            blockedExtensionsList.innerHTML = ''; // Clear the previous content


            if (blockedExtensions.length > 0) {
                blockedExtensions.forEach(extension => {
                    const listItem = createBlockedExtensionItem(extension);
                    blockedExtensionsList.appendChild(listItem);
                });
            } else {
                blockedExtensionsList.textContent = 'No blocked file extensions.';
            }
        });
    }


    function addBlockedExtension(extension) {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];
            blockedExtensions.push(extension);


            chrome.storage.local.set({ 'extensiontypes': blockedExtensions }, function () {
                loadBlockedExtensions();
                newExtensionInput.value = ''; // Clear the input field
            });
        });
    }


    function removeBlockedExtension(extension) {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];
            const updatedExtensions = blockedExtensions.filter(e => e !== extension);


            chrome.storage.local.set({ 'extensiontypes': updatedExtensions }, function () {
                loadBlockedExtensions(); // Reload the list after removing an extension
                newExtensionInput.value = ''; // Clear the input field
            });
        });
    }


    function createBlockedExtensionItem(extension) {
        const listItem = document.createElement('div');
        listItem.textContent = extension;


        listItem.addEventListener('click', function () {
            const allItems = blockedExtensionsList.querySelectorAll('div');
            allItems.forEach(item => item.classList.remove('selected'));


            listItem.classList.add('selected');
            newExtensionInput.value = extension;
        });


        return listItem;
    }


    function getSelectedExtension() {
        const selectedElement = blockedExtensionsList.querySelector('.selected');
        return selectedElement ? selectedElement.textContent : null;
    }
  });


§5.2.1.2.3 Scam Score Popup

A screenshot of the scam score popup
aipopup.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'self'">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Popup</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }


        .gauge {
            width: 100%;
            max-width: 250px;
            font-family: "Roboto", sans-serif;
            font-size: 32px;
            color: #04b404;
        }


        .gauge__body {
            width: 100%;
            height: 0;
            padding-bottom: 50%;
            background: #00ff22;
            position: relative;
            border-top-left-radius: 100% 200%;
            border-top-right-radius: 100% 200%;
            overflow: hidden;
        }


        .gauge__fill {
            position: absolute;
            top: 100%;
            left: 0;
            width: inherit;
            height: 100%;
            background: #ff0000;
            transform-origin: center top;
            transform: rotate(0.25turn);
            transition: transform 0.2s ease-out;
        }


        .gauge__cover {
            width: 75%;
            height: 150%;
            background: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);


            /* Text */
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 25%;
            box-sizing: border-box;
        }


        .message {
            margin-top: 20px;
            font-size: 16px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="gauge">
        <div class="gauge__body">
          <div class="gauge__fill"></div>
          <div class="gauge__cover"></div>
        </div>
      </div>
    <div class="message" id="message"></div>


    <script src="aipopup.js"></script>
</body>
</html>

aipopup.js
function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }


  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value*100
  )}%`;
}






 


document.addEventListener('DOMContentLoaded', function () {
    // Get data from the background script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        const gaugeElement = document.querySelector(".gauge");
        setGaugeValue(gaugeElement, request.percentage/100);
        // Set the message based on the class
        if (request.class === 0) {
            document.getElementById('message').textContent = 'This message is probably not a scam';
            document.body.style.backgroundColor = '#ccffcc'; // Light green background for class 0
        } else if (request.class === 1) {
            document.getElementById('message').textContent = 'This message is probably a scam';
            document.body.style.backgroundColor = '#ffcccc'; // Light red background for class 1
        }
    });
});



§5.2.1.2.4 Download Warning popup

A screenshot of the download warning popup

downloadpopup.html
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Warning</title>
    <style>
        body {
            width: 300px;
            margin: 0;
            padding: 10px;
            font-family: 'Arial', sans-serif;
        }


        h3 {
            color: #FF0000;
        }


        p {
            margin-bottom: 10px;
        }


        span {
            font-weight: bold;
        }


        button {
            background-color: #4CAF50;
            color: white;
            padding: 8px 15px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }


        #resume {
            background-color: #4CAF50;
        }


        #cancel {
            background-color: #f44336;
        }


        button:hover {
            opacity: 0.8;
        }


        script {
            display: none;
        }
    </style>
</head>


<body>
    <h3>Download Warning</h3>
    <p>Filename: <span id="filename"></span></p>
    <p>Reason: <span id="reason"></span></p>
    <button id="resume">Resume Download</button>
    <button id="cancel">Cancel Download</button>


    <script src="downloadpopup.js"></script>
</body>


</html>
downloadpopup.js
document.addEventListener('DOMContentLoaded', function () {
    // Get parameters from the background script
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        document.getElementById('filename').innerText = message.filename;
        document.getElementById('reason').innerText = message.reason;


        // Add click event listeners to the resume and cancel buttons
        document.getElementById('resume').addEventListener('click', function () {
            chrome.downloads.resume(message.downloadId);
            window.close();
        });


        document.getElementById('cancel').addEventListener('click', function () {
            chrome.downloads.cancel(message.downloadId);
            window.close();
        });
    });
});




§5.2.1.2.5 Error popup

A Screenshot of the error popup

sometimes the button for scanning emails bugs out and shows up on another part of gmail, when this happens and the button gets clicked the error popup shows.

gmailerror.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail Error</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }


        .error-message {
            color: #d9534f;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }


    </style>
</head>
<body>
    <div class="error-message">
        Couldn't find subject or message, please open an email or reload Gmail.
    </div>
   
</body>
</html>




§5.2.1.2.6 Thank you page
We added a thank you page to show on installation and recommend to install uBlock Origin and to encourage the user to look around in the extension’s settings.

thankyou.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      color: #333;
      margin: 0;
      padding: 20px;
      text-align: center;
    }


    h2 {
      color: #4285f4;
    }


    p {
      font-size: 16px;
    }


    ul {
      list-style-type: none;
      padding: 0;
    }


    li {
      margin-bottom: 10px;
    }


    a {
      color: #4285f4;
text-decoration: none;
}


a:hover {
  text-decoration: underline;
}
</style>
</head>
<body>
<h2>Thank you for installing Bedrock!</h2>
<p>Here are some recommendations:</p>
<ul>
<li>Install uBlock Origin: <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank">uBlock Origin</a></li>
<li>Add blocked sites yourself: <a href="settings.html#blocked-sites" target="_blank">Blocked Sites</a></li>
<li>Try out the scam detector in your Gmail: Visit <a href="https://mail.google.com/" target="_blank">Gmail</a></li>
</ul>
</body>
</html>

§5.2.1.2.7 Warning page
A warning page which shows when the user tries to visit a site which is on the blacklist.

warning.html
<!DOCTYPE html>
<html>
<head>
  <title>Warning</title>
  <style>
    /* Your styles here */
  </style>
  <script src="warning.js"></script>
</head>
<body>
  <h2>The site you tried to visit was flagged as malicious.</h2>
  <p>Would you like to proceed?</p>
  <button id="proceed-button">Back To google</button>
 
</body>
</html>



warning.js
document.addEventListener('DOMContentLoaded', function () {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString).get('url');
  const originalUrl = decodeURIComponent(urlParam);


    document.getElementById('proceed-button').addEventListener('click', function () {
      // Go back to Google
      chrome.tabs.update({ url: 'https://www.google.com' });


      // Set bypass to false
      chrome.storage.local.set({ [bypassKey]: false });
    });


   
});



§5.2.1.3 Injection
Because we needed to inject a button into the Gmail page to implement the injection of the button we had to implement a content script. Because the structure of the Gmail webpage is very complicated, and we weren’t able to figure out how to inject a button that worked, we used parts of gmail.js[32] and adapted it to work as a content script, because gmail.js relies on jQuery we also had to include jQuery as a content script in the extension.

§5.2.1.3.1 content.js
var toolbar = function() {
  var tb = $("[gh='mtb']");


  while($(tb).children().length === 1){
      tb = $(tb).children().first();
  }


  return tb;
};


var add_toolbar_button = function(content_html, onClickFunction, styleClass) {
  var basicLeftStyle = "lS ";
  var defaultLeftStyle = "T-I-ax7 L3";


  return create_generic_toolbar_button(content_html, onClickFunction, basicLeftStyle, defaultLeftStyle, styleClass, toolbar());
};


var create_generic_toolbar_button = function(content_html, onClickFunction, basicStyle, defaultStyle, styleClass, selector) {
  var container = $(document.createElement("div"));
  container.attr("class","G-Ni J-J5-Ji");


  var button = $(document.createElement("div"));
  var buttonClasses = "T-I J-J5-Ji gmailjs gmailjs-scan-button ";
  if(styleClass !== undefined &&
      styleClass !== null &&
      styleClass !== ""){
      buttonClasses += basicStyle+styleClass;
  }else{
      buttonClasses += basicStyle+defaultStyle;
  }
  button.attr("class", buttonClasses);
  button.attr("role", 'button')


  button.html(content_html);
  button.click(onClickFunction);


  var content = $(document.createElement("div"));
  content.attr("class","asa");


  container.html(button);


  selector.append(container);


  return container;
};


var email_subject = function () {
  var e = $(".hP");


  for(var i=0; i<e.length; i++) {
      if($(e[i]).is(":visible")) {
          return $(e[i]);
      }
  }


  return $();
};


var email_body = function() {
  return $(".a3s.aiL");
};


var checkbutton = function() {
  var hasScanButton = toolbar().children().find('div.gmailjs-scan-button').length > 0;
  return hasScanButton
}


function requestApi(string) {
  return new Promise((resolve, reject) => {
      fetch('http://localhost:333/process_string', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input_string: string })
      })
      .then(response => response.json())
      .then(data => {
          resolve(data);
      })
      .catch(error => {
          console.error('Error:', error);
          reject(error);
      });
  });
}


async function processString(string) {
  try {
      const response = await requestApi(string);
      // Assuming the response has properties .a and .b, modify as needed
      const result = {
          a: response.a,
          b: response.b
      };
      return result;
  } catch (error) {
      console.error('Error processing string:', error);
      // You might want to handle the error or return a default object here
      return { a: 'err', b: 'err' };
  }
}






function addButton() {


if(!checkbutton()){
  add_toolbar_button(
    'Scan For Scam',
    async function(){
      try{
        const subject = await email_subject().text().toString();
        try{
          var body = await email_body().text();
        }
        catch{
          var body = await email_body().html()
        }
        var body = await body.toString()
        if ((subject === undefined || subject === null || subject === ""||subject === " ") && (body === undefined || body === null || body === ""|| body === " ")){
          await chrome.runtime.sendMessage({ action: 'showErrorPopup' });
          return
        }
        const string = `subject: ${subject} message: ${body}`;
        var data = await  processString(string);
        await chrome.runtime.sendMessage({ action: 'showPopupWithData', data: data });
      }
      catch(error){
        console.log(error)
        chrome.runtime.sendMessage({ action: 'showErrorPopup' });
      }
     


  },
  undefined
  );
}
 


}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'addButton') {
    addButton();
  }
});

§5.2.1.4 Backend
No large backend API is needed for this Extension as it only needs two API endpoints, one with the preselected website blacklist and one with the AI model, as discussed in the API heading. The other things can be handled locally, (the preselected website blacklist could be handled locally and be updated every update of the extension, but an API would be a more reliable way to provide an up-to-date list of phishing/scam sites). The background.js file is in charge of handling the local backend and events.

background.js has the following event listeners:
webNavigation.onBeforeNavigate
to block sites in the private/local blacklist
to block sites in the public blacklist we copied from GitHub [37]
webNavigation.onHistoryStateUpdated
to inject things into websites (mail.google.com)
downloads.onChanged
to give popup with vulnerable files
runtime.onInstalled
show thankyou.html on installation
runtime.onMessage
show error popup (when API didn’t work or other issues occurred)
show scam-score popup



§5.2.1.4.1 Background.js
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = new URL(details.url);
    const fullDomain = url.hostname;
    const mainDomain = getMainDomain(fullDomain);
    updateblacklist()
   
 
    // Check local blacklist
    chrome.storage.local.get(['standardBlockedSites'], function (sitess){
    chrome.storage.local.get(['yourBlockedSites'], function (sites) {
      chrome.storage.local.get(['enabled'], function(result) {
        const enabled = result.enabled;
        if (enabled){
          const localBlacklist = sites.yourBlockedSites || [];
          const publicBlacklist = sitess.standardBlockedSites || [];
          if (localBlacklist.includes(fullDomain) || localBlacklist.includes(mainDomain)||publicBlacklist.includes(fullDomain) || publicBlacklist.includes(mainDomain)) {
              // Redirect to warning page
              const warningUrl = chrome.runtime.getURL(`warning.html?url=${encodeURIComponent(details.url)}`);
              chrome.tabs.update(details.tabId, { url: warningUrl });
          }
        }
       
      });    
    });  
    });
});
 
async function updateblacklist() {
  const publicblacklist = await requestApi();
  chrome.storage.local.set({'standardBlockedSites':publicblacklist.sites})
}


async function requestApi() {
  return await fetch('http://localhost:333/get_sitelist', {
      method: 'get',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .catch(error => {
      console.error('Error:', error);
      throw error; // Re-throw the error to maintain consistent error handling
  });
}




  // Function to get the main domain (without subdomains)
  function getMainDomain(domain) {
    const parts = domain.split('.');
    if (parts.length > 2) {
      return parts.slice(1).join('.');
    } else {
      return domain;
    }
  }
 


chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    const url = new URL(details.url);
    // Check if the URL is on mail.google.com
    if (url.hostname === 'mail.google.com') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'addButton' });
      });
    }
 
});




chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.storage.local.set({ 'enabled': true });
    var harmfulFileTypes = ['.exe', '.bat', '.cmd', '.js', '.vbs', '.ps1', '.jar', '.msi', '.dll', '.scr'];
    chrome.storage.local.set({'extensiontypes': harmfulFileTypes})
    chrome.tabs.create({url: chrome.runtime.getURL('thankyou.html')});
  }
  else if (details.reason === "update"){
    //var harmfulFileTypes = ['.exe', '.bat', '.cmd', '.js', '.vbs', '.ps1', '.jar', '.msi', '.dll', '.scr'];
    //chrome.storage.local.set({'extensiontypes': harmfulFileTypes})
  }
});


chrome.downloads.onChanged.addListener(function (item) {
  chrome.storage.local.get(['enabled'], function(result) {
    chrome.storage.local.get(['extensiontypes'], function(results) {
    const enabled = result.enabled;
    const harmfulFileTypes = results.extensiontypes;
    if (enabled){
      for (var i = 0; i < harmfulFileTypes.length; i++) {
          var filetype = harmfulFileTypes[i];


          // Check if the file extension is in the list or if it has an LRM in the name
          if (item.filename.current.endsWith(filetype) || item.filename.current.includes('\u200E')) {
              // Pause download and show download popup
              showDownloadPopup(item);
              chrome.downloads.pause(item.id);
              break;
          }
      }
    }});
    });
});


function showDownloadPopup(item) {
  // Create a new window for the download popup
  chrome.windows.create({
      url: chrome.runtime.getURL('downloadpopup.html'),
      type: 'popup',
      width: 400,
      height: 300
  }, function (window) {
      // Wait for the window to finish loading before sending the message
      chrome.tabs.onUpdated.addListener(function onUpdated(tabId, changeInfo) {
          if (tabId === window.tabs[0].id && changeInfo.status === 'complete') {
              // Send message to the popup window
              chrome.tabs.sendMessage(tabId, {
                  filename: item.filename.current,
                  reason: item.filename.current.includes('\u200E') ? 'LRM' : item.filename.current.split('.').pop(),
                  downloadId: item.id
              });


              // Remove the listener after sending the message
              chrome.tabs.onUpdated.removeListener(onUpdated);
          }
      });
  });
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'showErrorPopup') {
    // Open the popup
    chrome.windows.create({
      url: chrome.runtime.getURL('gmailerror.html'),
      type: 'popup',
      width: 400,
      height: 300
  });
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'showPopupWithData') {
      const data = request.data;
      // Process the data as needed and show the popup
      showPopupWithData(data);
  } else if (request.action === 'showErrorPopup') {
      // Handle showing the error popup
      showErrorPopup();
  }
});


function showPopupWithData(data) {
  chrome.windows.create({
    url: chrome.runtime.getURL('aipopup.html'),
    type: 'popup',
    width: 289,
    height: 255
}, function (window) {
    // Wait for the window to finish loading before sending the message
    chrome.tabs.onUpdated.addListener(function onUpdated(tabId, changeInfo) {
        if (tabId === window.tabs[0].id && changeInfo.status === 'complete') {
            // Send message to the popup window
            chrome.tabs.sendMessage(tabId, {
                class: data.a,
                percentage: data.b,
            });


            // Remove the listener after sending the message
            chrome.tabs.onUpdated.removeListener(onUpdated);
        }
    });
});
}

§5.2.1.5 Issues we ran into

ISSUE
SOLVED BY
Chrome manifest versions

Most tutorials, information on online forums and ChatGPT are for the v2 manifest, which isn’t supported anymore. The v3 manifest is much more restrictive in nature, as it allows a lot less while requiring a lot more defining permissions in the manifest.json file. 
Fixed by going to the Google page for migrating to V3 [31]


Promises being annoying

sometimes we had to call a variable from storage or the API when you just define it like const sth = request() it returns a promise, which of course wouldn’t work in our use case
using async/await or callback functions
Gmail annoying with CSS classes

The button we tried adding to the action bar at the top of the email wasn’t clickable and just wouldn’t work
looking at how gmail.js[32] implemented the functionality and adapted it to our use case.
Gmail.js required jQuery, and adapting it required reading their documentation[35]
ChatGPT Not Understanding

For some reason is it impossible to make ChatGPT understand me, so if the code it gave me was even partially working we had to rewrite the other part
Not using ChatGPT[33] and reading the chrome extensions API documentation[34]
Sjors Being unable to figure out CSS

We tried making a speedometer style indicator scam-percentage for the popup for the scan email functionality
Using CSS from codepen.io [36] and adapting it to fit our use case


§5.2.2 AI detector
§5.2.2.1 Issues

ISSUE
SOLVED BY
Inaccuracy because of limited training data
adding more training data
Inaccuracy because of type of trainingdata
adding pre-trained model (BERT)
Inaccuracy because of type of training data
[did not fix this] adding different types of emails

We did not fix this because it would require the collection of hundreds of thousands of emails, we don’t have the time nor resources to do so.
API returning before it finished predicting
flask_cors package


§5.2.2.2 Training
Initially we only trained an AIon the data we collected from various sources, in total we had about 12000 examples of scam and non-scam emails and chats, the problem with this was that it wouldn’t give accurate predictions on other kinds of texts (transcripts of speeches, etc.) so added the BERT pre-trained model for broader sequence analysis.


Training the first version of our AI was fairly quick to be trained as it only involved a few thousand text and email examples, but when we added BERT, it took a bit more than two hours to train on an RTX 3060 12GB graphics card, which we used for cuda acceleration of the training.

§5.2.2.3 Final product
§5.2.2.3.1 train_model.py:
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
from transformers import BertTokenizer, BertForSequenceClassification
import torch
import torch.nn as nn
import torch.optim as optim
from tqdm import tqdm


# Check if CUDA (GPU) is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f'Using device: {device}')


# Load the data
data_path = './data.xlsx'
df = pd.read_excel(data_path)


# Preprocess the data
X = df['Text'].astype(str).values
y = df['Class'].values


# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Tokenize text data using BERT tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')


X_train_tokens = tokenizer(X_train.tolist(), padding=True, truncation=True, return_tensors='pt')
X_test_tokens = tokenizer(X_test.tolist(), padding=True, truncation=True, return_tensors='pt')


# Convert to PyTorch tensors
X_train_tensor = torch.tensor(X_train_tokens['input_ids']).to(device)
y_train_tensor = torch.tensor(y_train, dtype=torch.float32).to(device)
X_test_tensor = torch.tensor(X_test_tokens['input_ids']).to(device)
y_test_tensor = torch.tensor(y_test, dtype=torch.float32).to(device)


# Create PyTorch dataset and dataloaders
class TextDataset(Dataset):
    def __init__(self, input_ids, labels):
        self.input_ids = input_ids
        self.labels = labels


    def __len__(self):
        return len(self.input_ids)


    def __getitem__(self, idx):
        return self.input_ids[idx], self.labels[idx]


train_dataset = TextDataset(X_train_tensor, y_train_tensor)
test_dataset = TextDataset(X_test_tensor, y_test_tensor)


train_dataloader = DataLoader(train_dataset, batch_size=32, shuffle=True)
test_dataloader = DataLoader(test_dataset, batch_size=32, shuffle=False)


# Define a BERT-based model for sequence classification
class ScamDetectorBERT(nn.Module):
    def __init__(self):
        super(ScamDetectorBERT, self).__init__()
        self.bert = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=1)


    def forward(self, input_ids):
        output = self.bert(input_ids)
        return torch.sigmoid(output.logits)


# Instantiate the BERT-based model
model = ScamDetectorBERT().to(device)


# Train the BERT-based model
criterion = nn.BCELoss()
optimizer = optim.AdamW(model.parameters(), lr=2e-5)


epochs = 3  # Adjust as needed


# Use tqdm to add a progress bar
for epoch in range(epochs):
    epoch_loss = 0
    progress_bar = tqdm(train_dataloader, desc=f'Epoch {epoch + 1}/{epochs}', unit='batch', leave=False)
   
    for input_ids, labels in progress_bar:
        optimizer.zero_grad()
        outputs = model(input_ids)
        loss = criterion(outputs.view(-1), labels.view(-1))
        loss.backward()
        optimizer.step()
       
        epoch_loss += loss.item()
        progress_bar.set_postfix(loss=loss.item())


    average_loss = epoch_loss / len(train_dataloader)
    print(f"Epoch {epoch + 1}/{epochs} - Average Loss: {average_loss:.4f}")


# Save the trained model
torch.save(model.state_dict(), './model/scam_detector_model.pth')
print("Model saved successfully.")



§5.2.2.3.2 model.py:
import torch
import torch.nn as nn
from transformers import BertForSequenceClassification


class ScamDetectorBERT(nn.Module):
    def __init__(self):
        super(ScamDetectorBERT, self).__init__()
        self.bert = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=1)


    def forward(self, input_ids):
        output = self.bert(input_ids)
        return torch.sigmoid(output.logits)

§5.2.2.3.3 predict.py
import torch
from transformers import BertTokenizer
from model import ScamDetectorBERT


# Check if CUDA (GPU) is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f'Using device: {device}')


# Load the trained model
model_path = './model/scam_detector_model.pth'
loaded_model = ScamDetectorBERT()
loaded_model.load_state_dict(torch.load(model_path, map_location=device))
loaded_model.to(device)
loaded_model.eval()


# Tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')


# Use the trained BERT-based model for predictions
def predict_text(text, model, tokenizer, threshold=0.6):
    text = ''.join(char for char in text if char.isprintable())
    tokenized_text = tokenizer(text, return_tensors='pt', truncation=True, max_length=512, padding=True)
   
    input_ids = tokenized_text['input_ids'].to(device)
    with torch.no_grad():
        output = model(input_ids)
   
    certainty_score = output.item() * 100  # Convert to percentage
    predicted_class = 1 if output.item() >= threshold else 0
    return certainty_score, predicted_class


# Read input text from file
input_file_path = './input.txt'
with open(input_file_path, 'r', errors='ignore') as file:
    input_text = file.read()


temp_scores = predict_text(input_text, loaded_model, tokenizer)
certainty_score = temp_scores[0]
scam_score = temp_scores[1]
print(f"Scam Score: {certainty_score:.2f}% \nClass: {scam_score}")


§5.2.2.3.4 Model
The final trained model can be downloaded at 

https://drive.google.com/file/d/12OC1KOKw7Cpeuf56scNeVTAGMFRFYLCj/view?usp=sharing 
§5.2.2.4 API
Implementing an API so that the extension can communicate with the AI and get predictions on emails. The api code is like this:
§5.2.2.4.1 app.py:
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
from predict import main


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/process_string', methods=['POST'])
def process_string():
    data = request.get_json()
    input_string = data.get('input_string')
    output = main(input_string)
   
    a = output[0]
    b = round(output[1])


    result = {'a': a, 'b': b}
    return jsonify(result)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=333)




§5.2.2.4.2 predict.py (V2):
to make predict.py compatible with the api code it had to be edited to this:
import torch
from transformers import BertTokenizer
from model import ScamDetectorBERT


def main(input_text):
    # Check if CUDA (GPU) is available
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print(f'Using device: {device}')


    # Load the trained model
    model_path = './model/scam_detector_model.pth'
    loaded_model = ScamDetectorBERT()
    loaded_model.load_state_dict(torch.load(model_path, map_location=device))
    loaded_model.to(device)
    loaded_model.eval()


    # Tokenizer
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')


    # Use the trained BERT-based model for predictions
    def predict_text(text, model, tokenizer, threshold=0.6):
        text = ''.join(char for char in text if char.isprintable())
        tokenized_text = tokenizer(text, return_tensors='pt', truncation=True, max_length=512, padding=True)
       
        input_ids = tokenized_text['input_ids'].to(device)
        with torch.no_grad():
            output = model(input_ids)
       
        certainty_score = output.item() * 100  # Convert to percentage
        predicted_class = 1 if output.item() >= threshold else 0
        return certainty_score, predicted_class




    temp_scores = predict_text(input_text, loaded_model, tokenizer)
    certainty_score = temp_scores[0]
    scam_score = temp_scores[1]
    return scam_score, certainty_score

§5.2.2.4.3 model.py:
model.py remained the same
import torch
import torch.nn as nn
from transformers import BertForSequenceClassification


class ScamDetectorBERT(nn.Module):
    def __init__(self):
        super(ScamDetectorBERT, self).__init__()
        self.bert = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=1)


    def forward(self, input_ids):
        output = self.bert(input_ids)
        return torch.sigmoid(output.logits)



Chapter 6: Discussion 

The findings of our research highlight the potential of our anti-scam email filtering system, demonstrating its capability to prevent phishing attempts and enhance overall email security. However, several aspects warrant further discussion and future directions for improvement.

§6.1 Problems
The current problems with the application in its current state, are:
The AI currently flags “normal” and promotional emails from companies between 40-80% scam we want that to be a smaller range and a lower number, as these of course aren’t really scams
There are a lot of differences between the different UI’s as they look very different, an improvement would be one CSS file for example

§6.2 User Feedback and Training Data
One crucial avenue for future research involves engaging with test users to gather valuable feedback. Continuous interaction with users will not only provide insights into the user experience but also allow us to refine our model based on real-world scenarios. Additionally, obtaining diverse training data, including various email types, will contribute to the model's robustness and adaptability.

§6.3 Efficacy Metrics
To comprehensively assess the system's performance, metrics on its effectiveness in preventing scams and false positive rates should be systematically collected. Analyzing these metrics will help us fine-tune the model and optimize its parameters to achieve higher accuracy in scam detection.


§6.4 Code Efficiency and Response Times
Efficiency is paramount in the deployment of any security system. Future work should focus on optimizing the code to enhance response times and reduce computational overhead. This optimization will contribute to seamless integration of our anti-scam system into email platforms without compromising performance.


§6.5 Model Accuracy
Improving the accuracy of our machine-learning model remains a top priority. Incorporating advanced techniques and refining the algorithm based on continuous learning from user feedback and evolving scam tactics will further strengthen the system's ability to discern malicious emails.

§6.6 Expanded Features and Application Support
Expanding the range of covered scams and introducing support for additional email applications, such as Outlook, Discord, and Facebook, will broaden the system's applicability. Ensuring compatibility with various platforms will enhance the reach and impact of our anti-scam solution.

§6.7 Text from Image Scan Support
Given the increasing use of image-based communication on platforms like Instagram and Facebook, integrating text extraction from images is crucial. Future research should explore methods to incorporate image-based content analysis, enabling our system to detect scams embedded within images.

§6.8 Resource Allocation
To enhance the system's performance, investing in more resources is essential. Deploying a fast server equipped with advanced hardware, such as the Nvidia A100 80GB, will significantly enhance processing speed and enable real-time scam detection, providing a more robust defence against evolving threats.

§6.9 Phishing prevention
Improved phishing prevention as an additional avenue for further enhancement involves implementing advanced measures beyond traditional blacklist-based blocking. A promising strategy is to employ page comparison techniques, where the login pages of well-known websites are analyzed in real time against the loading pages in incoming emails. By detecting inconsistencies or irregularities in the displayed login pages, our system can proactively identify potential phishing attempts and thwart them before users fall victim to such deceptive tactics. This proactive approach adds an extra layer of security by addressing emerging phishing techniques that may not be present in static blacklists, thus fortifying our anti-scam system against evolving cyber threats. Continued exploration of these advanced techniques will contribute to the comprehensive and proactive nature of our email security solution.
Chapter 7: Conclusion 
Tieback to the main question: Can internet scams on social platforms be prevented using browser extensions?

The answer is, yes, to some extent.
We have made a program that gives advice/ratings to a user on whether a piece of text/installation could be a potential scam. In the end, it is up to the user what the user does with our advice. 

The 2nd thing is that scams gradually get better and more scams evolve as we are speaking. It is impossible, for us, to advise or help prevent the user from getting scammed for every scam.

- How do internet scams on social platforms work?
There is a wide variety of scams that go around on all social media platforms. It depends on what social medium you are because every medium has its own audience/age group that the scammers are trying to target.

- What are the current preventing Without Computer Science?
Again, there is a variety of prevention systems. One of the few prevention systems for preventing scams online is people telling others (especially high-risk individuals) what scams are common at that time, so they can detect it themselves and tell others about the scam.

- What are the current prevention systems with computer science?
Anti-Viruses such as Norton, Bitdefender, McAfee and others try to prevent the installation of malware such as password stealers, extortion malware, crypto miners and other pieces of malware. Browser extensions like Ublock origin (blocking advertisements[24]) and guard.io (Online phishing and malware download prevention[25]) contribute a lot to preventing scams as they block users from seeing and visiting malicious advertisements, but as these browser extensions aren’t very popular among the population, they remain relatively unused.

- What is our idea to prevent internet scams?
We have made an online scam prevention system. It is a browser extension, which blocks malicious downloads, blocks ads, scam emails/messages features and malicious websites.
 
- How do Chrome extensions work?

Chrome extensions are webpages that run in the background. The extension has more permissions than the average website, as it can access Chrome through the extensions API. These extensions work with so-called event listeners that wait until a certain event occurs, such as clicking a button, installing something etc, and then a certain action will be performed.




- How does natural language processing work?

Natural language processing (NLP) is a type of artificial intelligence that has the primary goal of helping machines to understand, interpret, and generate human language in a way that is both meaningful and contextually relevant. NLP combines insights from linguistics, computer science, and cognitive psychology to develop algorithms and models that empower computers to work with language data.


Chapter 8: Sources
[-2] Google. (n.d.). Making Chrome extensions more private and secure. Retrieved from 
https://blog.google/products/chrome/making-chrome-extensions-more-private-and-secure/ 
[-1] Proofpoint. (n.d.). Email Spoofing. Retrieved from  https://www.proofpoint.com/us/threat-reference/email-spoofing 
[0]MalwareTips. (n.d.). Remove Tech Support Scam Popups. Retrieved from  https://malwaretips.com/blogs/remove-tech-support-scam-popups/ 

[1] Oxford Learner's dictionaries (n.d.). Retrieved from
https://www.oxfordlearnersdictionaries.com/definition/american_english/phishing#:~:text=noun-,noun,money%20from%20them%20compare%20pharming  
[2] Wikipedia. (n.d.). Spoofing Attack. Retrieved from 
https://en.wikipedia.org/wiki/Spoofing_attack   
[3] Fraud.org. (2021). Top Ten Scams 2021. Retrieved from 
https://fraud.org/top-ten-scams-2021/  
[4] Miramirkhani, N., Ghasemisharif, S., & Tavallaee, M. (2017). A Data-driven Analysis of Spear Phishing Attacks on Twitter. NDSS Symposium. Retrieved from 
https://www.ndss-symposium.org/wp-content/uploads/2017/09/ndss2017_03B-1_Miramirkhani_paper.pdf    
[5] Jim Browning Youtube Channel (since 2014), retrieved from 
https://www.youtube.com/channel/UCBNG0osIBAprVcZZ3ic84vw     
[6] Romance Scams (n.d.) retrieved from 
https://www.romancescams.org/  
[7] Official website of Homeland Security (USA) , (05/02/2022) , retrieved from https://www.ice.gov/features/romance-scams#:~:text=Many%20of%20these%20romance%20scams,who%20are%20looking%20for%20love 
[8]  Unit 21. (n.d.). Romance Fraud. Retrieved from 
https://www.unit21.ai/fraud-aml-dictionary/romance-fraud 
[9] Find a Psychologist. (n.d.). Parasocial Relationships: The Nature of Celebrity Fascinations. Retrieved from
https://www.findapsychologist.org/parasocial-relationships-the-nature-of-celebrity-fascinations/#:~:text=Parasocial%20relationships%20are%20one%2Dsided,unaware%20of%20the%20other's%20existence 
[10] FTC. (n.d.). What's a Money Mule Scam? Retrieved from 
https://www.youtube.com/watch?v=FLFuuxhx3RQ 
[11]  FTC. (n.d.). Job Scams. Retrieved from
https://consumer.ftc.gov/articles/job-scams 
[12] Anura. (n.d.). Fraud Detection: Online Survey Scams. Retrieved from  https://www.anura.io/blog/fraud-detection-online-survey-scams  
[13] Tennessee Attorney General. (n.d.). Investment Scams. Retrieved from 
https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/resources/materials/investment-scams.html 
[14] Federal Trade Commision, (March 2023), Job scams, retrieved from https://consumer.ftc.gov/articles/job-scams  
[15] Federal Trade Commision, (March 4th 2023), Money Mule scams, retrieved from
https://consumer.ftc.gov/consumer-alerts/2020/03/whats-money-mule-scam 
[16] Consumentenbond nepwinkels herkennen, (October 2023), retrieved from https://www.consumentenbond.nl/online-kopen/nep-webwinkels 
[17]  Scamwatch. (n.d.). Product and Service Scams. Retrieved from 
https://www.scamwatch.gov.au/types-of-scams/product-and-service-scams  
[18] Scamwatch. (n.d.). False Billing: John Updated Supplier Details and It Ended Up Costing Thousands. Retrieved from
https://www.scamwatch.gov.au/protect-yourself/real-life-stories/false-billing-john-updated-supplier-details-and-it-ended-up-costing-thousands 
[19] 419 Eater. (n.d.). Scammer Interview. Retrieved from https://www.419eater.com/html/user_subs/interview/scammer_interview.htm 
[20] Maldevel. (n.d.). Email Harvester. Retrieved from 
https://github.com/maldevel/EmailHarvester/blob/master/EmailHarvester.py 
[21] Hackmageddon. (2023, March 2). The Biggest Data Breaches of 2023. Retrieved 
https://www.hackmageddon.com/2023/03/02/the-biggest-data-breaches-of-2023/ 
[22]Hackmageddon. (2023, September 26). 1-15 August 2023 Cyber Attacks Timeline. Retrieved from
https://www.hackmageddon.com/2023/09/26/1-15-august-2023-cyber-attacks-timeline/  
[23] Reddit. (n.d.). My local grocery store began posting warnings about phishing attempts. Retrieved from
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FScams%2Fcomments%2F173b6zw%2Fmy_local_grocery_store_began_posting_warnings_at%2F&psig=AOvVaw2DbqlW97ESOChon0c5YFEA&ust=1703274903238000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMje3c-noYMDFQAAAAAdAAAAABAD 
[24] uBlock Origin. (n.d.). Retrieved from
https://ublockorigin.com/ 
[25] Guard.io. (n.d.). About Guard.io. Retrieved from
https://guard.io/about/  
[26] Right Inbox. (n.d.). How Does Gmail's Spam Filter Work? Retrieved from 
https://www.rightinbox.com/blog/gmail-spam-filter#:~:text=Gmail%20analyzes%20not%20only%20the,for%20too%20many%20trigger%20words  
[27]  Fortinet. (n.d.). Spam Filters. Retrieved from  
https://www.fortinet.com/resources/cyberglossary/spam-filters 
[28] uBlock. (n.d.). uBlock Manifesto. Retrieved from 
https://github.com/gorhill/uBlock/blob/master/MANIFESTO.md 
[29] The Guardian. (2021, June 27). John McAfee Obituary. Retrieved from 
https://www.theguardian.com/us-news/2021/jun/27/john-mcafee-obituary  
[30] Google Books. (n.d.). Retrieved from https://books.google.nl/books?id=YcPvV893aXgC&pg=PA1030&redir_esc=y#v=onepage&q&f=false  
[31] Migrating from manifest v2 to v3
https://developer.chrome.com/docs/extensions/develop/migrate 
[32] gmail.js on github 
https://github.com/KartikTalwar/gmail.js/ 
[33] ChatGPT
https://chat.openai.com
[34] Extensions documentation
https://developer.chrome.com/docs/extensions/reference/api 
[35] jQuery API Documentation
https://api.jquery.com/ 
[36] Responsive css gauge
https://codepen.io/dcode-software/pen/zYGVXyX 
[37] malicious sites list
https://github.com/mitchellkrogza/The-Big-List-of-Hacked-Malware-Web-Sites/blob/master/.dev-tools/_strip_domains/domains.txt 
[38] https://medium.com/@ritidass29/the-essential-guide-to-how-nlp-works-4d3bb23faf76 
[39] https://medium.com/@samia.khalid/bert-explained-a-complete-guide-with-theory-and-tutorial-3ac9ebc8fa7c 
[40] Chrome extensions
https://developer.chrome.com/docs/extensions/mv2 
[41] Discord game scam
https://www.youtube.com/watch?v=FLFuuxhx3RQ 
[42] Porting extension to firefox
https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/ 

Attachment 1: Abbreviation list
API - Application programming interface
BERT - Bidirectional Encoder Representations from Transformers
covid-19 - Coronavirus Infection Disease of 2019
css - Cascading Style Sheets 
DM - Direct Message
e-commerce - electronic commerce
email - electronic email
fullz - full personal information list
GB - gigabyte
gpt - Generative Pre-training Transformer
html - HyperText Markup Language
it - information technology
js - JavaScript
NLP - Natural Language Processing/Natural Language Processor
PWS - Profielwerkstuk
RTX - Nvidia GeForce RTX (a series of Nvidia graphic cards in the Nvidia GeForce brand)
SEO - Search Engine Optimization
sth - Something
uBO - uBlock Origin
UI - User Interface
URL - Uniform Resource Locator
USD - United States Dollar



Attachment 2: Logbook
2.1 Sjors' logbook



Doel: 80 Uur




Uren
65
65:00:00


% - van 80
81,25




Dag
Uur


Gedaan:
7-7-2023
1
1:00:00
Brainstormen
10-7-2023
1,5
1:30:00
Hoofdvragen en deelvragen gebrainstormt
29-8-2023
1,666666667
1:40:00
Hoofdvragen en deelvragen verder uitgewerkt
28-9-2023
1,5
1:30:00
Hoofdvragen en deelvragen verder uitgewerkt
5-9-2023
0,8333333333
0:50:00
Hoofdvragen en deelvragen verder uitgewerkt
11-9-2023
1,6
1:36:00
Plan van aanpak gemaakt, introductie voor eerste hoofdstuk geschreven en veldonderzoek gedaan (nigeriaanse scammer)
21-9-2023
0,5
0:30:00
Onderzoek phishing and spoofing
2-10-2023
0,3333333333
0:20:00
Onderzoek phishing and spoofing
24-10-2023
1,166666667
1:10:00
Soorten scams onderzocht
31-10-2023
0,5
0:30:00
Sjors: Onderzoek Social engineering
1-11-2023
0,6666666667
0:40:00
Verder onderzoeken social engineering scams
6-11-2023
0,5833333333
0:35:00
Uitwerken social engineering scams
22-11-2023
0,8333333333
0:50:00
Opmaak van verslag, verder werken aan meerdere social engineering scams
28-11-2023
0,8333333333
0:50:00
Uitwerken van product and services scams
29-11-2023
0,5
0:30:00
Uitwerken prevention without computer science
29-11-2023
0,8333333333
0:50:00
Uitwerken prevention with computer science
30-11-2023
0,8333333333
0:50:00
Uitwerken our prevention system
5-12-2023
0,8333333333
0:50:00
Verder Uitwerken our prevention system
6-12-2023
1,333333333
1:20:00
Nakijken, aanvullen en verbeteren types of scams
20-12-2023
5
5:00:00
Basis browser extensie
21-12-2023
3
3:00:00
Verslag updaten en werken aan extensie
5-1-2024
3
3:00:00
gewerkt aan de exstention
9-1-2024
0,8333333333
0:50:00
gewerkt aan AI code
10-1-2024
0,8333333333
0:50:00
Documentatie chrome.downloads gelezen van chrome api
16-1-2024
3
3:00:00
Gewerkt aan AI code
17-1-2024
1,5
1:30:00
gewerkt aan ai code, een ai op onze trainingsdata alleen werkt goed op emails en berichten maar niet op andere soorten text
17-1-2024
2,5
2:30:00
AI code afgemaakt en training aangezet (uiteindelijk uitgezet want er was een ETA van ongev 4u)
18-1-2024
3
3:00:00
Ai getraind en predictions getest, redelijk goed resultaat, detecteerd andere soorten text zoals speeches en artiekelen niet meer als scam
24-1-2024
1,5
1:30:00
Code van ai in document gezet, beetje uitgetyped , ai verder getest op texten. werkt redelijk goed.
26-1-2024
4
4:00:00
Extensie: Knop toegevoegd aan gmail webpage, blocksite verder uitgewerkt
27-1-2024
1
1:00:00
bespreken extensie, wat we gaan maken en wat niet, en hoe we de resterende taken gaan verdelen
29-1-2024
2,5
2:30:00
Downloadmanager maken + popup met fileextensions
30-1-2024
5,5
5:30:00
API gemaakt voor de AI, knop in gmail geimplementeerd met jquery en obv gmail.js (een npm package, maar npm werkt niet met extensions, dus was veel moeite om alle require, en andere niet-bestaande dingen te vervangen) extensie is nu bijna af, laatste paar dingen nog afmaken, maar de basis werkt
31-1-2024
1
1:00:00
gekeken en met Lucas de code besproken
31-1-2024
1
1:00:00
"enabled/disabled" functionaliteit implementatie correct gemaakt (werkte maar een deel van de tijd, nu altijd)
31-1-2024
0,9833333333
0:59:00
code in bestand en development sectie van het verslag geüpdated
1-2-2024
5,5
5:30:00
Code afmaken, verslag afmaken, alles af?
2-2-2024
1,5
1:30:00
Afmaken het verslag, nummering geupdate, door/nagelezen



2.2 Lucas’ logbook

doel:
80
80:00:00


totaal:
50,28333333
50:17:00


Dag
Uur


Gedaan:
07-07-2023
1
1:00:00
Brainstormen
10-07-2023
1,5
1:30:00
Hoofdvragen en deelvragen gebrainstormt
29-08-2023
1,666666667
1:40:00
Hoofdvragen en deelvragen verder uitgewerkt
28-09-2023
1,5
1:30:00
Hoofdvragen en deelvragen verder uitgewerkt
05-09-2023
0,8333333333
0:50:00
Hoofdvragen en deelvragen verder uitgewerkt
11-09-2023
1,6
1:36:00
Plan van aanpak gemaakt, introductie voor eerste hoofdstuk geschreven en veldonderzoek gedaan (nigiriaanse scammer)
26-09-2023
0,75
0:45:00
Interview nigiriaanse oplichter en verder uitwerken phishing and spoofing en begonnen met onderzoek naar fake error websites
27-09-2023
0,3333333333
0:20:00
Uitwerken interview en onderzoek naar hoe informatie wordt verkregen
27-09-2023
0,8333333333
0:50:00
Interview met slachtoffer
28-09-2023
0,1666666667
0:10:00
interview afgemaakt en begin aan wie de oplichters zijn
2-10-2023
0,6666666667
0:40:00
Onderzoek phishing and spoofing
3-10-2023
2,083333333
2:05:00
Puntjes op de I gezet bij onderzoeken hoe men aan informatie komt
24-10-2023
1,166666667
1:10:00
Soorten scams onderzocht
26-10-2023
0,25
0:15:00
interview nigeriaanse oplichter mbt romance scams, hoe de persoon deze uitvoert
31-10-2023
2
2:00:00
Lucas: vervolgonderzoek informatie vergaren van slachtoffers
14-11-2023
1,5
1:30:00
YouTube videos kijken over oplichtingen (kanaal: Pleasant Green)
15-11-2023
1
1:00:00
Afmaken romance scams
27-11-2023
0,6666666667
0:40:00
dingen toegevoegd aan paragraaf over impersonation scam
28-11-2023
1,833333333
1:50:00
stuk over POV scammers, interview onderzoek gedaan en hoe mensen aan informatie komen, youtube film gekeken over inheritance scam
6-12-2023
1,333333333
1:20:00
puntjes op die i gezet en verder gewerkt aan fake products en services
21-12-2023
3,8
3:48:00
gewerkt aan AI code
3-1-2024
4,5
4:30:00
gewerkt aan AI code en documentatie bekeken over eventhandlers
4-1-2024
3
3:00:00
gewerkt aan AI code
9-1-2024
0,8333333333
0:50:00
gewerkt aan AI code
10-1-2024
1,8
1:48:00
Documentatie chrome.downloads gelezen van chrome api
16-1-2024
0,8333333333
0:50:00
Gewerkt aan AI code
17-1-2024
1,5
1:30:00
gewerkt aan ai code, een ai op onze trainingsdata alleen werkt goed op emails en berichten maar niet op andere soorten text
18-1-2024
3
3:00:00
Ai getraind en predictions getest, redelijk goed resultaat, detecteerd andere soorten text zoals speeches en artiekelen niet meer als scam
30-1-2024
0,8333333333
0:50:00
gekeken naar ai code
31-1-2024
1
1:00:00
met sjors gekeken naar PWS verslag, reflectie
1-2-2024
5
5:00:00
uitwerken verslag, bronnen, conclusie geschreven, bert geschreven alles af
2-2-2024
1,5
1:30:00
Afmaken het verslag, nummering geupdate, door/nagelezen


