export const my_work = [
  {
    work_no: 1,
    work_name: "CozzyPay - Financial Operations & Payout System",
    work_img:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1768573018/Screenshot_2026-01-16_at_2.12.04_PM_gcownf.png",
    description: "Financial platform enabling freelancers to withdraw earnings from in-app wallets to local bank accounts. Built secure wallet operations with transaction-safe balance updates, double-entry logic, and full auditability.",
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "TypeScript", "Render", "Paystack", "Stripe"],
    keyFeatures: [
      "Secure wallet operations with concurrency-safe withdrawal flows",
      "Paystack and Stripe integration for deposits, payouts, and webhook-driven transaction reconciliation",
      "Real-time notifications via WebSockets",
      "Background pipelines using Redis + BullMQ for payout retries and email receipts",
      "Optimized PostgreSQL performance for high transaction throughput",
      "Deployed on Render with automated CI/CD"
    ]
  },
  {
    work_no: 2,
    work_name: "Workopia - Job Listening Platform",
    work_img:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1740867356/Screenshot_51_qrusmv.png",
    websiteLink: "https://workopia-jade.vercel.app/",
    description: "A comprehensive job listing platform connecting job seekers with employers. Built with Next.js and Supabase for real-time data management, featuring advanced search, filtering, and application management capabilities.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Lucide Icons", "shadcn/ui", ],
    keyFeatures: [
      "Advanced job search and filtering system",
      "User authentication and profile management with Supabase",
      "Modern UI components built with shadcn/ui",
      "Responsive design with Tailwind CSS",
      "Real-time job updates and notifications",
      "Database and backend powered by Supabase"
    ]
  },
  {
    work_no: 3,
    work_name: "FMX - E-Commerce Platform",
    work_img:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741017800/Screenshot_55_kdwe5r.png",
    websiteLink: "https://fmx-chi.vercel.app/",
    description: "E-commerce platform connecting buyers and sellers with real-time order tracking, payment processing, and seller onboarding. Features responsive product listings, inventory management, and review systems.",
    techStack: ["Next.js", "React.js", "Redux Toolkit", "React Query", "Drizzle ORM", "Clerk Auth", "Paystack", "WebSockets"],
    keyFeatures: [
      "Responsive product listing with category and keyword filters",
      "Checkout and payment flows integrated with Paystack APIs",
      "Real-time order tracking and notifications via WebSockets",
      "Seller onboarding UI with profile verification and dashboard views",
      "Review and rating system for buyer feedback",
      "Clerk authentication for secure signup and role-based access"
    ]
  },
  {
    work_no: 4,
    work_name: "CalcFlow - Advanced Calculator",
    work_img:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1740868250/Screenshot_52_ct9nak.png",
    websiteLink: "https://scientific-calculator-kohl.vercel.app/",
    description: "A modern, fully functional scientific calculator with advanced mathematical operations, built with modern web technologies for optimal performance and user experience.",
    techStack: ["React.js", "JavaScript", "CSS"],
    keyFeatures: [
      "Advanced mathematical operations and functions",
      "Clean and intuitive user interface",
      "Responsive design",
      "Real-time calculation display"
    ]
  },
  // {
  //   work_no: 5,
  //   work_name: "Portfolio Landing Page",
  //   work_img:
  //     "https://res.cloudinary.com/dbrub0d6r/image/upload/v1740932059/Screenshot_53_b01ccu.png",
  //   websiteLink: "https://myportfolio-ten-blue-50.vercel.app/",
  //   description: "A modern, responsive portfolio landing page showcasing professional work and skills with smooth animations and clean design.",
  //   techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
  //   keyFeatures: [
  //     "Modern and responsive design",
  //     "Smooth animations and transitions",
  //     "Clean UI/UX",
  //     "Optimized performance"
  //   ]
  // },
];
