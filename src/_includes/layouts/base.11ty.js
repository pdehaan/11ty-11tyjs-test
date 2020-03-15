class BaseLayout {
  render(data) {
    return `
      <main>${data.content.trim()}</main>
      <footer>${data.tags.join(", ")}</footer>
    `;
  }
}

module.exports = BaseLayout;
