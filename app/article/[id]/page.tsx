import Link from "next/link";
import { TArticle } from "../../../types";

const getArticle = async (id: string): Promise<TArticle> => {
  const res = await fetch(
    `${process.env.HOST || "localhost:3000"}/api/articles/${id}`
  );
  return res.json();
};

type TProps = { params: { id: string; }; };
const Article = async ({ params }: TProps) => {
  const article = await getArticle(params.id);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href={"/"}>Back</Link>
    </>
  );
};

export default Article;
