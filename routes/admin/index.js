import { Router } from "express";
import adminController from "../../controllers/admin/admin.controller.js";
import loginController from "../../controllers/admin/login.controller.js";
import dashboardController from "../../controllers/admin/dashboard.controller.js";
import logoutController from "../../controllers/admin/logout.controller.js";
import moderateController from "../../controllers/admin/moderate.controller.js";
import isAuthentication from "../../util/isAuthentication.js";

const router = Router();

router.get("/", adminController);

router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(loginController);

router.get("/dashboard",isAuthentication, dashboardController)

router.get("/logout", logoutController)

router.post("/moderate",isAuthentication, moderateController)

export default router;
