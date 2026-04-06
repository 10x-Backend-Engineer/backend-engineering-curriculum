import Link from "next/link";

export default function HomePage() {
  const stats = [
    ["8", "Core modules"],
    ["4", "Stack tracks"],
    ["6mo", "Featured plan"],
    ["∞", "Always updated"],
  ];

  const stacks = [
    {
      title: "Py",
      name: "Python + FastAPI",
      desc: "Modern async Python. Great for ML-adjacent backends & rapid APIs.",
      color: "text-yellow-400",
    },
    {
      title: "JS",
      name: "Node.js + TypeScript",
      desc: "Full-stack friendly. Huge ecosystem, real-time capable.",
      color: "text-green-400",
    },
    {
      title: "Jv",
      name: "Java + Spring Boot",
      desc: "Enterprise-grade. High performance, strong typing, career demand.",
      color: "text-red-400",
    },
    {
      title: "C#",
      name: "C# + .NET",
      desc: "Microsoft ecosystem. Azure-native, excellent tooling.",
      color: "text-purple-400",
    },
  ];

  const roadmap = [
    {
      step: "01",
      title: "Computer Science Fundamentals",
      tags: [
        "algorithms",
        "data structures",
        "big-O",
        "OS basics",
        "networking",
      ],
    },
    {
      step: "02",
      title: "Backend Development",
      tags: ["REST APIs", "auth", "middleware", "testing", "clean code"],
    },
    {
      step: "03",
      title: "Databases",
      tags: ["PostgreSQL", "MongoDB", "Redis", "indexing", "data modeling"],
    },
    {
      step: "04",
      title: "APIs & Architecture",
      tags: ["GraphQL", "JWT / OAuth", "microservices", "clean arch"],
    },
    {
      step: "05",
      title: "System Design",
      tags: [
        "load balancing",
        "caching",
        "message queues",
        "distributed systems",
      ],
    },
    {
      step: "06",
      title: "Cloud & DevOps",
      tags: ["AWS", "Docker", "CI/CD", "IaC"],
    },
    {
      step: "07",
      title: "Projects",
      tags: ["REST API", "e-commerce", "SaaS app", "microservices"],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      {/* HERO */}
      <section className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-xs border border-gray-600 px-3 py-1 rounded-full">
            V2.0 • OPEN CURRICULUM
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Become a <span className="text-green-400">world-class</span>
            <br />
            Backend Engineer
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl">
            A structured, continuously updated roadmap from fundamentals to
            staff engineer. Pick your stack, follow the path, build real
            systems.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="/docs"
              className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              Start learning →
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 border border-gray-700 text-center">
          {stats.map(([value, label], i) => (
            <div key={i} className="border-r border-gray-700 py-6">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-sm tracking-widest text-gray-400 mb-6">
          CHOOSE YOUR STACK
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="border border-gray-700 p-5 rounded-xl hover:border-white transition"
            >
              <h3 className={`text-xl font-bold ${stack.color}`}>
                {stack.title}
              </h3>
              <p className="font-semibold mt-2">{stack.name}</p>
              <p className="text-gray-400 text-sm mt-2">{stack.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-sm tracking-widest text-gray-400 mb-8">
          LEARNING PATH
        </h2>

        <div className="space-y-10 border-l border-gray-700 pl-6">
          {roadmap.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-black border border-gray-500 flex items-center justify-center text-xs">
                {item.step}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs border border-gray-600 px-2 py-1 rounded-md text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Open full roadmap ↗
          </button>

          <p className="text-gray-500 mt-6 text-sm">
            // beginner → backend engineer → staff → founder
          </p>
        </div>
      </section>
    </main>
  );
}
