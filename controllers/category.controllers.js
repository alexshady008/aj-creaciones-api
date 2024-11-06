import Category from '../db/models/category.model.js';
import Boom from '@hapi/boom';

export const GetAllCategory = async (req, res, next) => {
	try {
		const categories = await Category.find();
		if (categories.length > 0) res.status(200).json({ Categories: categories });
		else next(Boom.notFound('Categories not Found!'));
	} catch (error) {
		next(Boom.notFound('Categories not Found!'));
	}
};

export const GetCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const category = await Category.findById(id);
		if (category) res.status(200).json(category);
		else next(Boom.notFound('Category not Found!'));
	} catch (error) {
		next(Boom.notFound('Categories not Found!'));
	}
};

export const CreateCategory = async (req, res, next) => {
	const category = req.body;
	console.log('Category: ', category);
	const newCategory = new Category(category);
	try {
		await newCategory.save();
		res.status(201).json({ msg: 'Category Created!' });
	} catch (error) {
		next(Boom.notImplemented('Category not Created!'));
	}
};

export const UpdateCategory = async (req, res, next) => {
	const { id } = req.params;
	const update = req.body;
	try {
		const updated = await Category.findByIdAndUpdate(id, update);
		if (updated) res.status(200).json({ msg: 'Category Updated' });
		else next(Boom.notImplemented('Category not Updated!'));
	} catch (error) {
		next(Boom.notImplemented('Category not Updated!'));
	}
};

export const DeleteCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deleted = await Category.findByIdAndDelete(id);
		if (deleted) res.status(200).json({ msg: 'Category Deleted' });
		else next(Boom.notImplemented('Category not Deleted!'));
	} catch (error) {
		next(Boom.notImplemented('Category not Deleted!'));
	}
};
