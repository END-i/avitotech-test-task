import React, { useEffect } from "react";

import { useDispatch } from "common/context";
import { Images, Image } from "./styled";
import { useFetch } from "common/hooks";
import { IImages } from "common/types";
import { Skeleton, Error } from "components";

export default function () {
  const [handeleCall, { values, loading, error }] = useFetch<IImages>();
  const dispatch = useDispatch();

  useEffect(() => {
    handeleCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setImageId = (id: number) => () => {
    dispatch("imageId", id);
  };

  const loadSekeleton =
    loading &&
    Array.from(Array(6).keys()).map((i) => (
      <Skeleton
        key={i}
        load={loading}
        styles={{ width: 228, height: 142, rest: `margin: 15px 10px;` }}
      />
    ));

  return (
    <Error error={error}>
      <Images>
        {loadSekeleton}
        {!loading &&
          values &&
          values.map(({ id, url }) => <Image key={id} src={url} onClick={setImageId(id)} />)}
      </Images>
    </Error>
  );
}
