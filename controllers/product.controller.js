import mongoose from 'mongoose';
import Product from '../db/models/product.model.js';
import Boom from '@hapi/boom';

export const GetAllProducts = async (req, res, next) => {
	try {
		//const products = await Product.find({ name: /^Ale/ }); //Devuelve todas las que tienen Ale
		//const products = await Product.find({ name: 'Ale' }); // Devuelve el que tiene solo ALe
		const { page, limit, category, sexo } = req.query;
		const pagination = page * limit;
		let products = [];
		if (category != '')
			products = await Product.find({ category }).skip(pagination).limit(limit);
		else if (sexo != '')
			products = await Product.find({ sexo }).skip(pagination).limit(limit);
		else products = await Product.find().skip(pagination).limit(limit); //Devuelve todos
		if (products.length > 0) res.status(200).json({ Products: products });
		else next(Boom.notFound('Products not Found!'));
	} catch (error) {
		next(Boom.notFound('Products not Found!'));
	}
};

export const GetProduct = async (req, res, next) => {
	const { id } = req.params;
	console.log('ID: ', id);
	try {
		const product = await Product.findById(id);
		if (product) res.status(200).json(product);
		else next(Boom.notFound('Product not Found!'));
	} catch (error) {
		next(Boom.notFound('Product not Found!'));
	}
};

export const CreateProduct = async (req, res, next) => {
	try {
		const product = req.body;
		//console.log(product);
		const productFiles = req.files;
		if (Array.isArray(productFiles) && productFiles.length > 0) {
			const productWithFiles = {
				...product,
				img: productFiles,
				price: Number(product.price),
				price2: Number(product.price2),
				stock: Number(product.stock),
			};
			console.log('Product: ', productWithFiles);
			const newProduct = new Product(productWithFiles);
			await newProduct.save();
			res.status(201).json({ status: 'OK', msg: 'Producto creado!' });
		}
	} catch (error) {
		console.error(error);
		next(Boom.notImplemented('Producto no creado!'));
	}
};

export const UpdateProduct = async (req, res, next) => {
	const { id } = req.params;
	const update = req.body;
	try {
		const updated = await Product.findByIdAndUpdate(id, { ...update });
		if (updated) {
			res.status(201).json({ msg: 'Product Updated!' });
		}
	} catch (error) {
		next(Boom.notImplemented('Product not Updated!'));
	}
};

export const DeletedProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deleted = await Product.findByIdAndDelete(id);
		console.log(deleted);
		if (deleted) {
			res.status(201).json({ msg: 'Product Deleted!' });
		}
	} catch (error) {
		next(Boom.notImplemented('Product not Deleted!'));
	}
};
