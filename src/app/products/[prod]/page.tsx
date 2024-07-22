export default function ProdDetail({
  params,
}: {
  params: {
    prod: string;
  };
}) {
  return (
    <>
      <figure>
        <img src="https://picsum.photos/200" alt="foto random" />
        <figcaption>Prod id: {params.prod}</figcaption>
      </figure>
    </>
  );
}
