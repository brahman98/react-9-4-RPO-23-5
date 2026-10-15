import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

export function PostsProvider({children}) {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    if (savedPosts) {
      return JSON.parse(savedPosts);
    }

    return [
      {
        id: 1,
        title: "Полезные новшества ECMAScript 2026",
        text: "JavaScript получает новый стандарт языка каждый год. Некоторые редакции представляют синтаксис, который меняет то, как программы пишутся или как они выполняются. Версия ECMAScript 2026 (ES17) представила набор полезных возможностей, которые мы рассмотрим в этой статье. Эти возможности добавляют API для задач, которые сейчас решаются с помощью небольших утилит, повторяющихся проверок или обходных путей, подверженных ошибкам.",
        author: "Viktor",
      },
    ];
  });

    useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
        {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
