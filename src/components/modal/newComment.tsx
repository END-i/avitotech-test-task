import React from "react";

import { useGlobalState } from "common/context";
import { useFetch, useForm } from "common/hooks";
import { IPost, OnSubmitValues, IComments } from "common/types";
import { Button } from "./styled";
import { Input } from "components";

const init = { name: "", comment: "" };

export default function ({
  setComments,
}: {
  setComments: React.Dispatch<React.SetStateAction<IComments[]>>;
}) {
  const { imageId } = useGlobalState();
  const [postComment] = useFetch<IPost | undefined>(`/${imageId}/comments`, "post");

  const {
    values,
    setValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    onEnter,
  } = useForm({
    initialValues: init,
    onSubmit: (values: OnSubmitValues) => {
      const id = new Date().getTime();
      setComments((prev) => [
        ...prev,
        {
          date: id,
          id: id,
          text: values.comment,
        },
      ]);
      setValues(init);
      return postComment(values);
    },
  });

  return (
    <>
      <Input
        placeholder="Ваше имя"
        name="name"
        value={values.name}
        onBlur={handleBlur}
        onKeyUp={onEnter}
        error={touched.name ? errors.name : ""}
        onChange={handleChange}
      />
      <Input
        placeholder="Ваш комментарий"
        value={values.comment}
        name="comment"
        onBlur={handleBlur}
        onKeyUp={onEnter}
        error={touched.comment ? errors.comment : ""}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Оставить комментарий</Button>
    </>
  );
}
