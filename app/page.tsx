export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          GitHub &amp; GitLab Integration
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Developer Burnout<br />
          <span className="text-[#58a6ff]">Before It Costs You</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          BurnoutRadar analyzes commit patterns, work-hour drift, and code quality signals to surface burnout risk scores — so engineering managers can intervene early.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $18/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Metrics strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            ["Commit Frequency", "Tracks velocity drops & late-night spikes"],
            ["Code Quality Drift", "Monitors complexity & review turnaround"],
            ["Work-Hour Patterns", "Flags weekend commits & off-hour pushes"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Per team, unlimited developers</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "GitHub & GitLab OAuth integration",
              "Real-time burnout risk dashboard",
              "Automated manager alerts & reports",
              "Intervention recommendation engine",
              "Historical trend analysis (90 days)",
              "Slack & email notifications"
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does BurnoutRadar access our repositories?",
              "We use read-only OAuth tokens for GitHub and GitLab. We never store your source code — only commit metadata like timestamps, message lengths, and diff sizes."
            ],
            [
              "Can developers see their own scores?",
              "Scores are visible only to managers and HR by default. You can optionally enable a self-view mode so developers can monitor their own wellness trends."
            ],
            [
              "What makes a burnout risk score go up?",
              "Key signals include a sudden drop in commit frequency, a spike in late-night or weekend commits, increasing code complexity, longer PR review times, and shorter, lower-quality commit messages."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} BurnoutRadar. Built for engineering wellness.
      </footer>
    </main>
  );
}
