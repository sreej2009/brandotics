// Service page copy, taken from brandotics-content.pdf (pages 8–25).
// Heading markup: {o:…} outline, {oa:…} accent outline, {a:…} accent, | line break.

export interface Service {
  slug: string;
  /** Short name used in navigation and cards. */
  name: string;
  icon: string;
  /** Page title, e.g. "SEO Services". */
  title: string;
  titleMarkup: string;
  /** Short description shown on the home and services overview cards. */
  summary: string;
  tagline: string;
  intro: string[];
  cards: { icon: string; title: string }[];
  matters: { heading: string; intro: string; lead: string; items: string[] };
  who: { heading: string; intro: string; items: string[] };
  why: { heading: string; paragraphs: string[]; features: { icon: string; title: string; text: string }[] };
  cta: { heading: string; text: string };
}

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    icon: 'code',
    title: 'Web Development Services',
    titleMarkup: 'Web Development {a:Services}',
    summary:
      'Create fast, responsive, and professional websites that represent your brand and provide visitors with a smooth experience across desktop and mobile devices.',
    tagline: 'Build Better. Perform Smarter.',
    intro: [
      'At Brandotics, our web development services help businesses establish a strong digital presence with modern, responsive, and user-friendly websites. We combine creative design, functional development, and performance-focused solutions to create websites that represent your brand and support your business goals.',
      'Our approach goes beyond creating attractive websites. We focus on delivering seamless user experiences, intuitive navigation, mobile responsiveness, and reliable functionality. Whether you need a new business website or want to improve an existing one, our web development solutions are tailored to your requirements and target audience.',
      'With the right combination of design, technology, and strategy, Brandotics helps turn your website into a powerful digital platform that builds credibility, engages visitors, and supports long-term business growth.',
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
      intro:
        'Your website is often the first place potential customers interact with your business. A well-developed website helps create a positive first impression, communicate your value, and make it easier for visitors to explore your products or services.',
      lead: 'A professionally developed website can help your business:',
      items: [
        'Build brand credibility',
        'Improve user experience',
        'Reach mobile and desktop audiences',
        'Generate enquiries and conversions',
        'Support business growth',
      ],
    },
    who: {
      heading: 'Who Needs Web Development Services?',
      intro:
        'Our web development services are designed for businesses that want to strengthen their online presence and create a website that works effectively for their audience.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'Local service providers',
        'E-commerce businesses',
        'Established companies',
        'Businesses with outdated websites',
      ],
    },
    why: {
      heading: 'Websites {o:That Work.}|Experiences {a:That Connect.}',
      paragraphs: [
        'At Brandotics, we believe an effective website should combine visual appeal, practical functionality, and a clear purpose. We bring together thoughtful design, modern development practices, and user-focused planning to create websites that support your business objectives.',
        'Our approach focuses on understanding your brand, audience, and requirements before developing a suitable solution. From website structure and responsive layouts to performance improvements and ongoing support, every element is designed to deliver a smooth experience and help your business grow online.',
      ],
      features: [
        { icon: 'users', title: 'User-Focused Design', text: 'We create intuitive website experiences that help visitors find information and navigate your pages easily.' },
        { icon: 'devices', title: 'Responsive Development', text: 'We build websites that adapt to different screen sizes, helping users browse across mobile phones, tablets, and desktops.' },
        { icon: 'gauge', title: 'Performance and Reliability', text: 'We focus on efficient website structure, usability, and optimization to support a smooth browsing experience.' },
      ],
    },
    cta: {
      heading: 'Ready to Build Your {a:Digital Presence?}',
      text: "Give your business a website that reflects your brand and supports your ambitions. Let's create a modern, user-friendly digital experience that connects with your audience and helps your business move forward.",
    },
  },
  {
    slug: 'seo',
    name: 'SEO',
    icon: 'search',
    title: 'SEO Services',
    titleMarkup: 'SEO {a:Services}',
    summary:
      'Improve your search engine visibility and attract more relevant visitors with strategic SEO focused on keywords, content, technical performance, and long-term organic growth.',
    tagline: 'Get Found Online. Grow Beyond Limits.',
    intro: [
      'At Brandotics, our SEO services help businesses improve their search engine visibility, attract relevant website visitors, and build a stronger online presence. We combine keyword research, on-page optimization, technical SEO, and content strategy to help your website reach people who are actively searching for your products or services.',
      'Our approach goes beyond rankings. We focus on connecting your business with the right audience, improving the website experience, and creating opportunities for meaningful engagement and enquiries. Whether you are launching a new website or improving an established online presence, our SEO strategies are tailored to your business goals and audience.',
      'With a clear strategy and continuous optimization, Brandotics helps turn your website into a valuable digital asset that supports long-term business growth.',
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
      intro:
        'A website needs more than an attractive design to reach its full potential. Search engine optimization helps your business become more discoverable when potential customers look for relevant products, services, and information.',
      lead: 'A well-planned SEO strategy can help your business:',
      items: [
        'Improve online visibility',
        'Attract relevant visitors',
        'Build credibility',
        'Strengthen user experience',
        'Build long-term value',
      ],
    },
    who: {
      heading: 'Who needs SEO services?',
      intro:
        'Our SEO services are designed for businesses that want to improve their digital presence and make their websites more effective.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'Local service providers',
        'E-commerce businesses',
        'Established companies',
        'Businesses with underperforming websites',
      ],
    },
    why: {
      heading: 'Smart {o:SEO.}|Meaningful {a:Progress.}',
      paragraphs: [
        'At Brandotics, we believe effective SEO begins with a clear understanding of your business. We combine analytical thinking, relevant content, technical improvements, and ongoing evaluation to help you make informed digital marketing decisions.',
        'Our approach prioritizes the work that aligns with your goals instead of relying on generic strategies. From identifying search opportunities to improving individual pages, each recommendation is intended to support a more useful website and a stronger organic search presence.',
      ],
      features: [
        { icon: 'users', title: 'Audience-First Strategy', text: 'We research the questions, needs, and search intent of your potential customers.' },
        { icon: 'chart', title: 'Data-Informed Decisions', text: 'We use relevant performance information to identify opportunities and assess progress.' },
        { icon: 'refresh', title: 'Continuous Improvement', text: 'We review website performance and adjust recommendations as your business and search landscape evolve.' },
      ],
    },
    cta: {
      heading: 'Ready to Get More {a:From Your Website?}',
      text: "Give your business a stronger foundation for organic growth. Let's identify SEO opportunities, improve your website visibility, and create a strategy aligned with your goals.",
    },
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    icon: 'share',
    title: 'Social Media Marketing Services',
    titleMarkup: 'Social Media Marketing {a:Services}',
    summary:
      'Build a strong social presence with creative content, consistent communication, audience engagement, and campaigns designed to increase awareness and interaction.',
    tagline: 'Get Noticed. Build Connections. Grow Your Brand.',
    intro: [
      'At Brandotics, our social media marketing services help businesses strengthen their online presence, connect with their target audience, and build meaningful relationships across social platforms. We combine creative content, strategic planning, audience research, and performance analysis to help your brand stand out in a competitive digital landscape.',
      'Our approach goes beyond posting content. We focus on creating engaging experiences, developing a consistent brand identity, and encouraging meaningful interactions with your audience. Whether you are launching a new brand or looking to improve your existing social media presence, our strategies are tailored to your business goals and audience.',
      'With creative thinking and data-informed decisions, Brandotics helps transform your social media platforms into valuable channels for brand awareness, audience engagement, and long-term business growth.',
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
      intro:
        'Social media gives your business an opportunity to reach potential customers, communicate your brand values, and build lasting connections. A consistent and well-planned social media presence helps your business remain visible and relevant where your audience spends time online.',
      lead: 'An effective social media marketing strategy can help your business:',
      items: [
        'Increase brand awareness',
        'Reach the right audience',
        'Improve audience engagement',
        'Generate leads and enquiries',
        'Build customer relationships',
      ],
    },
    who: {
      heading: 'Who Needs Social Media Marketing Services?',
      intro:
        'Our social media marketing services are designed for businesses that want to increase their visibility, connect with customers, and grow their digital presence.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'Local brands and service providers',
        'E-commerce businesses',
        'Established companies',
        'Businesses with low social media engagement',
      ],
    },
    why: {
      heading: 'Creative {o:Content.}|Meaningful {a:Connections.}',
      paragraphs: [
        'At Brandotics, we believe successful social media marketing starts with understanding your brand and the people you want to reach. We combine creative storytelling, consistent communication, and strategic planning to help your business build a recognizable and engaging online presence.',
        'Our approach focuses on creating relevant content, choosing suitable platforms, and identifying opportunities to connect with your audience. From content planning and account management to advertising campaigns and performance analysis, every activity is designed to support your marketing objectives and strengthen your brand.',
      ],
      features: [
        { icon: 'users', title: 'Audience-Driven Content', text: 'We create content that reflects your brand identity and connects with the interests, needs, and expectations of your target audience.' },
        { icon: 'layers', title: 'Consistent Brand Identity', text: 'We maintain a cohesive visual style and communication approach to help your brand remain recognizable across social platforms.' },
        { icon: 'gauge', title: 'Performance-Based Optimization', text: 'We monitor relevant engagement and campaign metrics to identify opportunities and improve your social media marketing efforts.' },
      ],
    },
    cta: {
      heading: 'Ready to Make Your {a:Brand Stand Out?}',
      text: "Build a stronger connection with your audience through strategic social media marketing. Let's create engaging content, expand your reach, and develop a social media presence that supports your business goals.",
    },
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    icon: 'pen',
    title: 'Graphic Design Services',
    titleMarkup: 'Graphic Design {a:Services}',
    summary:
      'Give your brand a professional visual identity with creative designs for social media, advertisements, websites, promotional materials, and digital campaigns.',
    tagline: 'Design with Purpose. Make Your Brand Stand Out.',
    intro: [
      'At Brandotics, our graphic design services help businesses communicate their ideas, express their brand identity, and capture audience attention through impactful visuals. We combine creativity, strategic thinking, and visual storytelling to create designs that reflect your brand personality and support your business goals.',
      'Our approach goes beyond creating attractive graphics. We focus on communicating the right message, maintaining visual consistency, and creating designs that connect with your target audience. Whether you are building a new brand or refreshing your existing visual identity, our graphic design solutions are tailored to your needs and marketing objectives.',
      'With creative concepts and thoughtful execution, Brandotics helps transform your ideas into compelling visual assets that strengthen brand recognition, improve communication, and create a lasting impression.',
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
      intro:
        'Strong visual communication helps your business make a memorable first impression and communicate its message effectively. Consistent, professional design makes your brand easier to recognize and helps build trust with potential customers across digital and print platforms.',
      lead: 'Effective graphic design can help your business:',
      items: [
        'Build brand recognition',
        'Communicate ideas clearly',
        'Create a professional image',
        'Capture audience attention',
        'Strengthen marketing communication',
      ],
    },
    who: {
      heading: 'Who Needs Graphic Design Services?',
      intro:
        'Our graphic design services are designed for businesses that want to establish a recognizable identity, improve their marketing materials, and communicate more effectively through visuals.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'Local brands and service providers',
        'E-commerce businesses',
        'Established companies',
        'Businesses refreshing their brand identity',
      ],
    },
    why: {
      heading: 'Creative {o:Thinking.}|Powerful {a:Visuals.}',
      paragraphs: [
        'At Brandotics, we believe great design combines creativity with a clear purpose. We bring together visual storytelling, thoughtful design principles, and brand-focused strategies to create graphics that communicate your message and connect with your audience.',
        'Our approach begins with understanding your brand, audience, and objectives. From developing visual identities to designing digital marketing materials, every creative element is planned to maintain consistency, communicate value, and strengthen your brand presence across different platforms.',
      ],
      features: [
        { icon: 'bulb', title: 'Brand-Focused Creativity', text: 'We create designs that reflect your brand personality, values, and visual identity.' },
        { icon: 'eye', title: 'Purposeful Visual Communication', text: 'We transform ideas and messages into clear, engaging visuals that are easy for your audience to understand.' },
        { icon: 'layers', title: 'Consistent Design Quality', text: 'We maintain a cohesive visual style across your marketing materials to help build recognition and trust.' },
      ],
    },
    cta: {
      heading: 'Ready to Bring Your {a:Brand to Life?}',
      text: "Make your business more recognizable with creative graphic design that communicates your vision. Let's transform your ideas into impactful visuals that capture attention, connect with your audience, and support your business growth.",
    },
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    icon: 'target',
    title: 'Google Ads Services',
    titleMarkup: 'Google Ads {a:Services}',
    summary:
      'Reach customers when they are actively searching for your products or services through targeted Google Ads campaigns designed to generate quality traffic, leads, and conversions.',
    tagline: 'Reach the Right People. Drive Real Results.',
    intro: [
      'At Brandotics, our Google Ads services help businesses reach potential customers at the right moment through targeted, performance-focused advertising campaigns. We combine keyword research, audience targeting, compelling ad copy, and campaign optimization to help your business improve online visibility and attract relevant traffic.',
      'Our approach goes beyond generating clicks. We focus on reaching people actively searching for your products or services, improving advertising efficiency, and creating opportunities for enquiries, leads, and sales. Whether you are launching your first campaign or improving existing advertising performance, our Google Ads strategies are tailored to your business goals and budget.',
      'With strategic planning and continuous optimization, Brandotics helps turn paid search advertising into a valuable channel for reaching your audience, generating qualified leads, and supporting measurable business growth.',
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
      intro:
        'Reaching potential customers online requires more than simply having a website. Google Ads helps your business appear in relevant search results and across supported advertising placements, giving you opportunities to connect with people who are interested in your offerings.',
      lead: 'A well-managed Google Ads strategy can help your business:',
      items: [
        'Increase online visibility',
        'Reach high-intent customers',
        'Generate qualified leads',
        'Drive relevant website traffic',
        'Measure advertising performance',
      ],
    },
    who: {
      heading: 'Who Needs Google Ads Services?',
      intro:
        'Our Google Ads services are designed for businesses that want to reach potential customers faster, promote their offerings, and achieve specific digital marketing objectives.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'Local service providers',
        'E-commerce businesses',
        'Established companies',
        'Businesses seeking more leads and sales',
      ],
    },
    why: {
      heading: 'Smarter {o:Campaigns.}|Stronger {a:Results.}',
      paragraphs: [
        'At Brandotics, we believe effective advertising begins with a clear understanding of your business objectives and target audience. We combine strategic keyword selection, persuasive ad messaging, audience insights, and ongoing performance analysis to help your advertising budget work more effectively.',
        'Our approach focuses on reaching relevant audiences, identifying campaign opportunities, and making informed adjustments based on performance data. From campaign setup and conversion tracking to budget management and optimization, every step is designed to support your marketing goals and improve advertising effectiveness.',
      ],
      features: [
        { icon: 'target', title: 'Targeted Advertising Strategy', text: 'We identify relevant keywords and audience opportunities to help connect your business with potential customers.' },
        { icon: 'wallet', title: 'Budget-Conscious Campaign Management', text: 'We monitor spending and campaign performance to help make informed decisions about advertising investment.' },
        { icon: 'gauge', title: 'Continuous Performance Optimization', text: 'We evaluate clicks, conversions, and other relevant metrics to identify opportunities to improve campaign performance.' },
      ],
    },
    cta: {
      heading: 'Ready to Turn Clicks {a:Into Customers?}',
      text: "Reach your ideal audience with strategic Google Ads campaigns built around your business goals. Let's improve your online visibility, attract relevant visitors, and create more opportunities for leads and sales.",
    },
  },
  {
    slug: 'content-writing',
    name: 'Content Writing',
    icon: 'text',
    title: 'Content Writing Services',
    titleMarkup: 'Content Writing {a:Services}',
    // The PDF's home page has no card copy for Content Writing, so this is the
    // opening sentence of the Content Writing page without "At Brandotics,".
    summary:
      'Our content writing services help businesses communicate their ideas, showcase their expertise, and connect with the right audience through meaningful, engaging content.',
    tagline: 'Words That Connect. Content That Converts.',
    intro: [
      'At Brandotics, our content writing services help businesses communicate their ideas, showcase their expertise, and connect with the right audience through meaningful, engaging content. We combine creative storytelling, audience research, and strategic messaging to create content that reflects your brand voice and supports your business goals.',
      'Our approach goes beyond putting words on a page. We focus on delivering valuable information, communicating your brand message clearly, and creating content that encourages readers to take action. Whether you need fresh website copy or consistent content for your digital marketing campaigns, our writing solutions are tailored to your audience, industry, and objectives.',
      'With thoughtful research and purposeful storytelling, Brandotics helps transform your ideas into compelling content that builds credibility, strengthens your online presence, and supports long-term business growth.',
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
      intro:
        'Quality content helps your business communicate its value, answer customer questions, and build meaningful connections with your audience. Well-crafted content also supports your digital marketing efforts by making your website more informative, your brand more recognizable, and your messaging more consistent.',
      lead: 'Effective content writing can help your business:',
      items: [
        'Communicate your brand message',
        'Build trust and credibility',
        'Improve search visibility',
        'Engage your target audience',
        'Encourage enquiries and conversions',
      ],
    },
    who: {
      heading: 'Who Needs Content Writing Services?',
      intro:
        'Our content writing services are designed for businesses that want to communicate more effectively, strengthen their digital presence, and share valuable information with their audience.',
      items: [
        'Startups and new businesses',
        'Small and medium-sized businesses',
        'E-commerce businesses',
        'Digital marketing agencies',
        'Established brands and companies',
        'Businesses with outdated or ineffective website content',
      ],
    },
    why: {
      heading: 'Meaningful {o:Words.}|Measurable {a:Impact.}',
      paragraphs: [
        'At Brandotics, we believe effective content starts with understanding your audience and communicating what makes your business valuable. We combine creative writing, relevant research, and strategic planning to develop content that reflects your brand identity and supports your marketing objectives.',
        'Our approach focuses on creating clear, engaging, and purposeful content for different platforms and audiences. From website copy and informative blog articles to persuasive marketing messages, every piece is developed to communicate your value, maintain your brand voice, and create a consistent experience for your readers.',
      ],
      features: [
        { icon: 'users', title: 'Audience-Focused Writing', text: "We create relevant content that addresses your audience's interests, questions, and needs." },
        { icon: 'search', title: 'SEO-Friendly Content', text: 'We incorporate relevant keywords and clear content structures to support discoverability while prioritizing readability and usefulness.' },
        { icon: 'chat', title: 'Consistent Brand Voice', text: 'We maintain a consistent tone and messaging style to help your business build recognition and communicate with confidence.' },
      ],
    },
    cta: {
      heading: 'Ready to Tell Your {a:Brand Story?}',
      text: "Give your business a stronger voice with content that informs, engages, and inspires action. Let's create meaningful content that connects with your audience, communicates your value, and supports your business goals.",
    },
  },
];

export const servicePath = (slug: string) => `/services/${slug}/`;
