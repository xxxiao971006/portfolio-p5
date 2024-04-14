type Project = {
    id: number;
    title: string;
    description: string;
    time: string;
    skills: string[];
    tags: string[];
    coverImg: string;
    hostedLink: string;
    githubLink: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Trade Square",
        description: "A batering app that allows users to post their unwanted items and trade with other users for items that they want. We wanted to create an app that would help users get rid of their unwanted items by trading it for an item that they do want.",
        time: "2022",
        skills: ["express.js", "prisma", "PubNub"],
        tags: ["Marketplace", "Bartering", "Real-time Chat"],
        coverImg: "https://i.imghippo.com/files/YerTZ1712613634.jpg",
        hostedLink: "https://www.google.com",
        githubLink: "https://github.com/xxxiao971006/TradeSquare",
    },
    {
        id: 2,
        title: "Cocoon",
        description: "Cocoon is an AI-driven app designed to help you switch careers seamlessly. It scans your resume to identify your skills and then uses open job data, Udemy courses, and college programs to create a tailored roadmap for your new career. By finding transferable skills and suggesting relevant courses, Cocoon makes it easier to fill skill gaps and prepare for a successful transition.",
        time: "2023",
        skills: ["OpenAI API", "O*NET Web Services API", "Langchain"],
        tags: ["Resume Analysis", "AI-driven Career Transition", "Skill Gap Analysis"],
        coverImg: "https://i.imghippo.com/files/6HVIL1712639570.png",
        hostedLink: "https://www.cocoon.quest/",
        githubLink: "https://github.com/xxxiao971006/cocoon",
    },
    {
        id: 3,
        title: "Mock Doctor Who's Auction",
        description: "The Live Auction Platform will allow users to participate in real-time auctions for various items related to the popular TV series Doctor Who. The platform aims to create an immersive experience for fans by offering a dynamic bidding environment with features such as creating auctions, bidding on items and real-time updates for auction status. ",
        time: "2024",
        skills: ["Twilio", "ASP.NET Core", "SignalR"],
        tags: ["Online Auctions", "Real-time Bidding", "SMS Notifications"],
        coverImg: "https://i.imghippo.com/files/4IpXc1712639552.png",
        hostedLink: "https://auctionapp-xiao.fly.dev",
        githubLink: "https://github.com/xxxiao971006/signalR-auction-app",
    },
    {
        id: 4,
        title: "Alderbridge Dental Clinic Website Redesign",
        description: "This project is aiming to redesign the website for Alderbridge Dental Clinic. The goal is to create a modern, user-friendly design that showcases the clinic's services and provides an easy way for patients to book appointments. The new website will feature a clean layout, intuitive navigation, and responsive design to ensure a seamless user experience across all devices.",
        time: "2024",
        skills: ["Next.js", "Tailwind CSS"],
        tags: ["Redesign", "UI/UX Design", ],
        coverImg: "https://i.imghippo.com/files/t9c581712639627.png",
        hostedLink: "https://portfilio-p3-qjx68py5v-butterbuns-projects.vercel.app/home",
        githubLink: "https://github.com/xxxiao971006/signalR-auction-app",
    },
    {
        id: 5,
        title: "Laravel Movie Collection",
        description: "A web application that allows users to browse and search for movies using the TMDB API. Users can create an account, add movies to their collection, and rate movies. The application also features a real-time chat system for users to discuss movies and share recommendations.",
        time: "2024",
        skills: ["Laravel", "TMDB API"],
        tags: ["Movie Database"],
        coverImg: "https://i.imghippo.com/files/TTH2j1713129174.png",
        hostedLink: "https://laravel-movies-morning-night-583.fly.dev/",
        githubLink: "https://github.com/xxxiao971006/laravel-movies",
    }
];

export { projects };
export type { Project };
