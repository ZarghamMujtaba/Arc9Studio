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

export const services = [
    {
        icon: <ShareIcon sx={{ fontSize: 32 }} />,
        title: 'Social Media Marketing',
        color: '#4267B2',
        gradient: 'linear-gradient(135deg, #4267B2, #1877F2)',
        points: [
            'Strategic content planning & scheduling',
            'Community management & engagement',
            'Influencer partnerships & collaborations',
            'Platform-specific growth strategies',
            'Performance tracking & optimization',
        ],
        path: 'social-media-marketing'
    },
    {
        icon: <AdsClickIcon sx={{ fontSize: 32 }} />,
        title: 'PPC Advertising',
        color: '#EA4335',
        gradient: 'linear-gradient(135deg, #EA4335, #FBBC05)',
        points: [
            'Google Ads & Meta Ads campaign setup',
            'Keyword research & bid management',
            'A/B testing for ad creatives',
            'Conversion rate optimization',
            'ROI tracking & reporting',
        ],
        path: 'ppc-advertising'
    },
    {
        icon: <SearchIcon sx={{ fontSize: 32 }} />,
        title: 'SEO',
        color: '#34A853',
        gradient: 'linear-gradient(135deg, #34A853, #0F9D58)',
        points: [
            'Technical SEO audits & fixes',
            'On-page & off-page optimization',
            'Link building strategies',
            'Local SEO for businesses',
            'Monthly ranking reports',
        ],
        path: 'seo'
    },
    {
        icon: <ArticleIcon sx={{ fontSize: 32 }} />,
        title: 'Content Creation',
        color: '#F5A623',
        gradient: 'linear-gradient(135deg, #F5A623, #FFCC44)',
        points: [
            'Blog writing & copywriting',
            'Video scripts & production coordination',
            'Infographic & visual content design',
            'Email marketing campaigns',
            'Content calendars & strategy',
        ],
        path: 'content-creation'
    },
    {
        icon: <BrushIcon sx={{ fontSize: 32 }} />,
        title: 'Branding',
        color: '#9C27B0',
        gradient: 'linear-gradient(135deg, #9C27B0, #E040FB)',
        points: [
            'Brand identity & logo design',
            'Brand voice & messaging',
            'Style guides & brand books',
            'Brand positioning strategy',
            'Visual consistency audits',
        ],
        path: 'branding'
    },
    {
        icon: <Inventory2Icon sx={{ fontSize: 32 }} />,
        title: 'Product & Packaging Design',
        color: '#FF5722',
        gradient: 'linear-gradient(135deg, #FF5722, #FF9800)',
        points: [
            'Product label & packaging design',
            'Print-ready file preparation',
            'Retail & e-commerce packaging',
            '3D mockup visualization',
            'Brand-consistent design systems',
        ],
        path: 'product-packaging-design'
    },
    {
        icon: <BarChartIcon sx={{ fontSize: 32 }} />,
        title: 'Analytics & Reporting',
        color: '#00BCD4',
        gradient: 'linear-gradient(135deg, #00BCD4, #0097A7)',
        points: [
            'Custom dashboard creation',
            'Multi-channel performance tracking',
            'Insights & actionable recommendations',
            'Monthly/quarterly strategy reviews',
            'Competitor analysis reports',
        ],
        path: 'analytics-reporting'
    },
    {
        icon: <ComputerIcon sx={{ fontSize: 32 }} />,
        title: 'Web Design & Development',
        color: '#2196F3',
        gradient: 'linear-gradient(135deg, #2196F3, #21CBF3)',
        points: [
            'Custom MERN stack & WordPress solutions',
            'Responsive & user-centric UI/UX design',
            'E-commerce & inventory systems integration',
            'Website maintenance & security updates',
            'Speed optimization & hosting management',
        ],
        path: 'web-design-development'
    },
    {
        icon: <VideoCameraBackIcon sx={{ fontSize: 32 }} />,
        title: 'Media Coverage',
        color: '#E91E63',
        gradient: 'linear-gradient(135deg, #E91E63, #FF4081)',
        points: [
            'Professional event photography & videography',
            'Corporate documentary & storytelling',
            'Press release & media relations',
            'Live streaming & real-time coverage',
            'Post-production & cinematic editing',
        ],
        path: 'media-coverage'
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
        title: 'AI Digital Influence',
        color: '#673AB7',
        gradient: 'linear-gradient(135deg, #673AB7, #512DA8)',
        points: [
            'AI influencer creation & management',
            'Automated AI-driven content workflows',
            'Predictive consumer behavior analytics',
            'AI-enhanced personalized marketing',
            'Synthetic media & virtual brand avatars',
        ],
        path: 'ai-digital-influence'
    },
];
