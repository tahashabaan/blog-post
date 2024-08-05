import { Router } from "express";

import PostController from "@/api/postAPI";

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management
 */

export default class PostRoute {
  private postControle: PostController;
  public router: Router;
  constructor() {
    this.router = Router();
    this.postControle = new PostController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
 * @swagger
 * /post:
 *   get:
 *     summary: Get all Posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
    this.router.get("/post", this.postControle.getPosts.bind(this.postControle));

      /**
         * @swagger
         * /post:
         *   post:
         *     summary: Create a new post
         *     tags: [Posts]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Post'
         *     responses:
         *       201:
         *         description: Post created successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Post'
         *       400:
         *         description: Bad request
         *       500:
         *         description: Internal server error
         */
   
    this.router.post("/post", this.postControle.createPost.bind(this.postControle));

    /**
         * @swagger
         * /post/{id}:
         *   get:
         *     summary: Get a post by ID
         *     tags: [Posts]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The post ID
         *     responses:
         *       200:
         *         description: Post found
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Post'
         *       404:
         *         description: Post not found
         *       500:
         *         description: Internal server error
         */


    this.router.route("/post/:id")
   /**
         * @swagger
         * /post/{id}:
         *   get:
         *     summary: Get a Post by ID
         *     tags: [Posts]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The Post ID
         *     responses:
         *       200:
         *         description: Post found
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Post'
         *       404:
         *         description: post not found
         *       500:
         *         description: Internal server error
         */
     .get(this.postControle.getPostById.bind(this.postControle))
     /**
         * @swagger
         * /post/{id}:
         *   put:
         *     summary: Update a post by ID
         *     tags: [Posts]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The post ID
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Post'
         *     responses:
         *       200:
         *         description: Post updated successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Post'
         *       400:
         *         description: Bad request
         *       404:
         *         description: Post not found
         *       500:
         *         description: Internal server error
         */
      .put(this.postControle.updatePost.bind(this.postControle))
     
        /**
         * @swagger
         * /post/{id}:
         *   delete:
         *     summary: Delete a post by ID
         *     tags: [Posts]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The post ID
         *     responses:
         *       200:
         *         description: Post deleted successfully
         *       404:
         *         description: Post not found
         *       500:
         *         description: Internal server error
         */
      .delete(this.postControle.delPost.bind(this.postControle));
  }
}
