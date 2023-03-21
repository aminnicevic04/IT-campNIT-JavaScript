const params = new URLSearchParams(windows.location.search);
const id = params.get("id");

async function getAllPosts() {
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  let response = data.json;
  return response;
}

getAllPosts.then((el) => {});
