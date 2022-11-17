import { request, response } from "express";
import { Pool } from "promise-mysql";
import { getConnection } from  "../database/database";



const getUsers= async (request, response)=>{
    try{
        
        const connection = await getConnection();
        const [rows,fields] = await connection.query('SELECT id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia from usuarios');
        console.log(rows);
        response.json(rows);
    } catch (error){
        response.status(500);
        response.send(error.message);
    }
};

const getUser= async (request, response)=>{
    try{
        const {id} = request.params;
        const connection = await getConnection();
        const [rows] = await connection.query('SELECT id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia from usuarios where id_usuario = ?', id);
        console.log(rows);
        response.json(rows);
    } catch (error){
        response.status(500);
        response.send(error.message);
    }
};

const addUsers = async (request, response)=>{
    const {id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia} = request.body
    const connection = await getConnection();
    const [rows] = await connection.query('INSERT INTO usuarios (id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia) VALUES (?, ?)', id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia);
    console.log(rows);
    response.json(rows);

    // const {id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia} = request.body
    // const [rows] = await Pool.query('INSERT INTO usuarios (id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia) VALUES (?, ?)', [id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia])
    // response.send({rows})
}

const deleteUser= async (request, response)=>{
    try{
        const {id} = request.params;
        const connection = await getConnection();
        const [rows] = await connection.query('DELETE from usuarios where id_usuario = ?', id);
        console.log(rows);
        response.json(rows);
    } catch (error){
        response.status(500);
        response.send(error.message);
    }
};

const updateUser= async (request, response)=>{
    try{
        const {id} = request.params;
        const connection = await getConnection();
        const [rows] = await connection.query('UPDATE usuarios SET = ?', id);
        console.log(rows);
        response.json(rows);
    } catch (error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    getUsers,
    getUser,
    addUsers,
    deleteUser,
    updateUser
};