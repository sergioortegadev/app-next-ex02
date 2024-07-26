import IdForm from "@/components/IdForm";
import Image from "next/image";

export const metadata = {
  title: {
    absolute: "Products",
  },
};

export default function Products() {
  return (
    <>
      <h1 className="mx-auto w-fit text-3xl mt-8">Products</h1>
      <IdForm label={"Search by Id"} />
      <p className="relative p-6 w-96 mx-auto mt-4 bg-gray-400 rounded-xl border-4 border-transparent hover:border-gray-500">
        <code>
          Metadatos (title) generado dinámicamente, a través del paso de parámetros, y especificados como{" "}
          <em>absolute</em>
        </code>
      </p>
    </>
  );
}
