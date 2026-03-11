import ShareIcon from '@mui/icons-material/Share';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import BrushIcon from '@mui/icons-material/Brush';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BarChartIcon from '@mui/icons-material/BarChart';
import ComputerIcon from '@mui/icons-material/Computer';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PsychologyIcon from '@mui/icons-material/Psychology';

export interface ServicePoint {
    title: string;
    detail: string;
}

export interface ServiceTool {
    name: string;
    category: string;
}

export interface ServiceBenefit {
    title: string;
    description: string;
}

export interface Service {
    icon: React.ReactElement;
    title: string;
    color: string;
    gradient: string;
    description: string;
    overview: string;
    benefits: ServiceBenefit[];
    points: ServicePoint[];
    tools: ServiceTool[];
    path: string;
}

export const services: Service[] = [
    {
        icon: <ShareIcon sx={{ fontSize: 32 }} />,
        title: 'Social Media Marketing',
        color: '#4267B2',
        gradient: 'linear-gradient(135deg, #4267B2, #1877F2)',
        description: 'We craft data-driven social media strategies that amplify your brand presence across all platforms. From organic growth to paid campaigns, we turn followers into loyal customers.',
        overview: 'In today\'s digital-first world, social media isn\'t optional — it\'s where your customers spend their time, form opinions, and make buying decisions. A scattered approach wastes budget and opportunity. Our social media marketing service brings structure, creativity, and measurable strategy to your online presence. We analyze your audience behavior, craft platform-specific content that stops the scroll, and build communities that organically advocate for your brand. Whether you\'re launching a new product, scaling awareness, or nurturing customer loyalty, we create social ecosystems that compound growth month over month — turning passive followers into active buyers and vocal brand ambassadors.',
        benefits: [
            { title: 'Increased Brand Visibility', description: 'Get your brand in front of the right audience consistently across Instagram, TikTok, LinkedIn, Facebook, and X with content tailored to each platform\'s algorithm.' },
            { title: 'Higher Engagement Rates', description: 'Our data-driven content strategies generate 3-5x more engagement than generic posting, building genuine connections with your target audience.' },
            { title: 'Lead Generation at Scale', description: 'Turn social interactions into qualified leads through strategic CTAs, lead magnets, and funnel-optimized content that guides followers toward conversion.' },
            { title: 'Competitive Edge', description: 'Stay ahead of competitors with trend monitoring, rapid content pivots, and first-mover advantage on emerging platform features and formats.' },
        ],
        points: [
            {
                title: 'Strategic content planning & scheduling',
                detail: 'We develop monthly content calendars tailored to your brand, ensuring consistent posting across all platforms with optimal timing for maximum engagement and reach.'
            },
            {
                title: 'Community management & engagement',
                detail: 'Our team actively monitors, responds, and engages with your audience in real-time, building meaningful relationships and fostering a loyal community around your brand.'
            },
            {
                title: 'Influencer partnerships & collaborations',
                detail: 'We identify and connect you with relevant influencers in your niche, managing partnerships from outreach to campaign execution for authentic brand promotion.'
            },
            {
                title: 'Platform-specific growth strategies',
                detail: 'Tailored growth tactics for each platform — Instagram Reels, TikTok trends, LinkedIn thought leadership, X/Twitter threads — maximizing your presence where your audience lives.'
            },
            {
                title: 'Performance tracking & optimization',
                detail: 'Detailed analytics dashboards tracking KPIs like engagement rate, reach, conversions, and ROI with monthly optimization recommendations based on data insights.'
            },
        ],
        tools: [
            { name: 'Meta Business Suite', category: 'Management' },
            { name: 'Hootsuite', category: 'Scheduling' },
            { name: 'Buffer', category: 'Scheduling' },
            { name: 'Sprout Social', category: 'Analytics' },
            { name: 'Canva Pro', category: 'Design' },
            { name: 'Later', category: 'Scheduling' },
            { name: 'Brandwatch', category: 'Listening' },
            { name: 'Iconosquare', category: 'Analytics' },
        ],
        path: 'social-media-marketing'
    },
    {
        icon: <AdsClickIcon sx={{ fontSize: 32 }} />,
        title: 'PPC Advertising',
        color: '#EA4335',
        gradient: 'linear-gradient(135deg, #EA4335, #FBBC05)',
        description: 'Maximize your ad spend with precision-targeted PPC campaigns. We manage every aspect from keyword research to conversion tracking, delivering measurable ROI across Google, Meta, and beyond.',
        overview: 'Organic reach alone can\'t scale fast enough for businesses that need results now. PPC advertising puts your brand directly in front of high-intent buyers at the exact moment they\'re searching for what you offer. But poorly managed campaigns burn budgets fast — that\'s where we come in. We architect every campaign from the ground up: precise keyword targeting, compelling ad creatives, optimized landing pages, and relentless A/B testing. Our approach isn\'t "set and forget" — we continuously monitor, adjust bids, refine audiences, and eliminate wasted spend. The result is a predictable, scalable customer acquisition engine where every dollar is tracked and every click has a purpose.',
        benefits: [
            { title: 'Immediate Traffic & Leads', description: 'Unlike SEO which takes months, PPC delivers qualified traffic from day one — ideal for product launches, seasonal promotions, and time-sensitive campaigns.' },
            { title: 'Precise Audience Targeting', description: 'Reach buyers by demographics, interests, search intent, and behavior. Retarget website visitors and lookalike audiences for maximum conversion potential.' },
            { title: 'Transparent ROI Tracking', description: 'Every impression, click, and conversion is tracked. Know exactly how much revenue each ad dollar generates with clear ROAS and CPA metrics.' },
            { title: 'Scalable Growth', description: 'Once we identify winning campaigns, we scale them strategically — increasing budget on high-performers while cutting underperformers for compounding returns.' },
        ],
        points: [
            {
                title: 'Google Ads & Meta Ads campaign setup',
                detail: 'Complete campaign architecture including account structure, ad groups, audience targeting, and creative assets optimized for your specific business objectives and budget.'
            },
            {
                title: 'Keyword research & bid management',
                detail: 'In-depth keyword analysis using industry tools to identify high-intent, cost-effective keywords with automated bid strategies that maximize your budget efficiency.'
            },
            {
                title: 'A/B testing for ad creatives',
                detail: 'Systematic split testing of headlines, descriptions, images, and CTAs to continuously improve click-through rates and conversion performance across all campaigns.'
            },
            {
                title: 'Conversion rate optimization',
                detail: 'Landing page analysis and optimization, funnel mapping, and user behavior tracking to turn more clicks into customers and reduce cost per acquisition.'
            },
            {
                title: 'ROI tracking & reporting',
                detail: 'Transparent weekly and monthly reports with clear ROI metrics, ROAS calculations, and actionable insights to ensure every dollar of ad spend drives results.'
            },
        ],
        tools: [
            { name: 'Google Ads', category: 'Advertising' },
            { name: 'Meta Ads Manager', category: 'Advertising' },
            { name: 'Google Analytics 4', category: 'Analytics' },
            { name: 'SEMrush', category: 'Research' },
            { name: 'Unbounce', category: 'Landing Pages' },
            { name: 'Google Tag Manager', category: 'Tracking' },
            { name: 'Optmyzr', category: 'Optimization' },
            { name: 'SpyFu', category: 'Competitor Analysis' },
        ],
        path: 'ppc-advertising'
    },
    {
        icon: <SearchIcon sx={{ fontSize: 32 }} />,
        title: 'SEO',
        color: '#34A853',
        gradient: 'linear-gradient(135deg, #34A853, #0F9D58)',
        description: 'Dominate search engine rankings with our comprehensive SEO strategies. We combine technical expertise with content optimization to drive organic traffic that converts.',
        overview: 'Search engines are the gateway to your business — 68% of all online experiences begin with a search query, and the top 3 results capture over 75% of clicks. If you\'re not ranking, you\'re invisible. Our SEO service is a comprehensive, long-term growth engine. We start by fixing the technical foundation — site speed, crawlability, mobile experience — then layer on strategic content optimization, authoritative link building, and local search dominance. Unlike agencies that chase algorithm tricks, we build sustainable organic visibility that compounds over time. The traffic you earn through SEO keeps working for you 24/7, delivering the lowest cost-per-lead of any digital channel.',
        benefits: [
            { title: 'Sustainable Organic Traffic', description: 'Build a steady stream of high-quality visitors that grows month over month without ongoing ad spend — SEO traffic compounds, delivering long-term value.' },
            { title: 'Higher Trust & Credibility', description: 'Users inherently trust organic search results over ads. Ranking on page one positions your brand as an authority in your industry.' },
            { title: 'Lowest Cost Per Acquisition', description: 'Once ranked, organic traffic is essentially free. SEO consistently delivers the lowest CPA of any digital marketing channel over a 12-month period.' },
            { title: 'Local Market Domination', description: 'Capture nearby customers actively searching for your services with optimized Google Business profiles, local citations, and geo-targeted content.' },
        ],
        points: [
            {
                title: 'Technical SEO audits & fixes',
                detail: 'Comprehensive site crawls identifying issues like broken links, slow page speed, mobile usability problems, and indexing errors — all fixed to ensure search engines can properly access your site.'
            },
            {
                title: 'On-page & off-page optimization',
                detail: 'Strategic optimization of meta tags, headers, content structure, and internal linking combined with high-quality backlink building and brand mention strategies.'
            },
            {
                title: 'Link building strategies',
                detail: 'White-hat link acquisition through guest posting, digital PR, resource page outreach, and content-driven link earning to boost your domain authority and rankings.'
            },
            {
                title: 'Local SEO for businesses',
                detail: 'Google Business Profile optimization, local citation building, review management, and geo-targeted content to dominate local search results in your service areas.'
            },
            {
                title: 'Monthly ranking reports',
                detail: 'Detailed monthly reports tracking keyword positions, organic traffic growth, backlink profile changes, and competitor comparisons with strategic recommendations.'
            },
        ],
        tools: [
            { name: 'Ahrefs', category: 'Research' },
            { name: 'SEMrush', category: 'Research' },
            { name: 'Google Search Console', category: 'Monitoring' },
            { name: 'Screaming Frog', category: 'Audit' },
            { name: 'Moz Pro', category: 'Analytics' },
            { name: 'Surfer SEO', category: 'Content' },
            { name: 'Yoast SEO', category: 'On-page' },
            { name: 'GTmetrix', category: 'Performance' },
        ],
        path: 'seo'
    },
    {
        icon: <ArticleIcon sx={{ fontSize: 32 }} />,
        title: 'Content Creation',
        color: '#F5A623',
        gradient: 'linear-gradient(135deg, #F5A623, #FFCC44)',
        description: 'Compelling content that tells your story and drives engagement. From blog posts to video scripts, we create content that resonates with your audience and supports your business goals.',
        overview: 'Content is the fuel that powers every digital marketing channel — without it, your social media is empty, your SEO has nothing to rank, and your ads have nothing to say. But mediocre content is worse than no content at all. Our content creation service goes beyond words on a page. We develop strategic content ecosystems: blog articles that rank and convert, email sequences that nurture leads on autopilot, video scripts that captivate in seconds, and visual assets that stop the scroll. Every piece is crafted with your brand voice, audience pain points, and business goals at the center — ensuring content doesn\'t just exist, it performs.',
        benefits: [
            { title: 'Authority & Thought Leadership', description: 'Position your brand as the go-to expert in your industry with insightful, well-researched content that educates your audience and builds deep trust.' },
            { title: 'SEO-Powered Organic Growth', description: 'Every blog post and content piece is optimized for search engines, creating a growing library of indexed pages that drive free, targeted traffic indefinitely.' },
            { title: 'Multi-Channel Leverage', description: 'One core content piece becomes 10+ assets — a blog becomes social posts, email snippets, infographics, and video scripts, maximizing your content investment.' },
            { title: 'Nurture & Convert Leads', description: 'Strategic email sequences and content funnels guide prospects from awareness to purchase, automating your sales pipeline with personalized touchpoints.' },
        ],
        points: [
            {
                title: 'Blog writing & copywriting',
                detail: 'SEO-optimized articles, website copy, product descriptions, and thought leadership pieces crafted by experienced writers who understand your industry and audience.'
            },
            {
                title: 'Video scripts & production coordination',
                detail: 'End-to-end video content creation — from scriptwriting and storyboarding to production coordination and post-production, creating videos that captivate and convert.'
            },
            {
                title: 'Infographic & visual content design',
                detail: 'Data-driven infographics, social media graphics, and visual content that simplify complex information and boost shareability across all platforms.'
            },
            {
                title: 'Email marketing campaigns',
                detail: 'Strategic email sequences including welcome series, nurture campaigns, promotional blasts, and automated workflows that drive engagement and conversions.'
            },
            {
                title: 'Content calendars & strategy',
                detail: 'Comprehensive content strategies aligned with your business goals, seasonal trends, and audience interests — delivered as actionable editorial calendars.'
            },
        ],
        tools: [
            { name: 'Grammarly', category: 'Writing' },
            { name: 'Jasper AI', category: 'AI Writing' },
            { name: 'Adobe Creative Suite', category: 'Design' },
            { name: 'Mailchimp', category: 'Email' },
            { name: 'WordPress', category: 'CMS' },
            { name: 'Notion', category: 'Planning' },
            { name: 'Loom', category: 'Video' },
            { name: 'Hemingway Editor', category: 'Writing' },
        ],
        path: 'content-creation'
    },
    {
        icon: <BrushIcon sx={{ fontSize: 32 }} />,
        title: 'Branding',
        color: '#9C27B0',
        gradient: 'linear-gradient(135deg, #9C27B0, #E040FB)',
        description: 'Build a brand that stands out and stays memorable. We craft complete brand identities that communicate your values, connect with your audience, and set you apart from the competition.',
        overview: 'Your brand is more than a logo — it\'s the emotional response people have when they encounter your business. In a world of infinite choices, branding is what makes someone pick you over a competitor offering the same thing. We build brands from the inside out: starting with your mission, values, and audience psychology, then translating that into a visual and verbal identity that\'s instantly recognizable and deeply resonant. From the color palette that evokes the right emotion to the typography that communicates your personality, every element is intentional. A strong brand doesn\'t just attract customers — it creates advocates who sell for you through word of mouth.',
        benefits: [
            { title: 'Instant Recognition', description: 'A cohesive visual identity makes your brand instantly recognizable across every touchpoint — from a 2-second social scroll to a billboard on the highway.' },
            { title: 'Premium Positioning', description: 'Professional branding signals quality and trust, allowing you to command higher prices and attract ideal customers who value what you offer.' },
            { title: 'Emotional Customer Connection', description: 'Strategic brand messaging taps into your audience\'s aspirations and pain points, creating emotional bonds that drive loyalty beyond rational comparison.' },
            { title: 'Team & Culture Alignment', description: 'A clear brand identity aligns your entire team around shared values and messaging, ensuring consistent customer experiences at every touchpoint.' },
        ],
        points: [
            {
                title: 'Brand identity & logo design',
                detail: 'Custom logo creation with multiple concepts, revisions, and final delivery in all formats — along with complete visual identity systems including color palettes and typography.'
            },
            {
                title: 'Brand voice & messaging',
                detail: 'Defining your brand\'s unique tone, personality, and key messages that resonate with your target audience across all communication channels consistently.'
            },
            {
                title: 'Style guides & brand books',
                detail: 'Comprehensive brand guidelines documenting logo usage, color specifications, typography rules, imagery style, and communication standards for brand consistency.'
            },
            {
                title: 'Brand positioning strategy',
                detail: 'Market research-driven positioning that defines your unique value proposition, competitive advantages, and target audience for a clear market presence.'
            },
            {
                title: 'Visual consistency audits',
                detail: 'Thorough review of all brand touchpoints — website, social media, print materials — ensuring visual and messaging consistency that strengthens brand recognition.'
            },
        ],
        tools: [
            { name: 'Adobe Illustrator', category: 'Design' },
            { name: 'Adobe Photoshop', category: 'Design' },
            { name: 'Figma', category: 'UI/UX' },
            { name: 'Brandfolder', category: 'Asset Management' },
            { name: 'Coolors', category: 'Color Palette' },
            { name: 'Adobe InDesign', category: 'Layout' },
            { name: 'Fontjoy', category: 'Typography' },
            { name: 'Moodzer', category: 'Moodboarding' },
        ],
        path: 'branding'
    },
    {
        icon: <Inventory2Icon sx={{ fontSize: 32 }} />,
        title: 'Product & Packaging Design',
        color: '#FF5722',
        gradient: 'linear-gradient(135deg, #FF5722, #FF9800)',
        description: 'Transform your products with packaging that sells itself. We design eye-catching, functional packaging that elevates your brand on shelves and screens alike.',
        overview: 'Your packaging is your product\'s first impression — and often the deciding factor between a purchase and a pass. In retail, you have 3 seconds to capture attention. Online, your packaging is the unboxing experience that drives reviews, social shares, and repeat orders. We approach packaging design as a strategic sales tool, not just a container. Every element — shape, color, texture, typography, and structural design — is engineered to communicate your brand story, differentiate you on the shelf, and create a memorable customer experience. From concept sketches to print-ready files and 3D mockups, we handle the entire journey from idea to production.',
        benefits: [
            { title: 'Shelf Impact & Differentiation', description: 'Stand out in crowded retail environments with packaging that commands attention through strategic color, form, and visual hierarchy that draws the eye first.' },
            { title: 'Elevated Unboxing Experience', description: 'Create Instagram-worthy unboxing moments that customers share organically, turning every delivery into free marketing content and social proof.' },
            { title: 'Brand Consistency Across Products', description: 'Maintain a cohesive brand identity across your entire product line with scalable design systems that look unified yet distinct for each SKU.' },
            { title: 'Production-Ready Precision', description: 'Receive files that go straight to print without delays — correct color profiles, bleed settings, and vendor specs that save time and avoid costly reprints.' },
        ],
        points: [
            {
                title: 'Product label & packaging design',
                detail: 'Creative packaging designs that combine aesthetics with functionality — eye-catching labels, boxes, pouches, and wraps that tell your brand story at the point of purchase.'
            },
            {
                title: 'Print-ready file preparation',
                detail: 'Production-ready files with proper bleed, trim marks, color profiles (CMYK/Pantone), and specifications for seamless handoff to any printing vendor.'
            },
            {
                title: 'Retail & e-commerce packaging',
                detail: 'Packaging optimized for both retail shelf impact and e-commerce unboxing experiences — creating memorable moments that drive reviews and repeat purchases.'
            },
            {
                title: '3D mockup visualization',
                detail: 'Photorealistic 3D renders of your packaging design on product mockups, giving you a clear preview before committing to production and printing.'
            },
            {
                title: 'Brand-consistent design systems',
                detail: 'Scalable design systems ensuring visual consistency across your entire product line — from primary packaging to shipping materials and branded inserts.'
            },
        ],
        tools: [
            { name: 'Adobe Illustrator', category: 'Design' },
            { name: 'Adobe Dimension', category: '3D Mockups' },
            { name: 'Blender', category: '3D Rendering' },
            { name: 'Adobe InDesign', category: 'Print Layout' },
            { name: 'Packlane', category: 'Packaging' },
            { name: 'Esko ArtPro+', category: 'Prepress' },
            { name: 'KeyShot', category: 'Visualization' },
            { name: 'Adobe Photoshop', category: 'Retouching' },
        ],
        path: 'product-packaging-design'
    },
    {
        icon: <BarChartIcon sx={{ fontSize: 32 }} />,
        title: 'Analytics & Reporting',
        color: '#00BCD4',
        gradient: 'linear-gradient(135deg, #00BCD4, #0097A7)',
        description: 'Turn data into actionable insights that drive growth. Our analytics services provide clear visibility into your marketing performance with reports that inform smarter decisions.',
        overview: 'Most businesses are drowning in data but starving for insights. You have Google Analytics, social media metrics, ad platform dashboards, and email reports — but none of them talk to each other, and none of them tell you what to actually do next. That\'s the gap we fill. Our analytics service connects every data point into a unified picture, then translates numbers into plain-language recommendations that drive action. We don\'t just show you what happened — we tell you why it happened and what to do about it. From custom dashboards that update in real-time to quarterly strategy reviews that realign your marketing with your business goals, we turn data into your most powerful competitive advantage.',
        benefits: [
            { title: 'Unified Data Visibility', description: 'See all your marketing performance — ads, social, SEO, email, and web — in a single dashboard, eliminating the guesswork of juggling multiple platforms.' },
            { title: 'Data-Driven Decision Making', description: 'Replace gut-feeling marketing with evidence-based strategies. Know exactly which channels, campaigns, and content pieces deliver the highest ROI.' },
            { title: 'Waste Elimination', description: 'Identify underperforming campaigns, wasted ad spend, and low-converting channels fast — then reallocate budgets to what actually moves the needle.' },
            { title: 'Predictive Strategy', description: 'Spot trends before your competitors with predictive analytics that forecast seasonal patterns, audience behavior shifts, and emerging opportunities.' },
        ],
        points: [
            {
                title: 'Custom dashboard creation',
                detail: 'Tailored analytics dashboards pulling data from all your marketing channels into a single view — Google Analytics, social media, ads, and email all in one place.'
            },
            {
                title: 'Multi-channel performance tracking',
                detail: 'Unified tracking across all digital channels with attribution modeling to understand which touchpoints drive the most valuable customer actions and revenue.'
            },
            {
                title: 'Insights & actionable recommendations',
                detail: 'Beyond raw numbers — our analysts interpret your data and provide specific, prioritized recommendations to improve performance and maximize marketing ROI.'
            },
            {
                title: 'Monthly/quarterly strategy reviews',
                detail: 'Regular strategy sessions reviewing performance trends, competitive landscape shifts, and emerging opportunities to keep your marketing strategy ahead of the curve.'
            },
            {
                title: 'Competitor analysis reports',
                detail: 'Deep-dive competitive intelligence covering your rivals\' digital presence, ad strategies, content performance, and market positioning to identify gaps and opportunities.'
            },
        ],
        tools: [
            { name: 'Google Analytics 4', category: 'Web Analytics' },
            { name: 'Google Looker Studio', category: 'Dashboards' },
            { name: 'Hotjar', category: 'Behavior' },
            { name: 'Mixpanel', category: 'Product Analytics' },
            { name: 'Tableau', category: 'Visualization' },
            { name: 'Google Tag Manager', category: 'Tracking' },
            { name: 'SEMrush', category: 'Competitor Intel' },
            { name: 'Supermetrics', category: 'Data Pipeline' },
        ],
        path: 'analytics-reporting'
    },
    {
        icon: <ComputerIcon sx={{ fontSize: 32 }} />,
        title: 'Web Design & Development',
        color: '#2196F3',
        gradient: 'linear-gradient(135deg, #2196F3, #21CBF3)',
        description: 'Beautiful, high-performance websites built to convert. We combine stunning design with robust development to create digital experiences that drive business results.',
        overview: 'Your website is your digital headquarters — it\'s where first impressions are formed, trust is built, and revenue is generated. Yet most business websites are slow, outdated, and fail to convert the visitors they do attract. We build websites that are both beautiful and brutally effective. Every design decision is grounded in UX research and conversion best practices. Every line of code is optimized for speed, security, and scalability. Whether you need a custom React web application, a WordPress-powered content hub, or a full e-commerce platform, we deliver solutions that load in under 2 seconds, rank well on Google, and guide visitors toward taking action — whether that\'s making a purchase, booking a call, or filling out a form.',
        benefits: [
            { title: 'Conversion-Optimized Design', description: 'Every page is designed with clear user journeys, strategic CTAs, and persuasion principles that turn casual visitors into leads and leads into customers.' },
            { title: 'Lightning-Fast Performance', description: 'Sub-2-second load times through optimized code, image compression, CDN delivery, and caching — because every extra second of load time drops conversions by 7%.' },
            { title: 'Mobile-First Experience', description: 'Over 60% of web traffic is mobile. Every site we build is designed mobile-first with responsive layouts, touch-friendly interfaces, and fast mobile rendering.' },
            { title: 'Scalable Architecture', description: 'Built on modern tech stacks that grow with your business — easily add features, pages, integrations, and handle traffic spikes without rebuilding from scratch.' },
        ],
        points: [
            {
                title: 'Custom MERN stack & WordPress solutions',
                detail: 'Full-stack development using MongoDB, Express, React, and Node.js for custom web applications, or WordPress for content-driven sites — tailored to your specific needs.'
            },
            {
                title: 'Responsive & user-centric UI/UX design',
                detail: 'Mobile-first, accessible designs based on user research and best practices — ensuring seamless experiences across all devices with intuitive navigation and clear CTAs.'
            },
            {
                title: 'E-commerce & inventory systems integration',
                detail: 'Complete online store setups with payment gateways, inventory management, order tracking, and CRM integrations for streamlined e-commerce operations.'
            },
            {
                title: 'Website maintenance & security updates',
                detail: 'Ongoing maintenance plans including regular backups, security patches, plugin updates, performance monitoring, and 24/7 uptime surveillance.'
            },
            {
                title: 'Speed optimization & hosting management',
                detail: 'Core Web Vitals optimization, image compression, CDN setup, caching strategies, and managed hosting solutions for lightning-fast page loads under 2 seconds.'
            },
        ],
        tools: [
            { name: 'React / Next.js', category: 'Frontend' },
            { name: 'Node.js / Express', category: 'Backend' },
            { name: 'MongoDB', category: 'Database' },
            { name: 'Figma', category: 'UI/UX Design' },
            { name: 'WordPress', category: 'CMS' },
            { name: 'Vercel / AWS', category: 'Hosting' },
            { name: 'GitHub', category: 'Version Control' },
            { name: 'Cloudflare', category: 'CDN & Security' },
        ],
        path: 'web-design-development'
    },
    {
        icon: <VideoCameraBackIcon sx={{ fontSize: 32 }} />,
        title: 'Media Coverage',
        color: '#E91E63',
        gradient: 'linear-gradient(135deg, #E91E63, #FF4081)',
        description: 'Professional media production that captures attention. From events to corporate storytelling, we deliver cinematic-quality content that amplifies your brand narrative.',
        overview: 'In a visual-first digital landscape, professional media coverage is what separates forgettable brands from unforgettable ones. Whether it\'s a corporate event, product launch, behind-the-scenes documentary, or live-streamed webinar, the quality of your visual content directly reflects the quality of your brand. We provide end-to-end media production: professional multi-camera setups, cinematic lighting, broadcast-quality audio, and Hollywood-grade post-production. But we go beyond technical excellence — we tell stories. Every frame is crafted to communicate your brand\'s narrative, evoke emotion, and create content that your audience actually wants to watch and share. One great video can generate more trust and engagement than a hundred blog posts.',
        benefits: [
            { title: 'Professional Brand Image', description: 'High-quality photos and videos instantly elevate your brand perception, signaling professionalism and attention to detail to clients and partners.' },
            { title: 'Evergreen Content Library', description: 'Professional media becomes a permanent asset — reuse event footage, photos, and testimonials across ads, social media, website, and presentations for years.' },
            { title: 'Emotional Storytelling', description: 'Video is the most powerful medium for emotional connection. Our cinematic approach creates narratives that move people and make your brand unforgettable.' },
            { title: 'Multi-Platform Distribution', description: 'Receive content optimized for every platform — vertical for Reels/TikTok, widescreen for YouTube, square for feeds, and high-res for print and presentations.' },
        ],
        points: [
            {
                title: 'Professional event photography & videography',
                detail: 'Multi-camera event coverage with professional lighting, audio, and editing — delivering polished photos and videos that capture every key moment of your events.'
            },
            {
                title: 'Corporate documentary & storytelling',
                detail: 'Compelling brand documentaries and behind-the-scenes content that humanize your company, showcase your culture, and build emotional connections with your audience.'
            },
            {
                title: 'Press release & media relations',
                detail: 'Strategic press release writing and distribution through our media network, securing coverage in relevant publications and building your brand\'s credibility.'
            },
            {
                title: 'Live streaming & real-time coverage',
                detail: 'Professional multi-platform live streaming for events, product launches, and webinars with real-time graphics, lower thirds, and audience engagement tools.'
            },
            {
                title: 'Post-production & cinematic editing',
                detail: 'Hollywood-grade post-production including color grading, sound design, motion graphics, and special effects that transform raw footage into compelling visual stories.'
            },
        ],
        tools: [
            { name: 'Adobe Premiere Pro', category: 'Video Editing' },
            { name: 'Adobe After Effects', category: 'Motion Graphics' },
            { name: 'DaVinci Resolve', category: 'Color Grading' },
            { name: 'Canon / Sony Cinema', category: 'Cameras' },
            { name: 'OBS Studio', category: 'Live Streaming' },
            { name: 'Adobe Lightroom', category: 'Photo Editing' },
            { name: 'Cision', category: 'Media Relations' },
            { name: 'StreamYard', category: 'Streaming' },
        ],
        path: 'media-coverage'
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
        title: 'AI Digital Influence',
        color: '#673AB7',
        gradient: 'linear-gradient(135deg, #673AB7, #512DA8)',
        description: 'Harness the power of artificial intelligence to revolutionize your digital marketing. We create AI-powered solutions that automate, personalize, and scale your brand influence.',
        overview: 'AI isn\'t the future of marketing — it\'s the present, and businesses that aren\'t leveraging it are already falling behind. From AI-generated virtual influencers that represent your brand 24/7 to predictive analytics that anticipate customer behavior before it happens, artificial intelligence is transforming every aspect of digital marketing. We\'re at the cutting edge of this revolution. Our AI Digital Influence service combines the latest in generative AI, machine learning, and synthetic media to create marketing solutions that were impossible just two years ago. Imagine content that writes and designs itself, customer experiences that personalize in real-time, and brand ambassadors that never sleep — that\'s what we deliver.',
        benefits: [
            { title: '24/7 Brand Presence', description: 'AI-powered virtual influencers and automated content workflows keep your brand active and engaging around the clock, across time zones, without human bottlenecks.' },
            { title: 'Hyper-Personalization at Scale', description: 'Deliver individually tailored content, product recommendations, and ad experiences to millions of users simultaneously — something impossible with manual marketing.' },
            { title: 'Predictive Competitive Advantage', description: 'Machine learning models analyze market signals and consumer data to predict trends, optimize campaigns, and make strategic decisions before competitors react.' },
            { title: 'Dramatic Cost Efficiency', description: 'Automate repetitive marketing tasks — content drafting, A/B testing, audience segmentation, reporting — freeing your team for high-level strategy and creativity.' },
        ],
        points: [
            {
                title: 'AI influencer creation & management',
                detail: 'Custom AI-generated virtual influencers designed to represent your brand 24/7 — with unique personalities, consistent posting, and zero scheduling conflicts.'
            },
            {
                title: 'Automated AI-driven content workflows',
                detail: 'Intelligent content pipelines that leverage AI for ideation, drafting, optimization, and scheduling — producing more content faster while maintaining quality and brand voice.'
            },
            {
                title: 'Predictive consumer behavior analytics',
                detail: 'Machine learning models that analyze customer data to predict purchase behavior, churn risk, and lifetime value — enabling proactive marketing strategies.'
            },
            {
                title: 'AI-enhanced personalized marketing',
                detail: 'Hyper-personalized customer experiences powered by AI — dynamic email content, product recommendations, and ad targeting that adapts to individual user behavior in real-time.'
            },
            {
                title: 'Synthetic media & virtual brand avatars',
                detail: 'Next-generation synthetic media including AI-generated videos, virtual spokespersons, and interactive brand avatars for immersive customer engagement experiences.'
            },
        ],
        tools: [
            { name: 'ChatGPT / OpenAI', category: 'AI Generation' },
            { name: 'Midjourney', category: 'AI Imagery' },
            { name: 'Synthesia', category: 'AI Video' },
            { name: 'HeyGen', category: 'Virtual Avatars' },
            { name: 'Runway ML', category: 'AI Editing' },
            { name: 'TensorFlow', category: 'Machine Learning' },
            { name: 'ElevenLabs', category: 'AI Voice' },
            { name: 'Replicate', category: 'AI Models' },
        ],
        path: 'ai-digital-influence'
    },
];
