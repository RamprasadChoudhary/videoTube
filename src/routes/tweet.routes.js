import { Router } from 'express';
import {
    createTweet,
    deleteTweet,
    getUserTweets,
    getUserTweetsByUsername,
    updateTweet,
} from "../controllers/tweet.controllers.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/").post(createTweet);
router.route("/u/:userId").get(getUserTweets);
router.route("/u/post/:username").get(getUserTweetsByUsername)
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router