export const personalInfo = {
  name: "Alejandro S",
  location: "Valencia, Spain",
  email: "sanchezgidev@gmail.com",
  linkedin: "https://www.linkedin.com/in/alejandrosanchezgimeno/",
};

export const workExperience = [
  {
    company: "Welevel Studios",
    location: "Munich, Germany, Remote",
    position: "Unreal Engine C++ Programmer (Freelance)",
    period: "Jul 2026 - Oct 2026",
    achievements: [
      "On Solid River, a medieval survival and village-building game in Unreal Engine 5, I built the complete villager simulation on the Mass Entity framework, with villager AI driven by StateTree. I designed the task, job and interaction systems on top of actorless Smart Objects with custom entrance and exit slots. I generated ZoneGraph at runtime so villagers could reach dynamically placed tasks, using Zone Shapes to build proper lane junctions and intersections, and implemented a hybrid navigation model where villagers travel along ZoneGraph lanes and hand off to NavMesh pathfinding for the final approach to each task."
    ]
  },
  {
    company: "Z House Studios",
    location: "Dubai, UAE, Remote",
    position: "Unreal Engine C++ Gameplay Programmer (Freelance)",
    period: "Sep 2025 - Jul 2026",
    achievements: [
      "On Ex World Online, an anime-inspired MMORPG built in Unreal Engine 5 with dedicated servers, I designed and implemented server-authoritative core systems: guilds, marriage, karma and crime, a bounty board, NPC patrols and daily activities, gathering minigames, player storage and currency, and seasonal live events such as a procedurally generated maze. I built networked features with replication, RPCs and dedicated Linux servers integrated with backend REST APIs, created game UI with UMG and Slate, and developed NPC AI with custom Behavior Tree tasks, services and decorators."
    ]
  },
  {
    company: "Dreamworld Inc.",
    location: "San Francisco, USA, Remote",
    position: "Unreal Engine C++ Programmer (Freelance)",
    period: "May 2023 - Sep 2025",
    achievements: [
      "As a Programmer on DreamWorld, a large-scale survival online MMO, I was responsible for designing and implementing core gameplay systems, including a robust building system with features like copy & paste, fine-tuned placement mechanics, and structural rules. I developed a dynamic quest system with support for daily and weekly objectives, complete with server reset validation. I also led the development of in-game UI, creating complex interfaces such as the inventory, map, and compass, with seamless C++ and Blueprint integration. Additionally, I implemented full localization support for multiple languages and cultural formats. A key part of my role involved in-depth performance optimization and memory profiling to ensure a smooth and stable experience in a multiplayer environment."
    ]
  },
  {
    company: "Equipson S.L.",
    location: "Valencia, Spain",
    position: "Unreal Engine C++ Programmer (Freelance)",
    period: "Feb 2022 - Present",
    achievements: [
      "In MyStage, a live event visualization software, I played a key role in integrating real-time live event technologies including DMX, ArtNet, and sACN protocols. I developed full support for lighting fixtures, implementing features such as gobo and color wheels, prisms, strobe effects, framing, and rotation controls. I also built a user-friendly UI that allowed real-time control over all scene actors, enabling users to spawn, delete, transform, and configure entity attributes intuitively. My work included NDI integration for live video feeds, a save/load system for project states, and support for screenshots, recording, and streaming to streamline production workflows. This project required a high level of precision, performance, and usability, which I achieved through optimized C++ development and careful system design.",      
    ],
  },
];

