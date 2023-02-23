import {Router} from 'express';
import {CreateUserController} from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import {CreateCategoryController} from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListaCategoryController';

const router = Router();

// Rotas user
router.post('/users',new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// Rotas category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category',isAuthenticated, new ListCategoryController().handle )

// Rotas product
export {router};