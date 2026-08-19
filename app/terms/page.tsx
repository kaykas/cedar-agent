import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-100 underline underline-offset-4">
        &larr; Cedar
      </Link>
      <h1 className="text-3xl font-semibold mt-6 mb-2">Terms of Service</h1>
      <p className="text-neutral-500 text-sm mb-8">Last updated: August 2026</p>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Scope</h2>
          <p>
            Cedar is a private AI assistant, not a public product. It is provided to a
            defined set of authorized users — Sarah Johnston and her sales team at
            Visiting Media — for internal work purposes. These terms govern that
            limited use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Acceptable use</h2>
          <p>
            Authorized users may use Cedar to assist with sales coaching, pipeline and
            forecast reporting, scheduling, document drafting, and related work tasks.
            Cedar must not be used to access, request, or act on data belonging to
            anyone other than the authorized user granting consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">No warranty</h2>
          <p>
            Cedar is provided as-is, without warranty of any kind. Outputs may contain
            errors and should be reviewed before being relied upon for business
            decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Access revocation</h2>
          <p>
            Access may be revoked at any time by the authorized user (via their{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-neutral-100"
            >
              Google Account permissions page
            </a>
            ) or by the administrator of this Cedar instance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-neutral-100 mb-2">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
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
