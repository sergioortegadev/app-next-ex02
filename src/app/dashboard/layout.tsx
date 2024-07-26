import Link from "next/link";

export default function DashboardLayout({
  children,
  analytics,
  delivery,
  sales,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  delivery: React.ReactNode;
  sales: React.ReactNode;
}) {
  return (
    <>
      <article>{children}</article>
      <div className="flex flex-wrap justify-around">
        <section className="m-2">{analytics}</section>
        <section className="m-2">{delivery}</section>
        <section className="m-2">{sales}</section>
      </div>

      <div className="grid grid-cols-2 p-2 mt-2 bg-slate-600">
        <h3 className="col-span-2 text-2xl text-center font-bold">Parallel Routes Example</h3>
        <div className="grid justify-self-end">
          <a
            className="button-blue"
            href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded-md hover:bg-blue-600">Doc</button>
          </a>
        </div>
        <div className="grid justify-self-start">
          <Link href={"/"} className="button-blue">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
