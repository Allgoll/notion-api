const Api = require('./src/api');

const options = {
  token_v2:
    'a0a3271f5155332746b56ead3cd822d95bb5dda6025457fa79cf411bab0bc0f780bad915652066c0d75c774d3268530ac7bd6dab574260cd59de931fa3479be33d05c5e13a9700063e8409922630',
  userId: '2896cbb0-5d7d-4e87-93ee-79f966e66d12',
  pageId: '2361caf6-66e6-4bd3-8217-e11e55920b82',
};

const api = new Api({ token: options.token_v2, userId: options.userId });
setTimeout(() => {
  api.getPages();
}, 1500);
