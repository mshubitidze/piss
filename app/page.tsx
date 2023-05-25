import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-6 md:m-0 gap-2 flex-col items-center justify-center">
      <h1 className="text-4xl text-yellow-500">Piss</h1>
      <Image
        className="rounded-md w-full md:w-auto"
        src="https://uploadthing.com/f/05544578-e88c-4c51-9d10-4c9cf9e3e754_piss.jpg"
        alt="piss"
        width={528}
        height={960}
        priority
      />
    </main>
  );
}
