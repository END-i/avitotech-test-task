export type IImages =
  | {
      id: number;
      url: string;
    }[]
  | undefined;

export interface INewComment {
  name: string;
  comment: string;
}

export interface IComments {
  date: number;
  id: number;
  text: string;
}
export type IImage = {
  comments: IComments[];
  id: number;
  url: string;
};

export interface IInitialState {
  errors: string;
  loading: boolean;
  imageId: number | null;
}

export type IType = "errors" | "loading" | "imageId";

export type IDispatch = {
  type: IType;
  value: any;
};

export type IProviderProps = {
  children: React.ReactNode;
};

export type useFetchVoid<T> = [
  (body?: any) => Promise<void>,
  { values: T | undefined; loading: boolean; error: string },
];
export interface UseFormProps {
  initialValues: {
    [key: string]: string;
  };
  onSubmit: (values: { [key: string]: string }) => void;
}

export interface IErrorProps {
  error: string;
  children: React.ReactNode;
}

export interface ICommentsProps {
  loading: boolean;
  comments: IComments[];
}

export interface IPost {
  [key: string]: any;
}

export interface INewCommentProps {
  imageId: number | null;
}

export interface OnSubmitValues {
  [key: string]: string;
}
