import api from './api';
import mock from './mock';
import type { ProfileResponse, DrawParamType, DrawResponse } from '@/stores/types';

if (process.env.NODE_ENV === 'development') {
  mock();
}

export default {
  getProfile() {
    return api<ProfileResponse>('get', '/profile');
  },
  postDraw(data: DrawParamType) {
    return api<DrawResponse>('post', '/draw', data);
  }
};
