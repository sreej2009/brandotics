// Service page copy, taken from Final.pdf (pages 10–33).
// Heading markup: {o:…} outline, {oa:…} accent outline, {a:…} accent, | line break.
// Copy markup: **bold keyword**, [link text](/path) — see src/components/Rich.astro.

export interface Service {
  slug: string;
  /** Short name used in navigation and cards. */
  name: string;
  icon: string;
  seo: { title: string; description: string };
  /** Page H1 (heading markup) and the line under it. */
  heading: string;
  headingText?: string;
  /** Short description shown on the home and services overview cards. */
  summary: string;
  tagline: string;
  intro: string[];
  cards: { icon: string; title: string }[];
  matters: { heading: string; intro: string; lead: string; items: string[] };
  who: { heading: string; intro: string; items: string[] };
  why: { eyebrow: string; heading: string; paragraphs: string[]; features: { icon: string; title: string; text: string }[] };
  faq: { q: string; a: string }[];
  cta: { heading: string; text: string };
}

export const services: Service[] = [
  {
    slug: 'web-development-company-in-kerala',
    name: 'Web Development',
    icon: 'code',
    seo: {
      title: 'Web Development Company in Kerala | Brandotics',
      description: 'Looking for a web development company in Kerala? Brandotics builds responsive, user-friendly websites to strengthen your brand and support business growth.',
    },
    heading: 'Web Development {a:Company in Kerala}',
    headingText: 'Looking for a professional **web development company in Kerala**?  Brandotics builds fast, responsive, and professional websites that represent your brand.',
    summary: 'You should get a website that is fast, mobile-friendly, professional-looking, and user-friendly in terms of information search and contacting you.',
    tagline: 'Build Better. Perform Smarter.',
    intro: [
      'At [Brandotics](/), a **web development company in Kerala**, our web development solutions will assist your organisation in creating a powerful digital presence by developing responsive and user-friendly websites for your brand. We provide unique web development solutions for building websites that reflect your brand.',
      'Our web development solutions go further than just providing attractive websites. Our team of **web developers in Kerala** provides solutions in terms of creating a seamless experience, intuitive navigation, responsiveness, and functionality. Whether you require a new business website or need to revamp your current website, our solutions will cater to your needs.',
      'With the perfect mix of design, technology, and strategy, Brandotics assists you in making your website work as a powerful digital platform.',
    ],
    cards: [
      { icon: 'briefcase', title: 'Business Website Development' },
      { icon: 'layers', title: 'WordPress Website Development' },
      { icon: 'devices', title: 'Responsive Web Design' },
      { icon: 'cart', title: 'E-commerce Website Development' },
      { icon: 'refresh', title: 'Website Redesign and Optimization' },
      { icon: 'wrench', title: 'Website Maintenance and Support' },
    ],
    matters: {
      heading: 'Why Web Development Matters',
      intro: 'Your website acts as the gateway to your customers. A **web development company in Kerala** will design a good-looking and customer-friendly website for you. Your website can show off your offerings and create brand value.',
      lead: 'The professionally designed website by the **web design company in Kerala** will be helpful for your business because',
      items: ['Build brand credibility', 'Improve user experience', 'Reach mobile and desktop audiences', 'Generate enquiries and conversions', 'Support business growth'],
    },
    who: {
      heading: 'Who Needs Web Development Services?',
      intro: 'We are a **web development company in Kerala** and have developed our services specifically for companies that wish to improve their online presence and have a website that is effective for them.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'Local service providers', 'E-commerce businesses', 'Established companies', 'Businesses with outdated websites'],
    },
    why: {
      eyebrow: 'Why Choose Brandotics?',
      heading: 'Websites {o:That Work.}|Experiences {a:That Connect.}',
      paragraphs: [
        'As a **web design company Kerala** businesses can rely on, we think that for a website to be effective, it should not just be visually attractive but also functional and purposeful. It is through the combination of design, technology, and planning that we develop websites for our clients’ business goals.',
        'This is how we do it; we take into consideration the brand, the target market, and the business needs before coming up with the right solution for them.',
      ],
      features: [
        { icon: 'users', title: 'User-Focused Design', text: 'We provide you with a web design that enables people to access information through your website.' },
        { icon: 'devices', title: 'Responsive Development', text: 'We create sites that work well on any screen size, allowing our users to navigate using mobile devices, tablets, or desktops.' },
        { icon: 'gauge', title: 'Performance and Reliability', text: 'We concentrate on effective structuring, usability, and optimization of websites to facilitate easy navigation.' },
      ],
    },
    faq: [
      { q: 'How do I choose the best web development company in Kerala?', a: 'Previous work, clarity in the process, mobile responsiveness, and post-launch support should be considered.' },
      { q: 'How long does it take to build a website?', a: 'It depends on the size and scope of the website. Experienced **website developers in Kerala** can build a business website faster than a complex eCommerce or customized website, depending on the requirements.' },
      { q: 'Will my website work on mobile devices?', a: 'Yes, the website is going to be responsive, compatible with mobile phones, tablets, and computers.' },
      { q: 'Do you provide support after the website goes live?', a: 'Yes. We offer website maintenance and support services at an additional cost to keep your website updated, secure, and running smoothly.' },
    ],
    cta: {
      heading: 'Ready to Build Your {a:Digital Presence?}',
      text: 'Create a website for your company that fits your brand identity and helps you achieve your objective. Work with a **web development company in Kerala** to create an appealing and user-friendly website.',
    },
  },
  {
    slug: 'seo-company-in-kerala',
    name: 'SEO',
    icon: 'search',
    seo: {
      title: 'SEO Company in Kerala | Brandotics',
      description: 'Looking for an SEO company in Kerala? Brandotics helps improve search visibility, attract relevant visitors, and support long-term organic business growth.',
    },
    heading: 'SEO Company in Kerala for {a:Smarter Digital Growth}',
    headingText: 'Want to improve your standing in the search results? Brandotics will help you get the right kind of exposure on the internet.',
    summary: 'Optimize your Google search results and get interested customers for your product/service by doing the proper keyword research and creating quality content.',
    tagline: 'Get Found Online. Grow Beyond Limits.',
    intro: [
      'The SEO services offered by Brandotics, which is an **SEO company in Kerala**, assist businesses in enhancing their search engine visibility and attracting the right set of website visitors to their site. The use of keyword research, on-page SEO, technical SEO, and content SEO will ensure that your site is found by users who are looking for your products or services.',
      'Our SEO service at [Brandotics](/) is not just about rankings. Instead, our **SEO experts in Kerala** ensure that there is a connection between your business and the right audience, as well as providing an engaging user experience on your website. The SEO services provided by us will be custom-made to suit the purpose of your company, whether you are creating your site for the first time or upgrading your existing online presence.',
    ],
    cards: [
      { icon: 'search', title: 'Keyword Research and Strategy' },
      { icon: 'text', title: 'On-Page SEO Optimization' },
      { icon: 'wrench', title: 'Technical SEO and Website Audits' },
      { icon: 'pen', title: 'SEO Content Optimization' },
      { icon: 'pin', title: 'Local SEO and Business Visibility' },
      { icon: 'chart', title: 'SEO Monitoring and Reporting' },
    ],
    matters: {
      heading: 'Why SEO matters',
      intro: 'A website requires something more than a good look to maximise its full capabilities. An **SEO company in Kerala** will ensure that your business gets discovered by prospective clients who are searching for related goods, services, or other information.',
      lead: 'A properly devised strategy by an **SEO specialist in Kerala** could enable your business to:',
      items: ['Improve online visibility', 'Attract relevant visitors', 'Build credibility', 'Strengthen user experience', 'Build long-term value'],
    },
    who: {
      heading: 'Who needs SEO services?',
      intro: 'Our **SEO services in Kerala** are designed for businesses that want to improve their digital presence and make their websites more effective.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'Local service providers', 'E-commerce businesses', 'Established companies', 'Businesses with underperforming websites'],
    },
    why: {
      eyebrow: 'Why choose Brandotics',
      heading: 'Smart {o:SEO.}|Meaningful {a:Progress.}',
      paragraphs: [
        'Being an **SEO company in Kerala**, we feel that good SEO starts with a good understanding of your business. Our strategy includes analytical skills, good content, technical expertise, and analysis to assist in taking smart decisions for your digital marketing efforts.',
        'We do not focus on activities that can be carried out without any regard for your objectives but give preference to the activities which are aligned with your objectives.',
      ],
      features: [
        { icon: 'users', title: 'Audience-First Strategy', text: 'We conduct research into the queries, requirements, and intent of your target audience.' },
        { icon: 'chart', title: 'Data-Informed Decisions', text: 'We use relevant performance information to identify opportunities and assess progress.' },
        { icon: 'refresh', title: 'Continuous Improvement', text: 'We assess the performance of your site and make changes to our **SEO service in Kerala** based on your needs.' },
      ],
    },
    faq: [
      { q: 'How to choose the best SEO company in Kerala?', a: 'Choose an agency that communicates well, sets realistic expectations, reports transparently, and knows your business and target customers before suggesting anything.' },
      { q: 'Does my small business need SEO?', a: 'Absolutely, if consumers search for you through the Internet. The SEO experts working for the firm will focus on those places where your firm needs it the most.' },
      { q: 'When will I start seeing the results of SEO?', a: 'SEO is a lengthy process. Most websites begin seeing positive changes within a couple of months, but great and stable changes come over time.' },
      { q: "What is included in Brandotics' SEO work?", a: 'These include keyword research, on-page optimization, technical audits, content optimization, local SEO, and continuous monitoring and reporting.' },
    ],
    cta: {
      heading: 'Ready to Get More {a:From Your Website?}',
      text: 'Enhance the growth prospects for your business by relying on the support of an **SEO company in Kerala**. We will assist you in exploring SEO options to boost the visibility of your website.',
    },
  },
  {
    slug: 'social-media-marketing-company-in-kerala',
    name: 'Social Media Marketing',
    icon: 'share',
    seo: {
      title: 'Social Media Marketing Company in Kerala | Brandotics',
      description: 'Choose Brandotics, a social media marketing company in Kerala, to strengthen brand awareness, engage your target audience, and grow your online presence.',
    },
    heading: 'Social Media Marketing {a:Company in Kerala}',
    headingText: 'Brandotics is a creative **social media marketing company in Kerala** that helps brands to increase their visibility and become successful in creating a base of loyal customers on social media.',
    summary: 'Create your own dynamic online identity using Instagram, Facebook, and many other social networking websites through effective posting, communication, and discussion.',
    tagline: 'Get Noticed. Build Connections. Grow Your Brand.',
    intro: [
      'The Brandotics **Social Media Marketing Services** can help your brand to enhance its presence on the internet, reach your target audience, and build relationships through social media sites. With the help of creative content creation, strategic planning, audience research, and performance analysis, we can make your brand unique in this competitive world.',
      'We don’t only post creative content but also create engaging experiences, maintain a consistent brand identity, and interact with your audience. Whether it’s for a new brand or enhancing your current social media presence, our social media marketing strategy will fit your business requirements and your audience.',
      'Being a **social media marketing company in Kerala**, Brandotics offers you creative thinking mixed with intelligent decision-making to give you an enhanced social media presence.',
    ],
    cards: [
      { icon: 'compass', title: 'Social Media Strategy and Planning' },
      { icon: 'pen', title: 'Content Creation and Design' },
      { icon: 'users', title: 'Social Media Account Management' },
      { icon: 'chat', title: 'Audience Engagement and Community Building' },
      { icon: 'target', title: 'Social Media Advertising Campaigns' },
      { icon: 'chart', title: 'Performance Tracking and Reporting' },
    ],
    matters: {
      heading: 'Why Social Media Marketing Matters',
      intro: 'Having a good social media presence is one way to ensure that your business reaches the right audience and maintains visibility of your brand. This is what an experienced **social media marketing company Kerala** can do for you.',
      lead: 'A good social media marketing plan for your business can:',
      items: ['Increase brand awareness', 'Reach the right audience', 'Improve audience engagement', 'Generate leads and enquiries', 'Build customer relationships'],
    },
    who: {
      heading: 'Who Can Benefit from Our Services?',
      intro: 'Our **social media marketing Kerala** solutions assist companies in increasing their online presence, reaching out to their intended audience, and gaining a better digital presence.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'Local brands and service providers', 'E-commerce businesses', 'Established companies', 'Businesses with low social media engagement'],
    },
    why: {
      eyebrow: 'Why Choose Brandotics',
      heading: 'Creative {o:Content.}|Meaningful {a:Connections.}',
      paragraphs: [
        'At [Brandotics](/), we know that a good social media marketing strategy involves knowing about your brand and the people you will reach out to. Using effective communication, storytelling, and planning, we enable our clients to create an identity for their businesses on social media platforms.',
        'We choose the appropriate platforms and plan how we can effectively communicate with your target audiences. As a **social media marketing agency Kerala** brands can rely on, we concentrate on account management, campaigns, and analytics.',
      ],
      features: [
        { icon: 'users', title: 'Audience-Driven Content', text: 'We create content that reflects your brand identity and connects with the interests, needs, and expectations of your target audience.' },
        { icon: 'layers', title: 'Consistent Brand Identity', text: 'We maintain a cohesive visual style and communication approach to help your brand remain recognizable across social platforms.' },
        { icon: 'gauge', title: 'Performance-Based Optimization', text: 'We monitor relevant engagement and campaign metrics to identify opportunities and improve your social media marketing efforts.' },
      ],
    },
    faq: [
      { q: 'Which social media platforms do you manage?', a: 'Being a **social media marketing company in Kerala**, we operate on Instagram, Facebook, LinkedIn, and  YouTube. During our planning, we suggest which channels would be more beneficial for you and save your time and money.' },
      { q: 'Do you create the content, or do we need to provide it?', a: 'It is all up to us to create an idea for the post, write a caption, make a graphic, and even a video. If you have your own photos, information about the product, or some stories from your life, it would be great if you provided them.' },
      { q: 'What Is the Expected Timeline for Results?', a: 'You can expect some progress in terms of likes, shares, and reach after a couple of weeks, and your followers, queries, and conversions start growing after three to six months.' },
      { q: 'Can small businesses expand via Social Media Marketing?', a: 'Sure, small and local businesses get the maximum benefits because social media allows them to reach local customers without any additional expenses.' },
    ],
    cta: {
      heading: 'Ready to Make Your {a:Brand Stand Out?}',
      text: 'Collaborate with a **social media marketing company in Kerala** where your interests come first. It’s time to create content, increase your reach, and build a social media platform for the future success of your business.',
    },
  },
  {
    slug: 'graphic-design-services-in-kerala',
    name: 'Graphic Design',
    icon: 'pen',
    seo: {
      title: 'Graphic Design Services in Kerala | Brandotics',
      description: 'Discover creative graphic design services in Kerala with Brandotics. Get professional logos, brand identity, social media creatives, brochures, and marketing designs.',
    },
    heading: 'Graphic Design {a:Service in Kerala}',
    summary: 'Stand out through the use of sharp images when it comes to social media, advertisements, pamphlets, website designs, and other forms of marketing.',
    tagline: 'Design with Purpose. Make Your Brand Stand Out.',
    intro: [
      'The graphic design services provided by Brandotics will assist you in communicating ideas, branding, and capturing the attention of the target audience with the help of graphics. We blend creativity with strategies to provide you with designs that represent your brand persona and achieve your business objectives.',
      'In addition to designing appealing graphics for you, we ensure that the message is communicated properly, there is visual consistency, and that the design connects with the target audience. Regardless of whether you are establishing a new brand or revamping your old visual branding, our graphic design solutions will be designed to meet your needs.',
      'With innovative ideas and efficient execution, [Brandotics](/) will assist you in converting your ideas into visual assets.',
    ],
    cards: [
      { icon: 'compass', title: 'Brand Identity and Logo Design' },
      { icon: 'share', title: 'Social Media Creative Design' },
      { icon: 'target', title: 'Marketing and Advertising Materials' },
      { icon: 'text', title: 'Brochure and Flyer Design' },
      { icon: 'devices', title: 'Website and Digital Graphics' },
      { icon: 'box', title: 'Packaging and Promotional Design' },
    ],
    matters: {
      heading: 'Why Graphic Design Matters',
      intro: 'Good visual communication is essential for making a lasting impression as well as conveying your message. Good design will help you be more recognizable as well as increase trust in potential clients.',
      lead: 'Effective graphic design can help your business:',
      items: ['Build brand recognition', 'Communicate ideas clearly', 'Create a professional image', 'Capture audience attention', 'Strengthen marketing communication'],
    },
    who: {
      heading: 'Who Needs Graphic Design Services?',
      intro: 'Our graphic design services have been specifically developed for companies that wish to create a distinctive identity and become better marketers through visuals.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'Local brands and service providers', 'E-commerce businesses', 'Established companies', 'Businesses refreshing their brand identity'],
    },
    why: {
      eyebrow: 'Why Choose Brandotics?',
      heading: 'Creative {o:Thinking.}|Powerful {a:Visuals.}',
      paragraphs: [
        'Brandotics knows that good design is not only about having a purpose, but it should also be creative. By blending visual communication, design principles, and branding concepts, we can make sure that the designs we create convey your messages to your target audience.',
        'Our process begins with understanding the attributes of your brand, your audience, and your purposes. We design everything with brand continuity and value communication in mind.',
      ],
      features: [
        { icon: 'bulb', title: 'Brand-Focused Creativity', text: 'We create designs that are a reflection of your brand personality and values.' },
        { icon: 'eye', title: 'Purposeful Visual Communication', text: 'We convert concepts and communication into meaningful visuals that can easily be understood by your target audience.' },
        { icon: 'layers', title: 'Consistent Design Quality', text: 'We provide a consistent visual look to your marketing materials in order to develop recognition and trust.' },
      ],
    },
    faq: [
      { q: 'What types of graphic design work do you offer?', a: "Our services include the creation of logos, brand identity, social media content, brochures, flyers, advertisements, website development, and packaging design. If you have a project that is not listed above, don't hesitate to inform us; we will tailor a solution for you." },
      { q: 'Can you redesign my existing logo or brand visuals?', a: 'Of course. We can work on your existing brand/logo and not alter anything in terms of what is already established, or create new visuals for you. Your branding will represent your organization.' },
      { q: 'How long does a design project usually take?', a: 'It depends on how large the project is. One creative work, like a social media post or a flyer, will be done in a relatively shorter time than developing a brand identity. You will receive a timeline at the start of the project.' },
      { q: 'Will my designs look consistent across all my marketing materials?', a: 'Yes. All colors, fonts, and visuals will be consistent across all your social media, print, and digital materials.' },
    ],
    cta: {
      heading: 'Ready to Bring Your {a:Brand to Life?}',
      text: 'Make sure your company is visually striking with graphic design that tells your story. We can assist you with designing graphics that will ensure your message reaches people and help promote your company.',
    },
  },
  {
    slug: 'google-ads-agency-in-kerala',
    name: 'Google Ads',
    icon: 'target',
    seo: {
      title: 'Google Ads Agency in Kerala | Brandotics',
      description: 'Choose Brandotics, a Google Ads agency in Kerala, to improve online visibility, reach potential customers, generate qualified leads, and grow your business.',
    },
    heading: 'Google Ads {a:Agency in Kerala}',
    headingText: 'Brandotics is a results-focused **Google Ads agency in Kerala** that assists in contacting your prospective clients when they are looking for something and converting those clicks into inquiries and leads.',
    summary: 'Be where your customers can find you. We help design and set up a quality Google Ads Campaign for your business.',
    tagline: 'Reach the Right People. Drive Real Results.',
    intro: [
      'Through our **Google Ads Management services** at Brandotics, we ensure that your business reaches its potential customers at just the right time through well-planned advertising campaigns. Through keyword analysis, audience targeting, creative ad writing, and more, we help make your business better known and get relevant traffic to your site.',
      'While click generation is not all we aim to do, our methods will allow your company to reach people who are searching for your offerings. We optimize your advertising campaigns to be more efficient and generate new enquiries, leads, and sales. Be it your first Google Ads campaign or a need to optimize your existing ones, our strategies are customized for your goals and budget.',
      'With our **Google Ads agency in Kerala**, we help you utilize your paid search advertising campaigns to grow your business.',
    ],
    cards: [
      { icon: 'search', title: 'Google Search Ads Campaigns' },
      { icon: 'target', title: 'Keyword Research and Targeting' },
      { icon: 'devices', title: 'Display Advertising Campaigns' },
      { icon: 'cart', title: 'Google Shopping Ads' },
      { icon: 'refresh', title: 'Remarketing Campaigns' },
      { icon: 'chart', title: 'Ad Performance Tracking and Optimization' },
    ],
    matters: {
      heading: 'Why Google Ads Matters',
      intro: 'Getting hold of potential clients on the internet is not only about having a website. An efficient **Google Ads service** can help you reach out to your audiences through proper advertising and manage your advertising budgets well.',
      lead: 'A well-managed Google Ads strategy can help your business:',
      items: ['Increase online visibility', 'Reach high-intent customers', 'Generate qualified leads', 'Drive relevant website traffic', 'Measure advertising performance'],
    },
    who: {
      heading: 'Who Can Benefit from Google Ads?',
      intro: 'Our campaigns are designed for businesses that want to reach potential customers faster, promote their offerings, and achieve specific digital marketing objectives.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'Local service providers', 'E-commerce businesses', 'Established companies', 'Businesses seeking more leads and sales'],
    },
    why: {
      eyebrow: 'Why Choose Brandotics?',
      heading: 'Smarter {o:Campaigns.}|Stronger {a:Results.}',
      paragraphs: [
        '[Brandotics](/) believes that any successful advertisement starts with a proper understanding of your business goals and audience. As a **Google Ads agency in Kerala**, we make use of keyword selection, powerful ad messaging, targeting information, as well as performance analysis to increase the effectiveness of your advertising budget.',
        'Our strategy is concentrated on targeting your potential audience, finding opportunities for the campaign, and adjusting it according to the performance data. Being **Google Ads services agency** with the philosophy of transparency, we ensure all our actions are aimed at meeting your marketing needs.',
      ],
      features: [
        { icon: 'target', title: 'Targeted Advertising Strategy', text: 'We can determine important keywords and audience opportunities that can link your business with your prospective customers.' },
        { icon: 'wallet', title: 'Budget-Conscious Campaign Management', text: 'We monitor spending and campaign performance to help make informed decisions about advertising investment.' },
        { icon: 'gauge', title: 'Continuous Performance Optimization', text: 'We evaluate clicks, conversions, and other relevant metrics to identify opportunities to improve campaign performance.' },
      ],
    },
    faq: [
      { q: 'How can Google Ads services help my business to grow?', a: 'Being a **Google Ads agency in Kerala**, we take care of all things like keyword research, ad design, targeting, budget management, and so forth so that your campaign reaches the right people.' },
      { q: 'How much money should I allocate to get started?', a: 'There is no set minimum. The campaign is crafted based on your goals, industry competition, and your budget per month; then spends are adjusted accordingly based on data analysis.' },
      { q: 'How soon can I expect results?', a: 'Google Ads will be able to begin sending traffic right away when the campaigns launch. The quality of leads and the effectiveness of the campaign should improve within the first couple of weeks.' },
      { q: 'How will I know if my campaigns are working?', a: 'Conversion tracking is set up, and we share reports that include clicks, inquiries, cost per lead, and others. In this way, you will know exactly how well your investment in advertising is doing.' },
    ],
    cta: {
      heading: 'Ready to Turn Clicks {a:Into Customers?}',
      text: "Get to your target audience through the best **Google Ads agency in Kerala,** which creates advertisements based on your objectives. Let's boost your online presence, generate traffic, and increase your potential for generating leads and sales.",
    },
  },
  {
    slug: 'content-writing-services-in-kerala',
    name: 'Content Writing',
    icon: 'text',
    seo: {
      title: 'Content Writing Services in Kerala | Brandotics',
      description: 'Create engaging, SEO-friendly content with Brandotics. Our content writing services in Kerala help businesses communicate clearly, reach audiences, and grow online.',
    },
    heading: 'Content Writing {a:Services in Kerala}',
    summary: 'Professional writing to be published on your website, blog, and social media sites that clearly and succinctly communicates what you do and why someone should choose you.',
    tagline: 'Words That Connect. Content That Converts.',
    intro: [
      'Our content writing services at Brandotics enable companies to express their thoughts, share their knowledge, and reach the right people through the right content. Combining creativity in writing, research into your audience, and effective messaging enables us to deliver content that will reflect your brand voice and meet your business needs.',
      'While our content writing service may include the creation of words alone, what we do at Brandotics is focused on providing valuable information, conveying your brand message, and creating content that motivates your readers to act. Whether you need new copy for your site or regular content for your digital marketing campaign, our writing services are designed specifically for your audience and industry.',
      'Through research and storytelling, Brandotics can turn your thoughts into valuable content.',
    ],
    cards: [
      { icon: 'devices', title: 'Website Content Writing' },
      { icon: 'search', title: 'SEO Blog and Article Writing' },
      { icon: 'share', title: 'Social Media Content Creation' },
      { icon: 'target', title: 'Marketing and Advertising Copywriting' },
      { icon: 'cart', title: 'Product Descriptions and E-commerce Content' },
      { icon: 'chat', title: 'Brand Messaging and Business Copywriting' },
    ],
    matters: {
      heading: 'Why Content Writing Matters',
      intro: 'Quality content enables your company to demonstrate its worth, solve customer queries, and connect with your audience in a relevant manner. Good content also helps your online marketing endeavors as well since it makes your website informative, increases brand recognition, and maintains consistency in communication.',
      lead: 'Effective content writing can help your business:',
      items: ['Communicate your brand message', 'Build trust and credibility', 'Improve search visibility', 'Engage your target audience', 'Encourage enquiries and conversions'],
    },
    who: {
      heading: 'Who Needs Content Writing Services?',
      intro: 'The services we offer in content writing are for organizations that wish to become more effective communicators, enhance their online presence, and provide useful information to their audience.',
      items: ['Startups and new businesses', 'Small and medium-sized businesses', 'E-commerce businesses', 'Digital marketing agencies', 'Established brands and companies', 'Businesses with outdated or ineffective website content'],
    },
    why: {
      eyebrow: 'Why Choose Brandotics?',
      heading: 'Meaningful {o:Words.}|Measurable {a:Impact.}',
      paragraphs: [
        'The belief at [Brandotics](/) is that great content begins with knowing your audience and telling your customers about your value as a company. This is done through a creative blend of writing, research, and planning to come up with content that speaks to your brand’s personality and marketing goals.',
        'We create purposeful content through our unique process of coming up with engaging and effective content for various audiences and platforms, from website writing to blogs and marketing messages.',
      ],
      features: [
        { icon: 'users', title: 'Audience-Focused Writing', text: "We create relevant content that addresses your audience's interests, questions, and needs." },
        { icon: 'search', title: 'SEO-Friendly Content', text: 'We incorporate relevant keywords and clear content structures to support discoverability while prioritizing readability and usefulness.' },
        { icon: 'chat', title: 'Consistent Brand Voice', text: 'We maintain a consistent tone and messaging style to help your business build recognition and communicate with confidence.' },
      ],
    },
    faq: [
      { q: 'What types of content do you write?', a: 'We develop website copy, SEO blog posts, social media copy, advertising copy, product descriptions, and branding content. If there’s anything else that you require, just let us know what your requirements are.' },
      { q: 'Do you write SEO-friendly content?', a: 'Of course! We incorporate relevant keywords and ensure that your content is properly structured to help increase discoverability by search engines. But most importantly, we prioritize readability and value. Your content must be useful and readable for your users.' },
      { q: 'Can you match my brand’s tone of voice?', a: 'Absolutely. It begins with knowing what your brand is about, the people you want to reach out to, and what you hope to achieve. Then, it entails creating content that will reflect you as an organization.' },
      { q: 'How do you make sure the content is accurate and relevant to my industry?', a: 'Before we start working on the document, we analyze the industry you operate in, the target audience, and the competition in the market. We will also use the information you provide us about your products, services, and branding.' },
    ],
    cta: {
      heading: 'Ready to Tell Your {a:Brand Story?}',
      text: 'Boost the power of your voice with content that will educate, engage, and drive action. We can collaborate to create valuable content that speaks to your audience and makes the most of your value proposition.',
    },
  },
];

export const servicePath = (slug: string) => `/${slug}`;
