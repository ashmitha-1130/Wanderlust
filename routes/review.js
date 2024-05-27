const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedin , isReviewAuthor} = require("../middleware.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const reviewController = require("../controllers/reviews.js");



//POST review route
router.post("/",isLoggedin,validateReview, wrapAsync(reviewController.createReviews));

//delete review route
router.delete("/:reviewId", isLoggedin,isReviewAuthor,wrapAsync(reviewController.destroyReviews));

module.exports = router;