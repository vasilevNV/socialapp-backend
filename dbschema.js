let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      email: "new@test.com",
      handle: "user",
      createdAt: "2020-04-20T14:58:37.639Z",
      imgUrl: "image/12321312323123.jpg",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London UK",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is a scream body",
      createdAt: "2020-04-20T14:58:37.639Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "sdfjkljlhsewdfsddfdsfx",
      body: "nice one mate!",
      createdAt: "2020-04-20T14:58:37.639Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "rD5qrJEkhje96UzNwqLlZ7qcyvl2",
    email: "test2@implesol.com",
    bio: "Hello, i am test2 user from Moscow",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/social-app-30038.appspot.com/o/undefined?alt=media",
    createdAt: "2020-04-22T12:52:44.934Z",
    location: "Moscow RU",
    website: "https://implesol.com",
    handle: "test2",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "DfV5477vdfVFpoo",
    },
    {
      userHandle: "user",
      screamId: "3IOcxd545fDfV5477vdfVFpoo",
    },
  ],
};
