import { Router } from "express";

import CategoryController from "@/api/categoryAPI";

/**
 * @swagger
 * tags:
 *  name: Categories
 *  description: Category management
 */
export default class CategoryRoute {
  private categoryControle: CategoryController;
  public router: Router;
  constructor() {
    this.router = Router();
    this.categoryControle = new CategoryController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/category")

      /**
       * @swagger
       * /category:
       *   get:
       *     summary: Get all Categories
       *     tags: [Categories]
       *     responses:
       *       200:
       *         description: A list of Categories
       *         content:
       *           application/json:
       *             schema:
       *               type: array
       *               items:
       *                 $ref: '#/components/schemas/Category'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.categoryControle.getCategories.bind(this.categoryControle))
     
      /**
       * @swagger
       * /category:
       *   post:
       *     summary: Create a Category
       *     tags: [Categories]
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Category'
       *     responses:
       *       201:
       *         description: Category created successfully
       *       500:
       *         description: Internal server error
       */
      .post(this.categoryControle.createCategory.bind(this.categoryControle));

    this.router
      .route("/category/:id")

      /**
       * @swagger
       * /category/{id}:
       *   get:
       *     summary: Get a Category
       *     tags: [Categories]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Category to return
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: A Category
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Category'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .get(this.categoryControle.getCategoryById.bind(this.categoryControle))

      /**
       * @swagger
       * /category/{id}:
       *   put:
       *     summary: Update a Category
       *     tags: [Categories]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Category to update
       *         schema:
       *           type: string
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Category'
       *     responses:
       *       200:
       *         description: Category updated successfully
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Category'
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .put(this.categoryControle.updateCategory.bind(this.categoryControle))
      /**
       * @swagger
       * /category/{id}:
       *   delete:
       *     summary: Delete a Category
       *     tags: [Categories]
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the Category to delete
       *         schema:
       *           type: string
       *     responses:
       *       200:
       *         description: Category deleted successfully
       *       404:
       *         description: Not found
       *       500:
       *         description: Internal server error
       */
      .delete(this.categoryControle.delCategory.bind(this.categoryControle));
  }
}
// Compare this snippet from src/route/categoryRoute.ts:
