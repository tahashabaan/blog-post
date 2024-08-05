import { Router } from "express";

import UserController from "@/api/userApi";
import { userValidate, createUserValidate, updateUserValidate, delUserValidate } from "@/Utils/validation/userValidate";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

class UserRoute {
    public router: Router;
    private userControle: UserController;

    constructor() {
        this.router = Router();
        this.userControle = new UserController();
        this.initializeRoutes();
    }

    private initializeRoutes() {
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
        this.router.get("/users", this.userControle.getAllUsers.bind(this.userControle));

        /**
         * @swagger
         * /users:
         *   post:
         *     summary: Create a new user
         *     tags: [Users]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/User'
         *     responses:
         *       201:
         *         description: User created successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/User'
         *       400:
         *         description: Bad request
         *       500:
         *         description: Internal server error
         */
        this.router.post("/users",createUserValidate, this.userControle.createUser.bind(this.userControle));

        /**
         * @swagger
         * /users/{id}:
         *   get:
         *     summary: Get a user by ID
         *     tags: [Users]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The user ID
         *     responses:
         *       200:
         *         description: User found
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/User'
         *       404:
         *         description: User not found
         *       500:
         *         description: Internal server error
         */
        this.router.get("/users/:id",userValidate, this.userControle.getUserById.bind(this.userControle));

        /**
         * @swagger
         * /users/{id}:
         *   put:
         *     summary: Update a user by ID
         *     tags: [Users]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The user ID
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/User'
         *     responses:
         *       200:
         *         description: User updated successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/User'
         *       400:
         *         description: Bad request
         *       404:
         *         description: User not found
         *       500:
         *         description: Internal server error
         */
        this.router.put("/users/:id",updateUserValidate, this.userControle.updateUser.bind(this.userControle));

        /**
         * @swagger
         * /users/{id}:
         *   delete:
         *     summary: Delete a user by ID
         *     tags: [Users]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *         description: The user ID
         *     responses:
         *       200:
         *         description: User deleted successfully
         *       404:
         *         description: User not found
         *       500:
         *         description: Internal server error
         */
        this.router.delete("/users/:id",delUserValidate,  this.userControle.delUser.bind(this.userControle));
    }
}

export default UserRoute;