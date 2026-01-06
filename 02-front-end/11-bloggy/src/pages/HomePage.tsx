import { useEffect, useState } from "react";

import { Link } from "react-router";

import { type IArticle } from "../types/article.type";

export default function HomePage() {
  const [articles, setArticles] = useState<IArticle[] | null>(null);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch(import.meta.env.VITE_API_DOMAIN);
      const data = await response.json();

      setArticles(data);
    }

    getArticles();
  }, []);

  return (
    <main>
      {articles?.map((element) => (
        <article key={element.objectId}>
          <img src={element.image} alt="" />
          <Link to={`/detail/${element.objectId}`}>
            <h2>{element.title}</h2>
          </Link>
        </article>
      ))}
    </main>
  );
}
