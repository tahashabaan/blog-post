import { Router } from "express";

import TagController from "@/api/tagAPI";

/**
 * @swagger
 * tags:
 *  name: Tags
 *  description: Tag management
 */

export default class TagRoute {
  private tagControle: TagController;
  public router: Router;
  constructor() {
    this.router = Router();
    this.tagControle = new TagController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route("/tags")
     /**
 * @swagger
 * /tags:
 *   get:
 *     summary: Get all Tags
 *     tags: [Tags]
 *     responses:
 *       200:
 *         description: A list of Tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tag'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
      .get(this.tagControle.getTags.bind(this.tagControle))

       /**
         * @swagger
         * /tags:
         *   post:
         *     summary: Create a new Tag
         *     tags: [Tags]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Tag'
         *     responses:
         *       201:
         *         description: Tag created successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Tag'
         *       400:
         *         description: Bad request
         *       500:
         *         description: Internal server error
         */
      .post(this.tagControle.createTag.bind(this.tagControle));

    this.router
      .route("/tag/:id")
      /**
         * @swagger
         * /tag/{id}:
         *   get:
         *     summary: Get a Tag by ID
         *     tags: [Tags]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The Tag ID
         *     responses:
         *       200:
         *         description: Tag found
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Tag'
         *       404:
         *         description: User not found
         *       500:
         *         description: Internal server error
         */
      .get(this.tagControle.getTagById.bind(this.tagControle))
      /**
     * @swagger
     * /tag/{id}:
     *   put:
     *     summary: Update a Tag by ID
     *     tags: [Tags]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: The Tag ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Tag'
     *     responses:
     *       200:
     *         description: Tag updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas Tag'
     *       400:
     *         description: Bad request
     *       404:
     *         description: Tag not found
     *       500:
     *         description: Internal server error
     */
      
      .put(this.tagControle.updateTag.bind(this.tagControle))
       /**
         * @swagger
         * /tag/{id}:
         *   delete:
         *     summary: Delete a Tag by ID
         *     tags: [Tags]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The Tag ID
         *     responses:
         *       200:
         *         description: Tag deleted successfully
         *       404:
         *         description: Tag not found
         *       500:
         *         description: Internal server error
         */
      .delete(this.tagControle.delTag.bind(this.tagControle));
  }
}
