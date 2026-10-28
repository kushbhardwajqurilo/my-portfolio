export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices and Patterns",
    excerpt:
      "Learn how to structure large-scale React applications with proper component architecture, state management, and performance optimizations.",
    content: `Building scalable React applications requires disciplined architectural choices from day one. In enterprise web applications, codebases tend to grow quickly in complexity as teams introduce multiple state layers, asynchronous requests, and evolving UI specifications.

### 1. Component Architecture & Separation of Concerns
Keep presentational components strictly decoupled from business logic and data fetching. By following the container-presenter pattern or utilizing focused custom hooks, your UI stays reusable, testable, and resilient to refactoring.

### 2. State Management Strategy
Avoid putting every piece of data into a global store. Differentiate between server cache (managed via tools like TanStack Query), form state (handled locally with react-hook-form), and genuinely global app state (such as theme or auth sessions).

### 3. Performance & Code Splitting
Utilize dynamic imports with React.lazy and Suspense to lazy-load route-level chunks. Optimize heavy re-renders using memoization techniques (useMemo, useCallback) with proper profiling in React DevTools.`,
    category: "React",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    author: "Kush Bhardwaj",
    featured: true,
    slug: "building-scalable-react-applications",
    keywords: [
      "React best practices",
      "Scalable React architecture",
      "React performance optimization",
      "Frontend system design",
    ],
  },
  {
    id: 2,
    title: "Modern CSS Techniques: From Grid to Container Queries",
    excerpt:
      "Explore the latest CSS features and how they can revolutionize your web development workflow, including CSS Grid, Flexbox, and container queries.",
    content: `Modern CSS has evolved tremendously, reducing the reliance on JavaScript calculations and heavy UI utility libraries for complex responsive layouts.

### Container Queries Over Media Queries
While media queries adapt layouts based on viewport width, CSS Container Queries allow components to respond dynamically to the width of their immediate parent container. This makes components truly modular and drop-in ready anywhere in your application.

### Subgrid & Advanced CSS Grid
Subgrid unlocks nested grid alignment, allowing child elements across independent cards to align rows with precision. Combined with minmax() and clamp() functions, fluid typography and responsive layouts require zero runtime script overhead.

### Modern Color Spaces & CSS Variables
With OKLCH and modern CSS custom properties, dynamic theming and accessible contrast ratios are easier than ever to implement natively in stylesheets.`,
    category: "CSS",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    author: "Kush Bhardwaj",
    featured: true,
    slug: "modern-css-techniques",
    keywords: [
      "Modern CSS",
      "CSS Container Queries",
      "CSS Grid Subgrid",
      "Responsive Web Design",
    ],
  },
  {
    id: 3,
    title: "Node.js Performance Optimization: Tips and Tricks",
    excerpt:
      "Discover proven techniques to optimize your Node.js applications for better performance, scalability, and resource efficiency.",
    content: `Node.js provides incredible asynchronous I/O capabilities, but unoptimized event loops and unmanaged memory can degrade throughput quickly under heavy traffic.

### Unblocking the Event Loop
Heavy computational tasks, JSON parsing of massive payloads, and synchronous filesystem calls block the single-threaded event loop. Offload CPU-bound calculations to worker threads or background worker queues like BullMQ backed by Redis.

### Caching & Connection Pooling
Always configure connection pools for MongoDB and PostgreSQL. Avoid instantiating new client instances per request. Implement Redis caching layers for read-heavy API endpoints with sensible cache invalidation strategies (TTL and cache tags).

### Memory Leak Profiling
Inspect heap snapshots using Chrome DevTools or Clinic.js to catch uncollected closures, dangling event listeners, and global cache arrays before deployment.`,
    category: "Node.js",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    author: "Kush Bhardwaj",
    featured: false,
    slug: "nodejs-performance-optimization",
    keywords: [
      "Node.js performance",
      "Event loop optimization",
      "Redis caching",
      "Backend scalability",
    ],
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks.",
    content: `Web development continues to accelerate with advancements in Edge computing, AI tooling, and modern build runtimes.

### Edge Computing and Serverless
Moving compute closer to the user using Edge networks lowers Time to First Byte (TTFB) dramatically. Frameworks that blend static rendering with edge-cached incremental revalidation set the new baseline for performance.

### AI-Driven User Experiences
Modern digital products are integrating contextual AI agents, semantic vector search, and interactive generative UI. Interfaces are shifting from static form inputs to conversational and adaptive layouts.

### Build Tooling Speed
Rust and Go-powered bundlers (Vite, esbuild, Turbopack, Biome) have transformed the developer experience, making sub-second hot module replacement and instantaneous production builds standard across ecosystems.`,
    category: "Web Development",
    readTime: "7 min read",
    publishDate: "2024-01-01",
    author: "Kush Bhardwaj",
    featured: true,
    slug: "future-web-development-trends",
    keywords: [
      "Web development trends 2024",
      "Edge computing",
      "AI in web development",
      "Next generation web tools",
    ],
  },
  {
    id: 5,
    title: "TypeScript Best Practices for Large Teams",
    excerpt:
      "Learn how to effectively use TypeScript in enterprise environments with proper typing strategies, tooling, and team conventions.",
    content: `TypeScript is indispensable for large engineering teams, but inconsistent typing conventions can lead to excessive type assertions and false confidence.

### Strict Mode and Utility Types
Always enable strict mode in tsconfig.json. Leverage native utility types such as Pick, Omit, Record, and Partial instead of duplicating interfaces across client and server boundaries.

### Discriminated Unions Over Enums
Prefer string literals and discriminated unions over TypeScript numeric enums. Discriminated unions provide exhaustive compile-time pattern matching with predictable JavaScript output.

### Runtime Schema Validation
Compile-time types do not protect against malformed external API responses. Couple TypeScript types with runtime validation libraries like Zod to guarantee type safety at boundary layers.`,
    category: "TypeScript",
    readTime: "9 min read",
    publishDate: "2023-12-28",
    author: "Kush Bhardwaj",
    featured: false,
    slug: "typescript-best-practices",
    keywords: [
      "TypeScript best practices",
      "TypeScript enterprise patterns",
      "Zod runtime validation",
      "Type safety",
    ],
  },
  {
    id: 6,
    title: "Microservices with Docker: A Practical Guide",
    excerpt:
      "Step-by-step guide to building and deploying microservices architecture using Docker containers and orchestration tools.",
    content: `Microservices allow distributed teams to build, scale, and deploy services independently, while Docker ensures seamless parity across local and cloud environments.

### Multi-Stage Docker Builds
Minimize production image sizes by using multi-stage Dockerfiles. Separate the build phase (compilers, devDependencies) from the lean runtime container (distroless or Alpine Linux base images).

### Service Discovery & Health Checks
Implement robust /healthz and /readyz endpoints. Ensure containerized services fail fast and allow orchestration layers (Kubernetes or Docker Compose) to restart unhealthy replicas automatically.

### Centralized Logging and Observability
Aggregate logs in structured JSON format with distributed correlation IDs. This makes tracing a single user transaction across multiple microservice hops trivial during incident triage.`,
    category: "DevOps",
    readTime: "12 min read",
    publishDate: "2023-12-20",
    author: "Kush Bhardwaj",
    featured: false,
    slug: "microservices-docker-guide",
    keywords: [
      "Docker microservices",
      "Containerization best practices",
      "DevOps CI/CD",
      "Scalable infrastructure",
    ],
  },
];

export const findPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

