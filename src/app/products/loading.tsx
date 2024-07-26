import Image from "next/image";

export default function Loading() {
  return (
    <div className="mx-auto">
      <Image src="/loading.svg" alt="loading" width={30} height={30} className="mx-auto m-4" />
    </div>
  );
}
