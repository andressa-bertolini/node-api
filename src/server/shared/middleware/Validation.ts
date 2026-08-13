import { RequestHandler } from 'express';
import { Schema, ValidationError, validateSync } from 'yup';
import { StatusCodes } from 'http-status-codes';

type TProperty = 'body' | 'header' | 'params' | 'query';
type TAllSchemas = Record<TProperty, Schema<any>>;
type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation:TValidation = (field, schema) => {
    return async (req, res, next) => {

        const errorsResult: Record<TProperty, Record<string, string>> = {};

        Object.entries(schemas).forEach(([key, schema]) => {
            try {
                schema.validateSync(req[key as TProperty], {abortEarly: false});
            } catch (err) {
                const yupError = err as ValidationError;
                const errors: Record<string, string> = {};
            
                yupError.inner.forEach(error => {
                    if (!error.path) return;
                    errors[error.path] = error.message;
                });
            
                // return res.status(StatusCodes.BAD_REQUEST).json({
                //     errors: {
                //         errors
                //     }
                // });
            }
        });

    }
}