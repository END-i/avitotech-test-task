export interface ISkeletonProps extends ISkeletonWrapperStyled {
  children?: React.ReactNode;
}

export interface ISkeletonWrapperStyled extends ISketeletonStyled {
  styles: {
    width?: number;
    height?: number;
    [key: string]: any;
  };
}

export interface ISketeletonStyled {
  load: boolean;
}
