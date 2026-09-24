import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Полезные новшества ECMAScript 2026",
      text: "JavaScript получает новый стандарт языка каждый год. Некоторые редакции представляют синтаксис, который меняет то, как программы пишутся или как они выполняются. Версия ECMAScript 2026 (ES17) представила набор полезных возможностей, которые мы рассмотрим в этой статье. Эти возможности добавляют API для задач, которые сейчас решаются с помощью небольших утилит, повторяющихся проверок или обходных путей, подверженных ошибкам.",
      author: "Viktor",
    },
    {
      id: 2,
      title: "Это больше не ХИ‑ХИ: как использовать ИИ — и не разучиться думать",
      text: "«Ну понятно, до нормального результата ещё года два». Так можно было сказать про нейронки… примерно полгода назад. И вот мы здесь. ИИ уже делает кучу вещей сильно быстрее и проще. И вот здесь начинается самое дискуссионное. Потому что вместе с рабочей задачей есть риск передать искусственному интеллекту и кое‑что важное: поиск и анализ информации, который влияет на развитие собственного интеллекта. ",
      author: "Viktor",
    },
    {
      id: 3,
      title: "Зря вы не используете эти HTML-элементы",
      text: "Я говорю о семантической вёрстке уже десять лет. Только как-то так получилось, что в последнее время я ничего не писал на эту тему. Надо исправляться!<br> В современных веб-интерфейсах я часто встречаю определённый набор семантических элементов. Это header, main, nav, footer. Даже элемент button встречается. Реже, чем другие, но всё же есть. Не будем на этом останавливаться! Сегодня мы с вами рассмотрим ещё несколько элементов, которые почему-то редко используются. Хотя с ними ваша вёрстка станет ещё более семантичной, а значит, и интерфейсы станут ещё лучше.",
      author: "Viktor",
    },
  ]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function addPost(event) {
    event.preventDefault();

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
    setPosts(
      posts.filter((post) => post.id != id)
    );
  }

  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar">avatar</div>
        <div className="profile-info">
          <h2>Name</h2>
          <p>@nickname</p>
        </div>
      </div>

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
      </form>

      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          title={post.title}
          text={post.text}
          id={post.id}
          onDelete={deletePost}
        />
      ))}
      {/* <Post author="Viktor" title="Exploring web-dev" text="какой-то осмысленный текст" />
        <Post author="Viktor" title="Im going become a fullstack developer" text="какой-то осмысленный текст" /> */}
    </section>
  );
}

export default ProfileCard;
