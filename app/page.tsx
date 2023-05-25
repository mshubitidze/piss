import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6 items-center justify-center">
      <h1 className="text-4xl">Piss</h1>
      <Image
        className="w-5/6 rounded-md"
        src="https://uploadthing.com/f/05544578-e88c-4c51-9d10-4c9cf9e3e754_piss.jpg"
        alt="piss"
        width={528}
        height={960}
        priority
      />
    </main>
  );
}
