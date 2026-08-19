import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 py-20 font-sans">
      <div className="max-w-3xl w-full mx-auto">
        {/* App Branding & Exact Name Match */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-600/20 border-2 border-emerald-500/30 text-emerald-400 font-bold text-4xl mb-4 shadow-lg shadow-emerald-950">
            🌲
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Cedar
          </h1>
          <p className="text-emerald-400 font-semibold text-sm tracking-wide uppercase">
            Autonomous AI Sales Executive Assistant
          </p>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Cedar is an autonomous artificial intelligence executive assistant built for Sarah Johnston (SVP of Global Sales at Visiting Media) to automate sales operations, schedule coordination, and pipeline briefings.
          </p>
        </div>

        {/* Application Purpose & Features (Google Verification Compliance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-base font-bold text-white">Google Calendar Integration</h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cedar accesses Google Calendar data to prepare pre-meeting briefings, identify participant background context, and organize daily sales agenda schedules.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-base font-bold text-white">Gmail Integration</h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cedar connects with Gmail to manage communication workflows, draft customer follow-up correspondence, and triage inbound sales inquiries under direct user authorization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-base font-bold text-white">Sales Pipeline Coaching</h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Synthesizes sales call transcripts, tracks MEDDPICC methodology adherence, and provides actionable coaching insights to the executive sales team.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-base font-bold text-white">Data Privacy & Security</h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              User data is never sold, shared with third parties, or used to train generalized machine learning models. Complies with Google API Services User Data Policy.
            </p>
          </div>
        </div>

        {/* Limited Use Disclosure */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase font-bold text-slate-400 mb-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>{" "}
            Google API Limited Use Disclosure
          </div>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cedar&apos;s use and transfer to any other app of information received from Google APIs adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </div>

        {/* Navigation to Policies */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-slate-400 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors font-medium"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-slate-400 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors font-medium"
          >
            Terms of Service
          </Link>
        </div>

        <div className="text-center text-xs text-slate-600 mt-8">
          © {new Date().getFullYear()} Cedar · Built for Visiting Media Global Sales Operations
        </div>
      </div>
    </main>
  );
}
