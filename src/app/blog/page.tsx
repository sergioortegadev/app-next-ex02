export default function Blog() {
  return (
    <>
      <h1 className="flex flex-col text-3xl items-center m-8">Blog</h1>
      <ol className="list-decimal mx-auto w-fit">
        <li className="pl-2 m-2">
          <a href="blog/2024-incremento-rendimiento">Incrementar el rendimiento con Next.js</a>
        </li>
        <li className="pl-2 m-2">
          <a href="blog/2024-mejorar-seo-con-next">Mejoramiento del Seo con Next.js</a>
        </li>
      </ol>
      <p className="flex flex-col text-lg font-mono items-center m-8">
        <code>Con metadatos (title) concatenado entre layout del blog y layout global</code>
      </p>
    </>
  );
}
