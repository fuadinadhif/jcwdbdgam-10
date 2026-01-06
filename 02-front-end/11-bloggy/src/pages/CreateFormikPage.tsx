import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { type IArticle } from "../types/article.type";
import { articleShema } from "../schemas/article.schema";

export default function CreateFormikPage() {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: IArticle = {
    title: "",
    image: "",
    content: "",
  };

  async function handleSubmit(values: IArticle) {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://chippertreatment-us.backendless.app/api/data/articles",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        alert("Congratulations, new article created!");
      } else {
        alert("Please check your input");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }

      alert("Failed to create new article. Please try again after 5 minutes");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>Create New Article</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={articleShema}
      >
        {() => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" type="text" />
            <ErrorMessage name="title" component="p" className="text-red-500" />

            <label htmlFor="image">Image</label>
            <Field id="image" name="image" type="text" />
            <ErrorMessage name="image" component="p" className="text-red-500" />

            <label htmlFor="content">Content</label>
            <Field id="content" name="content" type="text" />
            <ErrorMessage
              name="content"
              component="p"
              className="text-red-500"
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Create Article"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
