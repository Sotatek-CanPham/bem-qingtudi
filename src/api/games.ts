import axios from './axios-adapter';
import { GameInfoResponse } from '../utils/interface';

export const getGamesHome = (
  params: Record<string, unknown>,
): Promise<GameInfoResponse> => {
  return axios.get(`?page=${params.page}`);
};


// export const userWithdrawAction = (
//   params: Record<string, unknown>,
// ): Promise<UserWithdrawResponse> => {
//   return axios.post('my/withdrawals', params);
// };