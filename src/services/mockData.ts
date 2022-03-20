const CDN = process.env.CDN;
const cdn = (path: string) => CDN + '/' + path;

export default {
  profile: {
    nickname: 'johnny wang',
  },
  draw: {
    success: 200,
  },
};