export const education = [
  {
    institution: "Escuela Superior de Arte y Tecnologia ESAT",
    location: "Valencia, Spain",
    degree: "HND in Computing",
    period: "Sep 18 - Jun 2021",   
  },
];
export const skills = {
  programmingLanguages: [   
    "C",
    "C++",
    "C#",
    "Unreal Engine (UE4 / UE5)",
    "Blueprints",
    "UMG / Slate",
    "Mass Entity, StateTree, Smart Objects, ZoneGraph",
    "Behavior Trees & AI",
    "OpenGL",
    "Lua",
  ],
  frontendDevelopment: [
    "Rendering Pipelines: Deferred Rendering, PBR, Shadows",
    "Entity Component System (ECS), Multithreading, Memory management",
    "Profiling & debugging: Unreal Insights, GPU/CPU optimization",
  ],
  backendDevelopment: [   
    "Unreal Engine Networking",
    "Replication & RPCs",
    "Dedicated servers (Linux)",
    "Server-authoritative gameplay",
    "Backend / REST API integration",
    "client - Server architecture",
    "Network Optimization", 
    "Latency Reduction"
  ],
  databaseAndStorage: [
    "Git",
    "Perforce",
    "Visual Studio",
    "CMake",
    "Jira",
    "Agile / Scrum"
  ],
  toolsAndServices: [
    "Strong problem-solving and debugging skills",
    "Excellent team collaboration and cross-discipline communication",
    "Adaptable and quick learner in fast-paced environments",
  ],
};

