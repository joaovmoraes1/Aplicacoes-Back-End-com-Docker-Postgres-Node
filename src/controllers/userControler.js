import User from '../models/User.js'
import crypto from 'node:crypto'

export const createUser = async (req, res) => {

    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }




        const user = await User.create(userToCreate)
        res.status(201).json(user)
    } catch (err) {
      res.status(500).json(err)

    }
}

export const getALLUsers = async (req, res) => {

    const users = await User.findAll()
    res.status(200).json(users)
}
export const deleteUser = async (req, res) => {
    const users = await User.destroy({
        where: { id: req.params.id}
    })
    res.status(200).json({ message: 'Deu bom' })
}