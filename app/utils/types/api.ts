// error returned by api
export interface ApiError {
  error: {
    code: number;
    message: string;
    details: unknown;
  };
}

// collection returned by api
export interface ApiCollection<T> {
  type: string;
  count: number;
  items: T[];
}

// jwt for logged admin
export interface AdminJWT {
  token: string;
}

// api request parameters
export interface ApiParams {
  params: {
    id: string;
  };
}
