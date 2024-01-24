type Talk = {
  title: string;
  speaker: string;
  description?: string;
  link: string;
};

export const talks: Record<string, Talk[]> = {
  "2023": [
    {
      title: "Rethinking reactivity",
      speaker: "Simona Cotin",
      link: "https://youtu.be/3S2k_vt28mE?si=bEP6SmeGodeqkDZQ",
    },
    {
      title: "Moving on from runtime CSS-in-JS at scale",
      speaker: " Siddharth Kshetrapal",
      link: "https://youtu.be/OrIuKl_x0vE?si=F9llL-t5XwMrLoEu",
    },
    {
      title: "JavaScript Modules: Past, Present, and Future ",
      speaker: "Nicolò Ribaudo",
      link: "https://youtu.be/gvuOUVA7NYk?si=cEJt8LZPriyAX2IW",
    },
    {
      title: "The Good, The Bad, and The Web Components",
      speaker: "Zach Leatherman",
      link: "https://youtu.be/R4Ri4ft7bXY?si=zMAnRSKiiJytROnH",
    },
    {
      title: "Container Queries: The next step towards a truly modular CSS",
      speaker: "Maarten Van Hoof",
      link: "https://youtu.be/1mSsrSn0arw?si=pCE5Fvnuh4w5qEee",
    },
    {
      title: "We're All Doing the Best We Can",
      speaker: "Jeffrey Lembeck",
      link: "https://youtu.be/MtgrsmaKzDg?si=IdPxU_5HGcPt3q7o",
    },
    {
      title: "WaterBed code",
      speaker: "Andrei Pfeiffer",
      link: "https://youtu.be/QXUHpJ8HsGY?si=5B5uAIQT7bySweaM",
    },
    {
      title: "Proven ways to make your website accessible in 2023",
      speaker: "Alena Nikolaeva",
      link: "https://youtu.be/t20BngTEry4?si=jD6Ae6vW8CTMRY9O",
    },
    {
      title: "ADHD in the Digital World",
      speaker: "Emmy Cao",
      link: "https://youtu.be/kB1EUVsciE8?si=gg4RUudotbFtqtpX",
    },
    {
      title: "Building AI-powered user interfaces",
      speaker: "Jani Eväkallio",
      link: "https://youtu.be/GQjubOMOWzo?si=4K3MQ_rFgRGTL2Ka",
    },
    {
      title: "Playing your tests wright ",
      speaker: "Debbie O'Brien",
      link: "https://youtu.be/yMSIsavrOR4?si=LtfNTuW7Dt9E5Sl_",
    },
    {
      title: "Visualised guide to memory management in JavaScript",
      speaker: "Kateryna Porshnieva",
      link: "https://youtu.be/OG_AZnPokGw?si=unFLE-YV3O1Ic18y",
    },
    {
      title: "The two ways to manage state",
      speaker: " David Khourshid",
      link: "https://youtu.be/yVhmYiRNPvw?si=nCYQmcZAY-vLViKi",
    },
    {
      title: "Leveraging (algebraic data) types to make your UI rock solid",
      speaker: "Matthias Le Brun",
      link: "https://youtu.be/HrLPvAOjJxM?si=n8HjMtMjgtcDdAq-",
    },
    {
      title: "Building Offline and Real-Time Applications - The Magic of CRDTs",
      speaker: "Matan Kushner",
      link: "https://youtu.be/BVUBFlMFIYM?si=hrHr-yc1DoNh0z1M",
    },

    {
      title: "Char Wars: The Path Traversal Strikes Back ",
      speaker: "Liran Tal",
      link: "https://youtu.be/P1goT5BSFWM?si=UQ6ZLZ96phYUcYeV",
    },
    {
      title: "Built-in Tests with Node.js",
      speaker: "Tierney Cyren",
      link: "https://youtu.be/exoubCoKA_w?si=rcFxP-kfxMP3F6Mp",
    },
    {
      title: "Reaching for the sky with JavaScript",
      speaker: "Charlie Gerard",
      link: "https://youtu.be/YyrdJvIAe20?si=94QlpMxV3oSDwhoF",
    },
    {
      title: "Towards a simpler JavaScript ecosystem",
      speaker: " Gil Tayar",
      link: "https://youtu.be/WE0dWHHAAfg?si=7TDJ8vvGAKvy5ofy",
    },
  ],

  "2022": [
    {
      title: "The evolution of scalable CSS",
      speaker: "Andrei Pfeiffer",
      link: "https://youtu.be/eekrjAdviO4?si=gJtM-hhleL8jjucW",
    },
    {
      title: "Humanizing Your Documentation",
      speaker: "Carolyn Stransky",
      link: "https://youtu.be/yE7eOoXTZtM?si=sjmmaACkC3HJn4Bq",
    },
    {
      title: "Large scale refactoring: from start to finish",
      speaker: "Natalia Tepluhina",
      link: "https://youtu.be/tkPHtSUJwMI?si=eE7Sf3IKf8aaNo_N",
    },
    {
      title: "The monorepo: self-organising codebases and automatic scaling",
      speaker: "Rares Matei",
      link: "https://youtu.be/lmWzMOeckeg?si=FucNA7YMvYcszGJw",
    },
    {
      title: "The Art of Functional Programming",
      speaker: "Anjana Vakil",
      link: "https://youtu.be/pNIWiTdsPV4?si=vSqtJO5arH4B5-L7",
    },
    {
      title: "Code crimes for good component APIs",
      speaker: "Siddharth Kshetrapal",
      link: "https://youtu.be/bPv-eq-tzIk?si=UZGzuTdrCSVbuXmY",
    },
    {
      title: "Simple data fetching with React Query",
      speaker: " Daniel Mocan",
      link: "https://youtu.be/xWcdsWx8Xzs?si=Qe_8uz9DugDiomao",
    },
    {
      title: "I can read your mind using JavaScript",
      speaker: "Anca Spatariu",
      link: "https://youtu.be/iVZcJs4-rjc?si=Ma2YIFvxHZIU8kRo",
    },
    {
      title: "The web beyond node_modules",
      speaker: "Bogdan Zaharia",
      link: "https://youtu.be/_r0CGnYKPC8?si=0Fi-ZUKckswNKA0H",
    },
    {
      title: "Learnings from building a company from an open source project",
      speaker: "Ives van Hoorne",
      link: "https://youtu.be/QaGTsrMzKQs?si=YI1wOZIs9Dxcspzs",
    },
    {
      title: "Back to boring",
      speaker: "Stefan Judis",
      link: "https://youtu.be/JwwqLxh8VQ8?si=wAoSLSEfT6U_87XJ",
    },
  ],

  "2019": [
    {
      title: "The Future of Web Animation",
      speaker: "Sarah Drasner",
      link: "https://youtu.be/hjgni3dXcVE?si=KwshMDFuz6D-4q-F",
    },
    {
      title: "Machine learning for front-end developers",
      speaker: "Charlie Gerard",
      link: "https://youtu.be/cp0KdK3He48?si=ZNRrCaurU6oM4DiQ",
    },
    {
      title: "Serverless can do that?!",
      speaker: "Simona Cotin",
      link: "https://youtu.be/fNKT6GMUxBY?si=yudBjUyesT_1tEc2",
    },
    {
      title: "How to build a house in 3D: a short introduction to BabylonJS",
      speaker: "Anna Backs & Christina Zenzes",
      link: "https://youtu.be/3DDrC_IE4Z0?si=mubcwVf51FfSD6FS",
    },
    {
      title: "WebAssembly's Post-MVP Future",
      speaker: "Lin Clark & Till Schneidereit",
      link: "https://youtu.be/ZZ3uj-2H6-w?si=eaSbZWhcwjWV9jTa",
    },
    {
      title: "You Belong Here: How to Make Open Source More Open",
      speaker: "Jason Lengstorf",
      link: "https://youtu.be/8ARA7AD4yPs?si=gEDwSvQwlJ181-LK",
    },
    {
      title: "Maintainers Anonymous",
      speaker: "Henry Zhu",
      link: "https://youtu.be/-BPUPNz5H70?si=gKdRyvp7gqaYNkKS",
    },
    {
      title:
        "Blowing Bubbles on Mental Health - Hacking a Kid's Toy in JavaScript",
      speaker: "Daisy Smith",
      link: "https://youtu.be/1vkziw8UpQQ?si=w-SDECdhEclH2uKS",
    },
    {
      title: "You Don't Know Your Dependencies",
      speaker: "Alejandro Oviedo",
      link: "https://youtu.be/WsUIVlc3MCs?si=YzXXKUrgoSOe_Fv9",
    },
    {
      title: "It’s My (Third) Party, and I’ll Cry if I Want To",
      speaker: "Harry Roberts",
      link: "https://youtu.be/cOXl_q8JgjI?si=Q6uD5CBxDB5-Mx81",
    },
    {
      title: "Oh, the Management Mistakes You Will Make!",
      speaker: "Jeffrey Lembeck",
      link: "https://youtu.be/lEQfKWdUHXY?si=Y4mAG_aiVvxs8IrD",
    },
    {
      title: "Sleeping well at night with cypress.io",
      speaker: "Tomasz Łakomy",
      link: "https://youtu.be/S4hcRcJLIGo?si=ZYAfb8H5UuHWANAa",
    },
    {
      title: "Taming UI complexity with Typed State Machines",
      speaker: "Bogdan Zaharia",
      link: "https://youtu.be/gcuZJ2LHTFI?si=YkVsENG8OPAoRGcU",
    },
    {
      title: "CLI x GUI ",
      speaker: "Guillaume Chau",
      link: "https://youtu.be/dPIs4qgQEq0?si=xb2lI89ylPjcxxXI",
    },
    {
      title:
        "The universe in a single arrow: A live dive into the lambda calculus",
      speaker: "Anjana Vakil",
      link: "https://youtu.be/qTHGmVrOGZo?si=IbFsqvNi8s83-f8x",
    },
    {
      title: "Electron: The Event Loop Tightrope",
      speaker: "Shelley Vohr",
      link: "https://youtu.be/OPhb5GoV8Xk?si=qcEv5-a_Xba92Z4U",
    },
    {
      title: "The Magic of RxJS",
      speaker: "Natalia Tepluhina",
      link: "https://youtu.be/vS1-jzngpmw?si=10lhrB0xLkgWQ2_n",
    },
    {
      title: "Web typography: a non-English perspective",
      speaker: "Hui Jing Chen",
      link: "https://youtu.be/yLQHDGRLOwQ?si=TIuVondcvJTaD8-z",
    },
    {
      title: "Approaching the JavaScript Singularity",
      speaker: "Istvan Flaki",
      link: "https://youtu.be/6wPeM8mY-98?si=67-e_huHM-KGlA2g",
    },
  ],

  "2018": [
    {
      title: "Welcome JSHeroes",
      speaker: "Alex Moldovan",
      link: "https://youtu.be/auk6adQLfgk?si=-Zt67hkIRurZHq6N",
    },
    {
      title: "Sketching in the Browser",
      speaker: "Mark Dalgleish",
      link: "https://youtu.be/ohw6AgPbJoE?si=k5LgU4zMTRPTfbGH",
    },
    {
      title: "Web Security: XSS, CSRF, CSP, JWT, WTF? IDK ¯_(ツ)_/¯",
      speaker: "Dominik Kundel",
      link: "https://youtu.be/sHKyMwIK9F0?si=SnScSS7rwYXTkE48",
    },
    {
      title: "Fontastic web performance",
      speaker: "Monica Dinculescu",
      link: "https://youtu.be/WsFirqL4lBI?si=JcE8603sRjD9-6Xk",
    },
    {
      title: "A Guide to Instant Loading Angular Apps",
      speaker: "Mashhood Rastgar",
      link: "https://youtu.be/OigaRuQrkFs?si=ISoMyihcHlq_2Pma",
    },
    {
      title: "What the v...DOM?",
      speaker: "Stefan Judis",
      link: "https://youtu.be/0cbCxfJMfx0?si=fHbwWQyCW5KXpJiS",
    },
    {
      title: "The exciting future of React",
      speaker: "Kristijan Ristovski",
      link: "https://youtu.be/QjGuhXwpbUc?si=n_5ORZr_VgMTKxOz",
    },
    {
      title: "Teleport your application",
      speaker: "Paul Brie",
      link: "https://youtu.be/LDIXccAjuTw?si=TFjPODnc39uRCb1m",
    },
    {
      title: "Reasons to give React Native a( nother )try",
      speaker: "Brent Vatne",
      link: "https://youtu.be/J_TXDkq8Y-4?si=OVk8r9XyQvUIzA7Z",
    },
    {
      title: "Advanced Redux: Design Patterns and Practices",
      speaker: "Nir Kaufman",
      link: "https://youtu.be/5gl3cCB_26M?si=JRtjBtrnJx6DVJ5j",
    },
    {
      title: "Meta Vue Framework",
      speaker: "Sebastien Chopin",
      link: "https://youtu.be/9jATabR27ME?si=4B7RR5aZu9PqQgD-",
    },
    {
      title: "Vue.js and Serverless",
      speaker: "Sarah Drasner",
      link: "https://youtu.be/0995H5BMHJE?si=qQDj2XLZSTclNeG_",
    },
    {
      title: "A red LEGO brick is always red: components on the web",
      speaker: "Jack Franklin",
      link: "https://youtu.be/SF64OwN58Fw?si=bJkah-kaFKm-B3L-",
    },
    {
      title: "The Dream of Styleguide Driven Development",
      speaker: "Sara Vieira",
      link: "https://youtu.be/_XJFeSZV6FI?si=wW6lTL-bMICWVcJC",
    },
    {
      title: "Recursion, Iteration, and JavaScript: A Love Story",
      speaker: "Anjana Vakil",
      link: "https://youtu.be/FmiQr4nfoPQ?si=QRnmfGpwLUfzk48D",
    },
    {
      title: "V8 internals for JS developers",
      speaker: "Mathias Bynens",
      link: "https://youtu.be/5UZzT_hgsl0?si=C8ooy2EfIXgnUieP",
    },
    {
      title: "How to make your LEDs better listeners",
      speaker: "Stephanie Nemeth",
      link: "https://youtu.be/VTxsAiznxt4?si=e0UVAE7MZovuIueQ",
    },
    {
      title: "Making The Terminal Great Again",
      speaker: "Liran Tal",
      link: "https://youtu.be/uOsVBHgHZY0?si=4a8BBgp1EpEP4YOy",
    },
    {
      title: "Full-Config-Jacket",
      speaker: " Even Stensberg",
      link: "https://youtu.be/iKgJVh7bWlc?si=8ah-wO8vSmVbT4H9",
    },
    {
      title: "CodeSandbox",
      speaker: "Ives van Hoorne",
      link: "https://youtu.be/DQtj811KIT4?si=n14dZgT9OYwck7Gb",
    },
    {
      title: "Serving for the win: Deployments and hosting for the rest of us",
      speaker: "Phil Hawksworth",
      link: "https://youtu.be/ttL4K-WLJ-c?si=RBPfDJ9ApHvmgTuq",
    },
    {
      title: "Virtual reality for every developer",
      speaker: "Shagufta Gurmukhdas",
      link: "https://youtu.be/GCXFcfyLmyA?si=zdfuictxwWmEp5xd",
    },
    {
      title: "The journey of a package from the npm registry to your computer",
      speaker: "Jeffrey Lembeck ",
      link: "https://youtu.be/GSnyVS79OR0?si=XjPeChNOgZJhOkG_",
    },
  ],
  "2017": [
    {
      title: "Welcome, JS heroes!",
      speaker: "Paul Brie",
      link: "https://youtu.be/RNewQDlPQ0w?si=gjh222ko2hW0_Kjj",
    },
    {
      title: " Unleash the power of Angular Reactive Forms",
      speaker: "Nir Kaufman",
      link: "https://youtu.be/9NXVQsQ8wns?si=3vJmEdsGsxjtoSbv",
    },
    {
      title: "A Story About Types and JavaScript",
      speaker: "Tudor Gergely",
      link: "https://youtu.be/YnukrLi8zew?si=QFOqTlA6mIg5bQbB",
    },
    {
      title: "How to get started and build something with GraphQL",
      speaker: "Xavier Cazalot",
      link: "https://youtu.be/McPeX5gsSX8?si=F8rwI3lkvy0IoAWJ",
    },
    {
      title: "Warping Time with Async/Await",
      speaker: "Cassi Lup",
      link: "https://youtu.be/1J-2huqyrBk?si=L89lRfvaEneyPUCO",
    },
    {
      title: "Fighting the Front-end Fatigue",
      speaker: "Benedek Gagyi",
      link: "https://youtu.be/UTQkkZ1SO1Y?si=_ZAm70gqeTVJFxoG",
    },
    {
      title: "UI Development Made Simple",
      speaker: "Ovidiu Cherecheș",
      link: "https://youtu.be/C3tx999wbgM?si=kx2kiKI0CLSgGXxB",
    },
    {
      title: "Is JavaScript Making Us Better Professionals?",
      speaker: "Alex Moldovan",
      link: "https://youtu.be/O7pnOru0S3E?si=TJeVGHadHY_h76Gw",
    },
    {
      title: "As Simple as an AST",
      speaker: "Pavithra Kodmad",
      link: "https://youtu.be/LRKlqR6KY_E?si=0bDiPqm8pVeesbi3",
    },
    {
      title: "Static and Dynamic Next.js",
      speaker: "Guillermo Rauch",
      link: "https://youtu.be/lLNJsuXB4CI?si=n06D-Z959ygd-Iaf",
    },
    {
      title: "Welcome",
      speaker: "Paul Brie",
      link: "https://youtu.be/dTkJ3i1QEy8?si=dmKOziyBIfoGcM-7",
    },
    {
      title: "Building Universal Apps",
      speaker: "Robert Onodi",
      link: "https://youtu.be/i0wkGqm0Dy8?si=pWIEdqboZgxRJOQL",
    },
    {
      title: "Collaborative Learning",
      speaker: "Roxana Rugină",
      link: "https://youtu.be/-FPmnCbb7ds?si=vWBfC9D_AY_1CPAL",
    },
    {
      title: "Node.js Security: Breaking The Loop",
      speaker: "Liran Tal",
      link: "https://youtu.be/DX8FSC_7wRI?si=6cJL3oEfntnzXMiR",
    },
    {
      title: "From Localhost to Production",
      speaker: "Gautam Arora",
      link: "https://youtu.be/-UCtcKCYlwM?si=G7Pe-_S8SnzSVoi9",
    },
    {
      title: "React Native: From pure Web app to a Web & Mobile hybrid",
      speaker: "Vladimir Porton",
      link: "https://youtu.be/nbzniZ_4Y1Y?si=mIC6iJHz2Cs9RBHa",
    },
    {
      title: "Introducing Chunky: The Full Stack React Framework",
      speaker: "Dan Călinescu",
      link: "https://youtu.be/-T1be7m3rAQ?si=k28WhM8fsIKI_y99",
    },
    {
      title: "Frontend development in the (current) future",
      speaker: "Filip Bech-Larsen",
      link: "https://youtu.be/eLnrIZd9cd8?si=AC_sPHMFIQzfya9p",
    },
    {
      title: "Automatic Progressive Web Apps using the Angular Mobile Toolkit",
      speaker: "Maxim Salnikov",
      link: "https://youtu.be/3ZZCCBjuAXU?si=WVHQHdCKSkVfv9Nu",
    },
    {
      title: "A Unified Styling Language",
      speaker: "Mark Dalgleish",
      link: "https://youtu.be/z-4cujO519Q?si=xxnIKEPs-f8hZfcZ",
    },
  ],
};
