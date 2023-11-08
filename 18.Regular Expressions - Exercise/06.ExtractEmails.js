function extractEmails(text) {
  let regex = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;

  let match = text.match(regex);

  console.log(match.join("\n"));
}

extractEmails("Please contact us at: support@github.com.");

extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);

extractEmails(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);
