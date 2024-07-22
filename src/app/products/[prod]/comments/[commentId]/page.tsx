export default function CommentDetail({
  params,
}: {
  params: {
    prod: string;
    commentId: string;
  };
}) {
  return (
    <>
      <figure className="flex flex-col items-center justify-center mx-auto w-80 m-2 mb-4 p-8 rounded-lg bg-gray-400 border-4 border-transparent hover:border-gray-500">
        <img src="https://picsum.photos/200" alt="foto random" />
        <h3 className="text-2xl">Product id: {params.prod}</h3>
        <h4 className="text-lg">Comment : {params.commentId}</h4>
      </figure>
    </>
  );
}
