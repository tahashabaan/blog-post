// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import { Application } from 'express';

import { Tag } from "@/models";

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'A simple Express Blog API',
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'User name',
              required: true,
            },
            email: {
              type: 'string',
              description: 'User email ',
              required: true,
            },
            password: {
              type: 'string',
              description: 'User password',
              required: true,
            },
            profilePicture: {
              type: 'string',
              description: 'User profile picture URL',
              required: false,
            },
            googleId: {
              type: 'string',
              description: 'User google ID',
              required: false,
            },
            posts: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'User posts',
              required: false,
            },

            comments: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'User comments',
              required: false,
            }
          },
        },
        Post: {
          type: 'object',
          properties: {
            
            title: {
              type: 'string',
              description: 'Post title',
              required: true,
            },
            content: {
              type: 'string',
              description: 'Post content',
              required: true,
            },
            authorID: {
              type: 'string',
              description: 'User ID',
              required: true,
            },
            categoryID: {
              type: 'string',
              description: 'Post ID',
              required: true,
            },
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Post tags',
            },
            blogID: {
              type: 'string',
              description: 'Post ID',
            },
            summary: {
              type: 'string',
              description: 'Post summary',
            },
            statusPost: {
              type: 'string',
              description: 'Post status',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              description: 'Post timestamp',
            },
           comments: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Post comments',
            },

          },
        },
        Comment: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Comment content',
              required: true,
            },
           
            postId: {
              type: 'string',
              description: 'Post ID',
              required: true,
            },
            // userId: {
            //   type: 'string',
            //   description: 'User ID',
            //   required: true,
            // },
            commentById: {
              type: 'string',
              description: 'Comment by ID',
              required: true,
            },
            parentCommentId: {
              type: 'string',
              description: 'Parent comment ID',
            },
            statusComment: {
              type: 'string',
              description: 'Comment status',
            },
          },
        },
        Tag: {
          type: 'object',
          properties: {
            // id: {
            //   type: 'string',
            //   description: 'Tag ID',
            // },
            title: {
              type: 'string',
              description: 'Tag name',
              required: true,
            },
            description: {
              // type: 'array',
              type: 'string',
              description: 'Tag posts',
            },
          },
        },


        Category: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Category name',
              required: true,
            },
            image: {
              type: 'string',
              description: 'Category image',
            },
            description: {
              type: 'string',
              description: 'Category description',
            },
          },
        },

        Blog: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Blogging title',
              required: true,
            },
            description: {
              type: 'string',
              description: 'Blogging description',
            },
            categories: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Blogging categories',
            },

            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Blogging tags',
            },
            image: {
              type: 'string',
              description: 'Blogging image',
            },
            user: {
              type: 'string',
              description: 'User ID',
            },
          },
        },
      },
    },
  },
  apis: ['./src/Routes/*.ts'],
};




  