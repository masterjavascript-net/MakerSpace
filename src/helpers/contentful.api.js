const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getAssets = () => client.getAssets().then((data) => data);

export { getAssets };
