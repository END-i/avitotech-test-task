import React, { useEffect, useState, useRef } from "react";

import { useGlobalState, useDispatch } from "common/context";
import { IImage, IComments } from "common/types";
import { useFetch, useOutsideClick } from "common/hooks";
import { Skeleton, Error } from "components";
import Comments from "./comments";
import NewComment from "./newComment";
import { ShadowWrapper, Wrapper, Close, Column, Image } from "./styled";

const initImg: IImage = {
  comments: [],
  id: 0,
  url: "",
};

export default function () {
  const { imageId } = useGlobalState();
  const dispatch = useDispatch();
  const [handeleCall, { values, loading, error }] = useFetch<IImage | undefined>(`/${imageId}`);
  const [show, setShow] = useState<boolean>(false);
  const [comments, setComments] = useState<IComments[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<IImage>(initImg);

  const close = () => {
    dispatch("imageId", null);
    setImage(initImg);
  };

  useOutsideClick(modalRef, close);

  useEffect(() => {
    if (image) {
      setComments(image.comments);
    }
  }, [image]);

  useEffect(() => {
    if (values) {
      setImage(values);
    }
  }, [values]);

  useEffect(() => {
    if (imageId) {
      handeleCall();
    }
    setShow(!!imageId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageId]);

  return (
    <Error error={error}>
      <ShadowWrapper show={show}>
        <Wrapper ref={modalRef}>
          <Close onClick={close} />
          <Column>
            <Skeleton
              load={!image.url || loading}
              styles={{ width: 331, height: 220, rest: "margin: 0 0 29px;" }}
            >
              <Image src={image.url} alt={`photo-${image.id}`} />
            </Skeleton>
            <NewComment setComments={setComments} />
          </Column>
          <Comments {...{ comments, loading }} />
        </Wrapper>
      </ShadowWrapper>
    </Error>
  );
}
