import { Metadata } from "next";
import IdForm from "../../../../components/IdForm";

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

export default function Comments({ params }: Props) {
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
      <h1 className="mx-auto w-fit text-3xl mt-8">Comments</h1>
      <IdForm label={"Search comment"} />
      <ul className="w-fit mx-auto mt-8">
        <li className="button-blue">Comment 1</li>
        <li className="button-blue">Comment 2</li>
        <li className="button-blue">Comment 3</li>
      </ul>
    </>
  );
}
