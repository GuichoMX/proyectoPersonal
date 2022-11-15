import { request, response } from "express";
import { getConnection } from  "../database/database";

const getUsers= async (request, response)=>{
    const connection = await getConnection();
    const [rows,fields] = await connection.query('SELECT id_usuario,nombres,apellidoP,apellidoM from usuarios');
    console.log(rows);
    response.json(rows);
};

const postUsuarios = async (request, response)=>{
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO usuarios (id_usuario, )')
}

export const methods = {
    getUsers
};