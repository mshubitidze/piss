import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-60">
      <h1 className="text-6xl text-yellow-500">
        <Link
          className="underline-offset-4 hover:underline"
          href="https://en.wikipedia.org/wiki/Piss"
        >
          Piss
        </Link>
      </h1>
    </main>
  );
}
