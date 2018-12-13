const faker = require('faker');

// Generate data with faker
const users = [];
const userIds = [];
const postIds = [];
const posts = [];
const comments = [];
// generate users
for (let i = 0; i < 10; i++) {
  let user = {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    age: faker.random.number({ min: 18, max: 72 })
  };
  userIds.push(user.id);
  users.push(user);
}
// generate posts
for (let i = 0; i < 50; i++) {
  let post = {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(2),
    body: faker.lorem.paragraphs(2),
    published: faker.random.boolean(),
    author: userIds[Math.floor(Math.random() * userIds.length)]
  };
  postIds.push(post.id);
  posts.push(post);
}
// generate commnets
for (let i = 0; i < 100; i++) {
  let comment = {
    id: faker.random.uuid(),
    text: faker.lorem.sentence(10),
    author: userIds[Math.floor(Math.random() * userIds.length)],
    post: postIds[Math.floor(Math.random() * postIds.length)]
  };
  comments.push(comment);
}
const db = { users, posts, comments };

module.exports = db;
