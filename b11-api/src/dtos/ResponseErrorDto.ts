export interface ResponseError extends Error {
  status?: number;
}

export const throwResponseError = (message: string, status: number) => {
  const error: ResponseError = new Error(message);
  error.status = status;
  return error;
};
