module.exports = async function (importPath) {
  const [, url,] = require('./index').match.exec(importPath);
  try {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.text();
    if (!response.ok || response.status !== 200) throw Error('Content ' + data);
    return data;
  } catch (error) {
    throw error;
  }
};