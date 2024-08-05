import { Router } from "express";

import CommentController from "@/api/commentAPI";

/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: Comment management
 */
export default class CommentRoute {
  private commentControle: CommentController;
  public router: Router;
  constructor() {
    this.router = Router();
    this.commentControle = new CommentController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/comment")

      /**
       * @swagger
       * /comment:
       *   get:
       *     summary: Get all Comments
       *     tags: [Comments]
       *     responses:
       *       200:
       *         description: A list of Comments
       *         content:
       *           application/json:
       *             schema:
       *               type: array
       *               items:
       *                 $ref: '#/components/schemas/Comment'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.commentControle.getComments.bind(this.commentControle))

      /**
       * @swagger
       * /comment:
       *   post:
       *     summary: Create a new Comment
       *     tags: [Comments]
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Comment'
       *     responses:
       *       201:
       *         description: Comment created successfully
       *       400: 
       *       description: Bad request
       *     500:
       *      description: Internal server error
       */
      .post(this.commentControle.createComment.bind(this.commentControle));

    this.router
      .route("/comment/:id")
      /**
       * @swagger
       * /comment/{id}:
       *   get:
       *     summary: Get a Comment by ID
       *     tags: [Comments]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of Comment to return
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: A Comment
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Comment'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.commentControle.getCommentById.bind(this.commentControle))

      /**
       * @swagger
       * /comment/{id}:
       *   put:
       *     summary: Update a Comment
       *     tags: [Comments]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of Comment to update
       *         schema:
       *           type: string
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Comment'
       *     responses:
       *       200:
       *         description: Comment updated successfully
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Comment'
       *       400:
       *         description: Bad request
       *       500:
       *         description: Internal server error
       */
      .put(this.commentControle.updateComment.bind(this.commentControle))

      /**
       * @swagger
       * /comment/{id}:
       *   delete:
       *     summary: Remove a Comment
       *     tags: [Comments]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of Comment to remove
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: Comment removed successfully
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .delete(this.commentControle.delComment.bind(this.commentControle));
  }
}
