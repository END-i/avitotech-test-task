import React, { useEffect } from "react";

import { ISkeletonProps } from "./types";
import { Wrapper, Skeleton } from "./styled";

export default function ({ children = <div />, load, styles }: ISkeletonProps): JSX.Element {
  const [show, setShow] = React.useState(load);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(load);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [load]);

  return (
    <>
      {show && (
        <Wrapper {...{ load, styles }}>
          <Skeleton load={load} />
        </Wrapper>
      )}
      {show ? null : children}
    </>
  );
}
