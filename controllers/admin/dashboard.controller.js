let posts = [
    {
        id:1,
        author: "Harish",
        title: "I Like Express",
        content:"This is express js tutorial"
    },
    {
        id:2,
        author: "Daya",
        title: "I Like JavaScript",
        content:"This is JavaScript tutorial"
    }
]
export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user,
    posts,
  });
};
