import Link from "next/link";
import Image from "next/image";
import FormAccount from "./FormAccount";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-wrap justify-center w-screen text-3xl font-bold text-center pb-4 bg-slate-300 text-slate-200 dark:bg-slate-700 dark:text-slate-800">
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
        <Link href={"/blog"} className="button-blue">
          Blog
        </Link>
        <Link href={"/login"} className="button-blue">
          Login
        </Link>
        <Link href={"/registro"} className="button-blue">
          SingUp
        </Link>
        <Link href={"/password"} className="button-blue">
          Pass Forgeted
        </Link>
        <Image
          className="my-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/user.png"
          alt="user icon"
          width={30}
          height={0}
          priority
        />
      </header>
      {children}
      <FormAccount />
    </>
  );
}
