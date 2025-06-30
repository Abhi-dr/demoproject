export default (req, res)=>{
    req.session.user
        ? res.redirect("/admin/dashboard")
        : res.redirect("/admin/login")
}