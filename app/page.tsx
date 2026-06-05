export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Map Skill Dependencies for{" "}
          <span className="text-[#58a6ff]">Learning Paths</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Build interactive prerequisite graphs for programming languages, frameworks, and technical concepts. Perfect for bootcamps, course creators, and self-taught developers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Get Started — $8/mo
        </a>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#58a6ff] bg-opacity-20 flex items-center justify-center text-[#58a6ff] text-xl font-bold">1</div>
              <span>Add Skills</span>
            </div>
            <div className="flex items-center text-[#30363d] text-2xl pb-6">→</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#58a6ff] bg-opacity-20 flex items-center justify-center text-[#58a6ff] text-xl font-bold">2</div>
              <span>Link Dependencies</span>
            </div>
            <div className="flex items-center text-[#30363d] text-2xl pb-6">→</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#58a6ff] bg-opacity-20 flex items-center justify-center text-[#58a6ff] text-xl font-bold">3</div>
              <span>Share Graph</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited dependency graphs",
              "Interactive drag-and-drop editor",
              "Export as PNG or JSON",
              "Shareable public links",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Mapping Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a skill dependency graph?",
              a: "A visual map showing which skills or concepts must be learned before others. For example, you need to know HTML before learning CSS, and CSS before learning Tailwind."
            },
            {
              q: "Who is this tool for?",
              a: "Coding bootcamps designing curricula, online course creators structuring content, and self-taught developers planning their learning journey."
            },
            {
              q: "Can I share my graphs publicly?",
              a: "Yes. Every graph gets a unique shareable link so you can embed it in your course platform, share with students, or publish on your website."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Learning Path Dependency Mapper. All rights reserved.
      </footer>
    </main>
  )
}
