// -- utils
export type AnyJson = boolean | number | string | null | JsonArray | JsonMap;

export interface JsonMap {
  [key: string]: AnyJson;
}

export type JsonArray = AnyJson[];

// -- store items
export type GameStateType = {
  APILoading: boolean;
  profile: ProfileResponse;
}

// -- params
export type DrawParamType = {
  drawType: number;
}

// -- responses
export type APIResponse<T> = Promise<T | ErrorResponse>;

export type ErrorResponse = {
  error: string;
}

export type ProfileResponse = {
  nickname: string;
}

export type DrawResponse = {
  success: number;
}