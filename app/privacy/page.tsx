import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-100 underline underline-offset-4">
        &larr; Cedar
      </Link>
      <h1 className="text-3xl font-semibold mt-6 mb-2">Privacy Policy</h1>
      <p className="text-neutral-500 text-sm mb-8">Last updated: August 2026</p>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">What Cedar is</h2>
          <p>
            Cedar is an AI assistant built by Jascha Kaykas-Wolff for Sarah Johnston,
            SVP Global Sales at Visiting Media, to support her and her sales team with
            coaching, pipeline and forecast reporting, and day-to-day project work.
            Cedar operates as a dedicated agent instance and does not serve the general
            public.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Data Cedar accesses</h2>
          <p>
            With explicit, individual consent from each authorized user, Cedar may
            access Google Workspace data (Gmail, Calendar, Drive, Docs, Sheets,
            Contacts) belonging to that user, solely to carry out tasks the user
            requests. Access is granted per person via Google&apos;s standard OAuth
            consent flow — no user&apos;s data is accessed without that user personally
            completing the consent screen for their own account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">How data is used</h2>
          <p>
            Data retrieved through Google Workspace APIs is used only to complete the
            specific task requested by the authorized user (e.g. reading a calendar
            event, drafting an email, reading or writing a document). Cedar does not
            sell user data, does not use it for advertising, and does not share it with
            third parties outside of completing the requested task.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Data retention</h2>
          <p>
            OAuth tokens are stored securely on infrastructure controlled by Jascha
            Kaykas-Wolff and used only to maintain an authorized user&apos;s ongoing
            session with Cedar. A user may revoke access at any time via their{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-neutral-100"
            >
              Google Account permissions page
            </a>
            , which immediately and permanently ends Cedar&apos;s access to that
            account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Contact</h2>
          <p>
            Questions about this policy or a request to revoke access can be sent to{" "}
            <a href="mailto:jascha@kaykas.com" className="underline underline-offset-4 hover:text-neutral-100">
              jascha@kaykas.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
