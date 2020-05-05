const Axios = require('axios').default;

Axios.post('http://localhost:8000/__refresh')
  .then(() => console.info('gatsby restarted'))
  .catch(() => {});
