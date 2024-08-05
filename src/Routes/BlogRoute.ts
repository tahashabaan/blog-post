import { Router } from "express";

import BlogController from "@/api/blogAPI";

/**
 * @swagger
 * tags:
 *  name: Blogs
 *  description: Blog management
 */

export default class BlogRoute {
  private blogControle: BlogController;
  public router: Router;
  constructor() {
    this.router = Router();
    this.blogControle = new BlogController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/blog")

      /**
       * @swagger
       * /blog:
       *   get:
       *     summary: Get all Blogs
       *     tags: [Blogs]
       *     responses:
       *       200:
       *         description: A list of Blogs
       *         content:
       *           application/json:
       *             schema:
       *               type: array
       *               items:
       *                 $ref: '#/components/schemas/Blog'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.blogControle.getBlogs.bind(this.blogControle))

      /**
       * @swagger
       * /blog:
       *   post:
       *     summary: Create a new Blog
       *     tags: [Blogs]
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Blog'
       *     responses:
       *       201:
       *         description: Blog created successfully
       */
      .post(this.blogControle.createBlog.bind(this.blogControle));

    this.router
      .route("/blog/:id")
      /**
       * @swagger
       * /blog/{id}:
       *   get:
       *     summary: Get a Blog
       *     tags: [Blogs]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Blog
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: A Blog
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Blog'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.blogControle.getBlogById.bind(this.blogControle))

      /**
       * @swagger
       * /blog/{id}:
       *   put:
       *     summary: Update a Blog
       *     tags: [Blogs]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Blog
       *         schema:
       *           type: string
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Blog'
       *     responses:
       *       200:
       *         description: Blog updated successfully
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Blog'
       *       400:
       *         description: Bad request
       *       500:
       *         description: Internal server error
       */
      .put(this.blogControle.updateBlog.bind(this.blogControle))

      /**
       * @swagger
       * /blog/{id}:
       *   delete:
       *     summary: Delete a Blog
       *     tags: [Blogs]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Blog
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: Blog deleted successfully
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .delete(this.blogControle.delBlog.bind(this.blogControle));
  }
}
