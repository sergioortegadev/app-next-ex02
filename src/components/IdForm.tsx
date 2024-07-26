"use client";

import { useRouter } from "next/navigation";

const IdForm = ({ label }: { label: string }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    if (target.search.value) {
      const currentPath = window.location.pathname;
      router.push(`${currentPath}/${target.search.value}`);
    }
  };

  return (
    <form
      className="relative p-6 w-96 mx-auto mt-4 bg-gray-400 rounded-xl border-4 border-transparent hover:border-gray-500"
      onSubmit={handleSubmit}
    >
      <label>
        {label}
        <input
          type="search"
          name="search"
          id=""
          placeholder="write here"
          className="outline-none rounded-md p-2 mt-2 text-gray-600"
        />
      </label>
      <input type="submit" value="🔍" className="absolute right-6" />
    </form>
  );
};

export default IdForm;
