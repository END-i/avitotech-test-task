import React from "react";

import { CommentsList, Date, Comment, Empty } from "./styled";
import { Skeleton } from "components";
import { ICommentsProps } from "common/types";
import { formatDate } from "common/utils";

export default function ({ loading, comments }: ICommentsProps) {
  return (
    <CommentsList>
      {loading &&
        [1, 2].map((i) => (
          <Comment key={i}>
            <Skeleton
              load={true}
              styles={{ width: 100, height: 10, rest: "margin-bottom: 5px;" }}
            />
            <Skeleton load={true} styles={{ height: 20 }} />
          </Comment>
        ))}
      {!loading &&
        (comments.length ? (
          comments.map(({ date, id, text }) => (
            <Comment key={id}>
              <Date>{formatDate(date)}</Date>
              <span>{text}</span>
            </Comment>
          ))
        ) : (
          <Empty>Нет комментариев</Empty>
        ))}
    </CommentsList>
  );
}
