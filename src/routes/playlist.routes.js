import { Router } from 'express';
import {
    addVideoToPlaylist,
    createPlaylist,
    deletePlaylist,
    getPlaylistById,
    getUserPlaylists,
    removeVideoFromPlaylist,
    updatePlaylist,
    getUserPlaylistsByUsername,
    getCurrentUserPlaylist,
    togglePlaylistAccess
} from "../controllers/playlist.controllers.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file
router.route("/").post(createPlaylist)

router
    .route("/:playlistId")
    .get(getPlaylistById)
    .patch(updatePlaylist)
    .delete(deletePlaylist);
router.route("/u/:ownerUsername").get(getUserPlaylistsByUsername)
router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist);
router.route("/owner/playlists").get(getCurrentUserPlaylist);
router.route("/user/:userId").get(getUserPlaylists);
router.route("/toggle/:userId/:playlistId").patch(togglePlaylistAccess);

export default router;