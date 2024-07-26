import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog by Next site - Ex00002. Created by Sergio Ortega dev",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-screen text-3xl font-bold text-center pb-4 bg-slate-300 text-slate-200 dark:bg-slate-700 dark:text-slate-800">
        <Link href={"/"} className="button-blue">
          Home
        </Link>
        <Link href={"/about"} className="button-blue">
          About
        </Link>
        <Link href={"/contact"} className="button-blue">
          Contact
        </Link>
        <Link href={"/products"} className="button-blue">
          Product
        </Link>
        <Link href={"/login"} className="button-blue">
          Login
        </Link>
        Cabecera del Blog
      </header>
      <main>{children}</main>
      <footer className="w-screen text-3xl font-bold text-center mt-12 p-4 bg-slate-300 text-slate-200 dark:bg-slate-700 dark:text-slate-800">
        Footer del Blog
      </footer>
    </>
  );
}
