import { Request, Response, RequestHandler } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

type ICidade = yup.InferType<typeof bodyValidation>;


export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    }),
    query: yup.object().shape({
        filter: yup.string().required().min(3),
    })
});

export const create = async (req, res) => {
    console.log(req.body);
    return res.send('Create!');
};