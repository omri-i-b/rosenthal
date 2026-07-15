/* ------------------------------------------------------------------ *
 * Single source of truth for site copy.
 * ALL prose below is verbatim from rosenthalcpas.com — do not reword.
 * Short heading labels are drawn from the site's own terms.
 * ------------------------------------------------------------------ */

export const firm = {
  name: 'Rosenthal & Co., P.C.',
  shortName: 'Rosenthal & Co.',
  // From the logo lockup on the original site:
  tagline: 'Certified Public Accountants · Business & Financial Advisors',
  founded: 1987,
  address: {
    line1: '3900 Essex Lane',
    line2: 'Suite 1120',
    city: 'Houston',
    state: 'TX',
    zip: '77027',
  },
  phone: '(713) 655-0163',
  fax: '(713) 655-7200',
  email: 'Info@rosenthalcpas.com',
  directionsUrl:
    'https://maps.google.com/maps?q=3900+Essex+Lane,+Suite+1120,+Houston,+TX+77027',
  sharefileUrl: 'https://rosenthalcpas.sharefile.com',
  newsletterUrl: 'http://www.dynamicontent.com/DCv2/main.asp?key=rosenthalcpas',
  calculatorsUrl: 'http://www.dynamicontent.com/DCv2/Calcs.asp?key=rosenthalcpas',
}

