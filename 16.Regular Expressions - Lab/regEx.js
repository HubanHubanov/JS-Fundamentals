function regex1() {
  let pattern = /<(?<tag>[a-z]+)>(.*)<\/\1>/gm;

  let regex = new RegExp(`<(?<tag>[a-z]+)>.*</\\1>`, "gm");

  let text = `<b>Regular Expressions</b> are cool!
    <p>I am a paragraph</p> … some text after
    Hello, <div>I am a<code>DIV</code></div>!
    <span>Hello, I am Span</span>
    <a href="https://softuni.bg/">SoftUni</a>`;

  let match = pattern.exec(text);
  let match2 = text.match(pattern);

  let regexp = /\d{4}-\d{2}-\d{2}/gm;

  let text2 = "Today is 2015-05-11";
  let match3 = regexp.exec(text2);
  let match4 = text2.match(regexp);
  let res = regexp.test(text2);
}

regex1();
