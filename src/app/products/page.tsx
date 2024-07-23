//import { useRouter } from "next/router";
export const metadata = {
  title: {
    absolute: "Products",
  },
};

export default function Products() {
  // const router = useRouter();

  /* const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      router.push(`/products/${e.target.search.value}`);
    } 
  };*/
  return (
    <>
      <h1 className="mx-auto w-fit text-3xl mt-8">Products</h1>
      <form
        className="relative p-6 w-96 mx-auto mt-4 bg-gray-400 rounded-xl border-4 border-transparent hover:border-gray-500"
        //onSubmit={handleSubmit}
      >
        <label>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Id prod"
            className="outline-none rounded-md p-2 text-gray-600"
          />
        </label>
        <input type="submit" value="🔍" className="absolute right-6" />
        <p className="mt-8">
          <code>
            Metadatos (title) generado dinámicamente, a través del paso de parámetros, y especificados como{" "}
            <em>absolute</em>
          </code>
        </p>
      </form>
    </>
  );
}
