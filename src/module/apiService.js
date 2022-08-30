const getTvShows = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getlike = async (url) => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
};
const like = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
const getComment = async (url, id) => {
  let response = await fetch(`${url}?item_id=${id}`);
  if (response.status === 400) {
    response = [];
    return response;
  }
  return response.json();
};

const comment = async (url, itemId, username, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};
module.exports = {
  getTvShows, getlike, like, getComment, comment,
};
