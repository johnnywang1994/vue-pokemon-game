import { useGame } from './Game';
import type { APIResponse } from './types';

interface UseApiOptions<R> {
  api: () => APIResponse<R>;
  useLoading?: boolean;
  isLastLoading?: boolean;
  errorExceptions?: Array<string>;
}

export async function useApi<R>({
  api,
  useLoading = true,
  isLastLoading = true,
  errorExceptions = [],
}: UseApiOptions<R>): Promise<R> {
  const Game = useGame();
  let res;
  if (useLoading) Game.updateAPILoading(true);
  // fetch api
  try {
    res = await api();
    // error handling
    if (res && 'error' in res && !errorExceptions.includes(res.error)) {
      throw res;
    }
  } catch (err: any) {
    const msg = err.error || 'ERROR__SERVER_BUSY';
    if (useLoading) Game.updateAPILoading(false);
    if (err.error) {
      throw Error(`Api: ${msg}`);
    }
    throw err;
  } finally {
    if (useLoading && isLastLoading) Game.updateAPILoading(false);
  }
  // return
  return res as R;
}
