import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <Image src="/logo.png" alt="Cedar" width={120} height={120} className="mb-8 rounded-2xl" priority />
      <h1 className="text-4xl font-semibold tracking-tight mb-3">Cedar</h1>
      <p className="text-neutral-400 text-center max-w-md mb-10">
        Cedar is an AI assistant built for Sarah Johnston, SVP Global Sales at
        Visiting Media. It supports Sarah and her sales team with coaching,
        pipeline and forecast data, and day-to-day project work.
      </p>
      <div className="flex gap-6 text-sm text-neutral-400">
        <Link href="/privacy" className="hover:text-neutral-100 underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-neutral-100 underline underline-offset-4">
          Terms of Service
        </Link>
      </div>
    </main>
  );
}
