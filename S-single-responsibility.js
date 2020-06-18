// Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <span>${this.news.text}</span>
      </div>
    `;
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified,
    });
  }
}

const printer = new NewsPrinter(new News("Title", "Description"));

console.log(printer.html());
console.log(printer.json());
