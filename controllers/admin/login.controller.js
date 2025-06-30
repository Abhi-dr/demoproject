export default (req, res) => {
  const { email, password } = req.body;
  req.session.user = email.split("@")[0].toUpperCase();
  res.redirect("/admin/dashboard");
};
