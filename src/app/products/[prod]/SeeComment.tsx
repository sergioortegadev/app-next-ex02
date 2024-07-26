"use client";

import { useRouter } from "next/navigation";

const SeeComment = () => {
  const router = useRouter();

  const handleClick = () => {
    const currentLocation = window.location.pathname;
    router.push(`${currentLocation}/comments`);
  };

  return (
    <div className="w-screen ">
      <button onClick={handleClick} className="button-blue mx-auto block">
        See all product comments
      </button>
    </div>
  );
};

export default SeeComment;
