function regex() {
  let regex = /<(?<tag>[a-z]+)>(?<content>.*)<\/\1>/g;

  let text = `<b>Regular Expressions</b> are cool!
      <p>I am a paragraph</p> … some text after
      Hello, <div>I am a<code>DIV</code></div>!
      <span>Hello, I am Span</span>
      <a href="https://softuni.bg/">SoftUni</a>`;

  let match = regex.exec(text);

  while (match) {
    console.log(match.groups.tag);
    console.log(match.groups);

    match = regex.exec(text);
  }
}

regex();
