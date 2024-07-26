import { Metadata } from "next";
import SeeComment from "./SeeComment";

type Props = {
  params: {
    prod: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: {
      absolute: `Product: ${params.prod}`,
    },
  };
};

export default function ProdDetail({ params }: Props) {
  return (
    <>
      <figure className="w-60 p-4 mt-4 mx-auto bg-gray-400 border-4 border-transparent hover:border-gray-500 rounded-lg">
        <img src="https://picsum.photos/200" alt="foto random" />
        <figcaption className="text-center text-xl p-2">Prod id: {params.prod}</figcaption>
        <p>
          <code>
            Metadatos (title) generado dinámicamente, a través del paso de parámetros, y especificados como{" "}
            <em>absolute</em>
          </code>
        </p>
      </figure>
      <SeeComment />
    </>
  );
}
