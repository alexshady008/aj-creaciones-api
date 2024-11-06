import Sexo from '../db/models/sexo.model.js';
import Boom from '@hapi/boom';

export const GetAllSexo = async (req, res, next) => {
	try {
		const allSexo = await Sexo.find();
		if (allSexo.length > 0) res.status(200).json({ Sexo: allSexo });
		else next(Boom.notFound('Sexo not Found!'));
	} catch (error) {
		next(Boom.notFound('Sexo not Found!'));
	}
};

export const GetSexo = async (req, res, next) => {
	const { id } = req.params;
	try {
		const sexo = await Sexo.findById(id);
		if (sexo) res.status(200).json(sexo);
		else next(Boom.notFound('sexo not Found!'));
	} catch (error) {
		next(Boom.notFound('Sexo not Found!'));
	}
};

export const CreateSexo = async (req, res, next) => {
	const sexo = req.body;
	const newsexo = new Sexo(sexo);
	try {
		await newsexo.save();
		res.status(201).json({ msg: 'sexo Created!' });
	} catch (error) {
		next(Boom.notImplemented('sexo not Created!'));
	}
};

export const UpdateSexo = async (req, res, next) => {
	const { id } = req.params;
	const update = req.body;
	try {
		const updated = await Sexo.findByIdAndUpdate(id, update);
		if (updated) res.status(200).json({ msg: 'sexo Updated' });
		else next(Boom.notImplemented('sexo not Updated!'));
	} catch (error) {
		next(Boom.notImplemented('sexo not Updated!'));
	}
};

export const DeleteSexo = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deleted = await Sexo.findByIdAndDelete(id);
		if (deleted) res.status(200).json({ msg: 'sexo Deleted' });
		else next(Boom.notImplemented('sexo not Deleted!'));
	} catch (error) {
		next(Boom.notImplemented('sexo not Deleted!'));
	}
};
