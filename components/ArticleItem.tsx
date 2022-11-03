import Link from "next/link";
import styles from "../styles/Article.module.css";
import { TArticle } from "../types";

type Props = { article: TArticle; };
const ArticleItem = ({ article }: Props) => {
  // a single card on the Home screen
  return (
    <Link href={`/article/${article.id}`} className={styles.card}>
      <h3>{article.title} &rarr;</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
};

export default ArticleItem;
