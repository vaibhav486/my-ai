import express from 'express';
import { auth } from '../middlewares/auth.js';
import { generateArticle, generateBlogArticle, generateImage, removeImageBackground, removeImageObject, resumeReview } from '../controllers/aiController.js';
import { upload } from '../controllers/multer.js';

const aiRouter=express.Router();
 aiRouter.post('/generate-article',auth,generateArticle)
 aiRouter.post('/generate-blog-title',auth,generateBlogArticle)
 aiRouter.post('/generate-image',auth,generateImage)
  aiRouter.post('/remove-image-background',upload.single('image'),auth ,removeImageBackground)
aiRouter.post('/remove-image-object',upload.single('image'),auth ,removeImageObject)
       
aiRouter.post('/resume-review',upload.single('resume'),auth ,resumeReview)
  export default aiRouter