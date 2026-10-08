import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile() {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "Полезные новшества ECMAScript 2026",
  //     text: "JavaScript получает новый стандарт языка каждый год. Некоторые редакции представляют синтаксис, который меняет то, как программы пишутся или как они выполняются. Версия ECMAScript 2026 (ES17) представила набор полезных возможностей, которые мы рассмотрим в этой статье. Эти возможности добавляют API для задач, которые сейчас решаются с помощью небольших утилит, повторяющихся проверок или обходных путей, подверженных ошибкам.",
  //     author: "Viktor",
  //   },
  // ]);
  
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

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Изменились посты");
  // }, [posts]);

  // Сохраняем посты после каждого изменения
  useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);

  function addPost(event) {
    event.preventDefault();
    if (!title.trim() || !title.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title,
      text: text,
      author: "Viktor",
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setText("");
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id != id));
  }
  function clearPosts() {
    setPosts([]);
  }

  return (
    <section>
      <h1>Профиль</h1>
      <ProfileCard />
      <div className="feed">
        <h2>Мои публикации</h2>
        <p>Всего публикаций: {posts.length}</p>

        <form className="post-form" onSubmit={addPost}>
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Текст поста"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          <button type="submit">Опубликовать</button>
          <button className="delete-button" type="submit" onClick={clearPosts}>Удалить все посты</button>
        </form>


      {/* Создать функцию и кнопку для удаления всех постов в своем профиле */}

        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              title={post.title}
              text={post.text}
              id={post.id}
              onDelete={deletePost}
            />
          ))
        ) : (
          <p>Опубликуйте свой первый пост</p>
        )}
      </div>
    </section>
  );
}

export default Profile;
