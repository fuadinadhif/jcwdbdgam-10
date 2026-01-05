import React, { useState } from "react";

function App() {
  const [articleData, setArticleData] = useState({
    title: "",
    image: "",
    content: "",
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://chippertreatment-us.backendless.com",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(articleData),
        }
      );

      if (response.ok) {
        alert("Congratulations, new article created!");
      } else {
        alert("Please check your input");
      }

      setArticleData({ title: "", image: "", content: "" });
    } catch (error) {
      alert("Failed to create new article. Please try again after 5 minutes");
    }
  }

  return (
    <main>
      <h1>Create New Article</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={articleData.title}
          onChange={(event) =>
            setArticleData({ ...articleData, title: event.target.value })
          }
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          value={articleData.image}
          onChange={(event) =>
            setArticleData({ ...articleData, image: event.target.value })
          }
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={articleData.content}
          onChange={(event) =>
            setArticleData({ ...articleData, content: event.target.value })
          }
        ></textarea>

        <button type="submit">Create Article</button>
      </form>
    </main>
  );
}

export default App;
