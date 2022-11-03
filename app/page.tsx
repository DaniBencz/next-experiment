import ArticleList from "../components/ArticleList";
import { TArticle } from "../types";

const getArticles = async (): Promise<TArticle[]> => {
  const res = await fetch(`${process.env.HOST || "localhost:3000"}/api/articles`);
  return res.json();
};

type Props = { articles: TArticle[]; };
const Home = async () => {
  const articles = await getArticles();

  return (
    <>
      <ArticleList articles={articles}></ArticleList>
    </>
  );
};

export default Home;
