import type { Metadata } from "next";

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
        Cabecera del Blog
      </header>
      <main>{children}</main>
      <footer className="w-screen text-3xl font-bold text-center mt-12 p-4 bg-slate-300 text-slate-200 dark:bg-slate-700 dark:text-slate-800">
        Footer del Blog
      </footer>
    </>
  );
}
