import express from "express";
import passport from "passport";
import {
  getAdminStats,
  getAdminUser,
  logout,
  myprofile,
} from "../controller/user.js";
import { authorizedAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google"),

  (req, res, next) => {
    res.send("Logged In");
  }
);

router.get("/me", isAuthenticated, myprofile);

router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizedAdmin, getAdminUser);

router.get("/admin/stats", isAuthenticated, authorizedAdmin, getAdminStats);

export default router;
