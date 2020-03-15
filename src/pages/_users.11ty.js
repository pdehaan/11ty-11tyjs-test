class UsersTemplate {
  data() {
    return {
      layout: "layouts/base.11ty.js",
      tags: ["nav"],
      navtitle: "Posts",
      title: "Posts",
      pagination: {
        data: "users",
        size: 2,
        reverse: true,
        alias: "user"
      },
      permalink(data) {
        // Use output permalinks like "cast/index.html" and "cast/2/index.html", etc.
        const pageNumber =
          data.pagination.pageNumber === 0
            ? ""
            : `${data.pagination.pageNumber + 1}/`;
        return `cast/${pageNumber}`;
      }
    };
  }
  render(data) {
    const userString = data.user.map(user => user.name);
    return `<h2>Hello ${userString.join(" and ")}!</h2>`;
  }
}

module.exports = UsersTemplate;
