import express from 'express'
import { createUser , getALLUsers, deleteUser} from './controllers/userControler.js'

const router = express.Router()

router.post('/cadastro', createUser )
router.get('/todos', getALLUsers )
router.delete('/deletar/:id', deleteUser )


export default router