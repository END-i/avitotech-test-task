import { useEffect, useState } from "react";

import { useFetchVoid, UseFormProps } from "common/types";

export const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export const useFetch = <T,>(path: string = "", method: string = "get"): useFetchVoid<T> => {
  const [values, setValues] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const basePath = "https://boiling-refuge-66454.herokuapp.com/images";
  const url = `${basePath}${path}`;

  const handeleCall = async (data?: any) => {
    setError("");
    setLoading(true);
    setValues(undefined);

    try {
      const req = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const response = await req.json();
      setValues(response);
    } catch (error) {
      setError("Some error");
    }

    setLoading(false);
  };

  return [handeleCall, { values, loading, error }];
};

export const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setValues(initialValues);
    setTouched({});
    setOnSubmitting(false);

    for (let i in initialValues) {
      const error: string | undefined = validation(i, initialValues[i]);
      if (error) {
        setErrors((prev) => ({ ...prev, [i]: error }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOnSubmitting(!Object.keys(errors).length);
  }, [errors, touched]);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value });
    const error: string | undefined = validation(name, value);
    setErrors((prev) => {
      if ((!error && prev[name]) || !error) {
        const newPrev = { ...prev };
        delete newPrev[name];
        return newPrev;
      }
      return { ...prev, [name]: error };
    });
  };

  const handleBlur = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    if (event) {
      event.preventDefault();
    }
    if (onSubmitting) {
      onSubmit(values);
    }
  };

  const onEnter = (event: { preventDefault: () => void; key: string }) => {
    if (event) {
      event.preventDefault();
      if (onSubmitting && event.key === "Enter") {
        onSubmit(values);
      }
    }
  };

  return {
    values,
    setValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    onEnter,
  };
};

export const validation = (name: string, value: string) => {
  const rules: { [key: string]: { regex: RegExp; message: string }[] } = {
    name: [{ message: "Введите текст комментария", regex: /^.{2,}$/g }],
    comment: [{ message: "Введите имя", regex: /^.{2,}$/g }],
  };
  if (rules[name]) {
    for (let idx in rules[name]) {
      const { message, regex } = rules[name][idx];
      if (!value.match(regex)) {
        return message;
      }
    }
  }
};
