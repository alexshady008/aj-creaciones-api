import express from 'express';
import productRouter from './product.routes.js';
import userRouter from './user.routes.js';
import categoryRouter from './category.routes.js';
import sexoRouter from './sexo.routes.js';

const mainRouter = express.Router();

const MainRoutes = (app) => {
	app.use('/api', mainRouter);
	mainRouter.use('/product', productRouter);
	mainRouter.use('/user', userRouter);
	mainRouter.use('/category', categoryRouter);
	mainRouter.use('/sexo', sexoRouter);
};

export default MainRoutes;
