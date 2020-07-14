import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  { User } from "../entity/user";

export const getUsers = async (req: Request, res: Response) : Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
};

export const getUser = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(User).findOne(req.params.id);
    return res.json(resultado);
};

export const createUser = async (req: Request, res: Response) : Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const resultado = await getRepository(User).save(newUser);
    return res.json(resultado);
};

export const updateUser = async (req: Request, res: Response) : Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const resultado = await getRepository(User).save(user);
        return res.json(resultado);
    } 
    return res.status(404).json({"msg":"Usuario no encontrado"});   
};

export const deleteUser = async (req: Request, res: Response) : Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        const resultado = await getRepository(User).delete(req.params.id);
        return res.json(resultado);
    } 
    return res.status(404).json({"msg":"Usuario no encontrado"});   
};

export const insertUser = async (req: Request, res: Response) : Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (!user) {
        const newUser = getRepository(User).create(req.body);
        const resultado = await getRepository(User).insert(newUser);
        return res.json(resultado);
    }
    return res.status(406).json ({"msg":"Usuario duplicado"})
}    

export const deleteUser2 = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(User).delete(req.params.id);
    return res.json(resultado);
};

export const updateUser2 = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(User).update(req.params.id, req.body);
    return res.json(resultado);   
};