export const projects = [
  {
    title: "Solid River",
    github: "https://store.steampowered.com/app/1551260/Solid_River/",
    thumbnail: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551260/header.jpg",
    description: [
      "Architected and built the full villager simulation on Unreal Engine 5 Mass Entity (data-oriented ECS), with villager AI driven by StateTree",
      "Designed the villager task, job and interaction systems on top of actorless Smart Objects with custom entrance and exit slots",
      "Generated ZoneGraph at runtime so villagers can reach dynamically placed tasks, using Zone Shapes to build proper lane junctions and intersections",
      "Implemented hybrid ZoneGraph / NavMesh navigation: lane-based crowd movement over distance, handing off to NavMesh pathfinding for the final approach to each task",
    ],
  },
  {
    title: "Ex World Online",
    github: "https://www.zhousestudios.com/",
    linkLabel: "Visit website 🔗",
    VideoID: "tES5z7UljTM",
    description: [
      "Designed and implemented server-authoritative core systems for an Unreal Engine 5 MMORPG: guilds, marriage, karma and crime, and a bounty board",
      "Built NPC patrols and daily activities with custom Behavior Tree tasks, services and decorators",
      "Developed gathering minigames, player storage and currency, and seasonal live events such as a procedurally generated maze",
      "Implemented networked features with replication, RPCs and dedicated Linux servers, integrated with backend REST APIs",
      "Created game UI with UMG and Slate, including the bounty browser, guild war timeline and storage interfaces",
    ],
  },
  {
    title: "Dreamworld",
    github: "https://store.steampowered.com/app/3103280/DreamWorld_The_Infinite_Sandbox_MMO/",
    VideoID: "fa-tgUd4YKo",
    description: [
      "Built an advanced modular building system, allowing players to place, copy, and adjust structures with precision",
      "Developed a fully automated quest system with configurable daily and weekly missions, synced with server resets",
      "Designed intuitive and scalable user interfaces for complex systems like inventory management, world map, and player navigation",
      "Streamlined C++/Blueprint integration to support rapid iteration and flexible content updates",
      "Implemented a complete localization pipeline, adapting the game for international audiences and cultural formats",
      "Conducted in-depth performance profiling and optimization to ensure stable multiplayer gameplay at scale",
    ],
  },
  {
    title: "Aces In The Dust",
    github: "https://store.steampowered.com/app/1658080/Aces_in_the_Dust/",
    thumbnail: "/Aces_Thumbnail.jpg",
    VideoID: "w0xEMUX5l7c",
    description: [
      "Programmed core gameplay mechanics, including player shooting systems, rail-based movement, and interaction handling",
      "Designed and implemented intuitive UI/UX elements to support smooth, accessible gameplay flow",
      "Created responsive and engaging AI enemy behavior, including combat patterns and encounter scripting",
      "Performed extensive performance optimization to ensure stable framerates on PlayStation 4, including CPU/GPU profiling and memory tuning",
      "Integrated Steam platform features, including achievement systems, game services, and release preparation",
      "Contributed to the game winning Best Game at the World Game Development Championship 2021 (Hobby Category)",
    ],
  },

  {
    title: "myStage",
    VideoID: "-6WUsSz4G1c",
    description: [
      "Integrated industry-standard protocols like DMX, ArtNet, and sACN to control real-time lighting and stage elements",
      "Engineered support for complex light fixture behaviors, including gobo wheels, color transitions, prism effects, strobe, and framing systems",
      "Built a responsive UI toolkit for live editing, enabling users to spawn, transform, and configure scene entities in real time",
      "Added NDI integration for seamless video streaming and live production workflows",
      "Implemented save/load functionality for projects, enhancing user productivity and session management",
      "Enabled screenshot capture, video recording, and live streaming features directly from the application",
    ],
  },

  {
    title: "Open GL Graphic Engine",
    VideoID: "bi1t20KlIWM",
    description: [
      "Built a custom graphics engine from the ground up using C++ and OpenGL, with a focus on performance and scalability",
      "Implemented a deferred rendering pipeline supporting physically based rendering (PBR), dynamic lighting, and real-time shadows",
      "Integrated multithreading and an Entity Component System (ECS) for efficient and scalable game object management",
      "Added Lua scripting support, enabling dynamic and flexible gameplay logic without recompiling",
      "Developed a suite of post-processing effects, including bloom, grayscale, blur, and more",
      "Created a custom OBJ model loader for importing 3D assets into the engine",
      "Designed a real-time level editing graph, allowing users to translate, rotate, scale, and nest entities via parent-child hierarchies",
      "Focused on GPU and memory optimization to maintain high performance in real-time applications",
    ],
  },

  {
    title: "Inventory & Loot System (Destiny inspiration)",
    VideoID: "VGq1TRFZ9Mo",
    description: [
      "Designed and implemented a Destiny-inspired inventory system supporting both direct item assignment and pickup-based acquisition",
      "Developed stackable and non-stackable item handling, with logic to merge or assign items to new slots dynamically",
      "Created a smart slot management system that searches for available item stacks or opens new slots when needed, and auto-rearranges the inventory when items are removed",
      "Integrated a fully functional UI, including inventory grids and interactive tooltips displaying item descriptions, rarity tiers, and stats on hover",
      "Built a loot drop system driven by weighted randomness, allowing fine-tuned control over rarity probabilities and drop behavior",
      "Focused on smooth UX flow and performance efficiency, ensuring scalability for larger inventories and item pools.",
    ],
  },

  {
    title: "Weapon System",
    VideoID: "hoP2Rdx3Qqg",
    description: [
      "Developed a fully-featured weapon system with a complete set of character animations, including idle, walk, run, shooting, aim down sights (ADS), and reload",
      "Implemented context-sensitive bullet spread and accuracy mechanics, dynamically adjusting based on player movement (e.g., walking vs. running, hip-fire vs. ADS)",
      "Built a scalable recoil system using curve floats, allowing fine-tuned recoil behavior for different weapon types",
      "Designed and integrated multiple weapon types with different firing modes, including full automatic and burst fire for rifles",
      "Created a functional ammo and magazine system, managing current ammo, reload logic, and ammo pooling",
      "Synchronized sound effects with animation cues for shooting, reloading, and movement to enhance immersion",
      "Added bullet impact effects, including decals (bullet holes) at hit locations for visual feedback and realism",
    ],
  },

  {
    title: "Grappling Hook System",
    VideoID: "jdbjIeEmc5g",
    description: [
      "Developed a fully dynamic grappling hook system in 24 hours, allowing free-form grappling with no restrictions to predefined points on the map",
      "Utilized a cable component to represent the grappling hook, ensuring realistic physics and visual feedback",
      "Implemented adjustable travel time and arc, allowing fine-tuned control over the grappling motion based on player movement.",
      "Synced animations to align with the grappling hook mechanics, enhancing realism and player immersion",
    ],
  },
];

export const awards = [
  {
    name: "GDWC Hobby Category Fan Choice 2022",
    issuer: "Game Development World Championship",
    date: "2022",
    type: "International",
    position: " #1 First Place",
  }
];