export const nav = [
  { label: 'Firm Profile', to: '/firm' },
  { label: 'What We Offer', to: '/services' },
  { label: 'Useful Resources', to: '/resources' },
  { label: 'News', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
]

/* Homepage "Who We Are - Short Introduction" (also the Firm Profile intro) */
export const introParagraph =
  'Our CPA firm is proactive, resourceful and responsive with the personal attention that only a small firm can provide. Our clients come back to us year after year because they can count on our technical expertise and professional guidance. We work to develop long-term relationships. Whether your needs are simple or complex, we can help.'

/* Homepage "What We Offer" blurb */
export const whatWeOfferBlurb =
  'At Rosenthal & Co., P.C., we are dedicated planners who work together with the client’s professional team of attorneys, investment advisors, brokers, bankers and family members to successfully develop and implement long-term tax and financial strategies for multiple generations. Our goal is to make life less taxing!'

/* "What We Offer" page copy */
export const whatWeOffer = {
  intro:
    'At Rosenthal & Co., P.C., we are dedicated planners who work together with a client’s professional team of attorneys, investment advisors, brokers, bankers and family members to successfully develop and implement long-term strategies for multiple generations. Our goal is to make life less taxing!',
  listIntro:
    'Rosenthal & Co, P.C. is a well established CPA firm that is comprised of highly experienced CPA’s offering:',
  prevention:
    'The best cure for tax problems starts with prevention. Navigating the complex maze of rules, deadlines and ever-changing legislation can be challenging. At Rosenthal & Co., P.C., we are committed to help you minimize your tax burden and maximize your after-tax income.',
  calculators:
    'Visit our set of Financial Calculators for quick answers on topics such as your IRA, investments, your child’s college tuition, and your mortgage or credit card calculations.',
  newsletter:
    'Looking for a little information right now? View the latest Tax and Financial News article in our Newsletter.',
}

/* The six offerings — heading label is the leading term; body is verbatim. */
export const services = [
  {
    id: 'tax',
    title: 'Tax preparation & compliance',
    body: 'All areas of tax preparation/compliance: federal & state, including individual, businesses, partnerships, all forms of trusts, private foundations, estate and gift',
  },
  {
    id: 'planning',
    title: 'Strategic tax & business planning',
    body: 'Strategic tax & business planning including choice of entity selection, internal controls and accounting systems',
  },
  {
    id: 'financial',
    title: 'Personal financial planning',
    body: 'Personal financial planning including retirement, succession planning, investment & risk management, and charitable planning',
  },
  {
    id: 'wealth',
    title: 'Wealth transfer planning',
    body: 'Wealth transfer planning focusing on multiple generations and life’s many changes',
  },
  {
    id: 'litigation',
    title: 'Litigation support',
    body: 'Litigation support including analysis of documents and case preparation such as separate property tracing as related to divorce matters, will contests and settlements',
  },
  {
    id: 'service',
    title: 'Timely & accurate services',
    body: 'Timely & accurate services at a fair price',
  },
]

/* Firm Profile page */
export const firmProfile = {
  history:
    'Since our founding in 1987, we have provided quality tax and financial planning to individuals, small businesses, professional corporations, fiduciaries, executive groups, private foundations, and various health care providers. In 1989, the City of Houston certified the firm as a Women Business Enterprise. We are knowledgeable and creative in our tax planning techniques. We identify goals and coordinate effectively with clients, brokers, attorneys and advisors to develop workable plans.',
  differentIntro: 'Regardless of what service you need, remember what makes us different:',
  differentiators: [
    'Technical expertise',
    'Personal attention',
    'Reliable services',
    'Trusted advisors to family groups',
    'We get things done!',
  ],
  servicesEasier:
    'Our services are designed to make your job easier by providing you with more time to focus on what’s important to you.',
}

/* CPA Profiles — bios verbatim from the Firm Profile page. */
export const people = [
  {
    name: 'Louise S. Rosenthal, CPA, PFS',
    email: 'lrosenthal@rosenthalcpas.com',
    role: 'Principal Shareholder',
    bio: 'Louise has over 30 years of experience providing tax planning and tax compliance service to families and businesses. Louise earned her B.A. from Newcomb College graduating summa cum laude, Phi Beta Kappa and she continued on to complete her M.B.A. from Tulane University. Her career started with Ernst & Young. She became a principal shareholder of her firm in 1987. Louise is a member of the Houston Estate & Financial Forum and has served for 13 years on the their Board of Directors, including former President. She is also a member of the Planned Giving Council and has served on their Board of Directors, including former Treasurer. Her other professional affiliations include the American Institute of CPA’s, Texas Society of CPA’s, Houston Business & Estate Planning Council, and she has served 4 consecutive terms as President of the Wednesday Tax Forum and continues to be a contributing member. In 1990, Louise earned the highly regarded Personal Financial Specialist (PFS) credential which represents a combination of expertise to guide clients on tax, retirement, estate, trust & charitable planning, investment and risk management decisions for long-term multi-generational planning. Louise’s attention to client service and involvement in the business community allow her to make a real difference.',
  },
  {
    name: 'Leah A. Magee, CPA',
    email: 'lmagee@rosenthalcpas.com',
    role: 'Principal',
    bio: 'Leah has over 25 years of tax and consulting experience. She earned her B.S. from the University of South Alabama in Business and Management Study. She joined Rosenthal & Co., P.C. in 1993 and became a principal with the firm in 1999. Leah is a member of the Texas Society of CPA’s and the Houston Estate & Financial Forum. Leah has served on the Board of Directors of Hellenic Child Development Center for three years, and held the office of President for two years. She has served as advisor for youth programs and is a frequent speaker at Career Day, promoting various accounting opportunities to high school students. She works closely with business owners in developing business plans, particularly focusing on tax planning, internal controls, and accounting systems. Her experience includes extensive work in taxation and accounting for health care providers, attorneys, wholesalers, transportation companies, entrepreneurs, and other professional service providers. Leah has been instrumental in helping clients with strategic planning, including comprehensive tax analysis regarding business transactions.',
  },
]

/* Useful Resources page */
export const resourcesIntro =
  'Our website includes access to a variety of valuable financial tools such as tax & financial news, federal tax forms, IRS publications, and financial calculators. While these tools are not a substitute for financial and tax advice from a qualified professional, they can be useful.'

export const resources = [
  { title: 'Tax & financial news', href: firm.newsletterUrl },
  { title: 'Federal tax forms', href: '/resources' },
  { title: 'IRS publications', href: '/resources' },
  { title: 'Financial calculators', href: firm.calculatorsUrl },
]
