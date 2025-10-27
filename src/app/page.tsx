import { Header } from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-7 py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xm text-3xl font-semibold leading-10 tracking-tighttext-zinc-50">
            Place where you can write all of your wishes (even if they are kind of silly )
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Creating wishes are very easy, but first of all {" "}
            <Link
              href="/register"
              className="font-medium text-zinc-50"
            >
              Register
            </Link>{" "}
            or{" "}
            <Link
              href="/login"
              className="font-mediumtext-zinc-50"
            >
              Log in
            </Link>{" "}
            to continue.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#ccc] md:w-[158px]"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            RickRoll
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparentdark:border-white/[.145] hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            RickRoll
          </a>
        </div>
      </main>
    </div>
  );
}
