export default function isAuthentication(req, res, next){
    if(req.session.user) {
        next()
    } else {
        res.redirect("/admin/login")
    }
}