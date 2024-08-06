const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const spiceValidation = require('../../validations/spice.validation');
const spiceController = require('../../controllers/spice.controller');

const router = express.Router();

router
  .route('/')
  //   .post(auth('manageSpices'), validate(spiceValidation.createSpice), spiceController.createSpice)
  //   .get(auth('getSpices'), validate(spiceValidation.getSpices), spiceController.getSpices);
  .post(validate(spiceValidation.createSpice), spiceController.createSpice)
  .get(validate(spiceValidation.getSpices), spiceController.getSpices);


router  
  .route('/brands')
  .get(validate(spiceValidation.getBrands), spiceController.getBrands);

router
  .route('/:spiceId')
  .get(validate(spiceValidation.getSpice), spiceController.getSpice)
//   .patch(auth('manageSpices'), validate(spiceValidation.updateSpice), spiceController.updateSpice)
//   .delete(auth('manageSpices'), validate(spiceValidation.deleteSpice), spiceController.deleteSpice);
  .patch(validate(spiceValidation.updateSpice), spiceController.updateSpice)
  .delete(validate(spiceValidation.deleteSpice), spiceController.deleteSpice);
  
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /spices:
 *   post:
 *     summary: Create new spice
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brand
 *               - form
 *             properties:
 *               name:
 *                 type: string
 *                 description: Must be unique
 *               brand:
 *                 type: string
 *               form:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Spice'
 *       "400":
 *         $ref: '#/components/responses/DuplicateSpice'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all spices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Spice name
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of spices
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Spice'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /spices/{id}:
 *   get:
 *     summary: Get a spice
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Spice id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Spice'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a spice
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Must be unique
 *               brand:
 *                 type: string
 *               form:
 *                 type: string
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Spice'
 *       "400":
 *         $ref: '#/components/responses/DuplicateSpice'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a spice
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Spice id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
