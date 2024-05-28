import { Request, Response } from "express"
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id: number, email: string, role: string) => {
     return jwt.sign(
        {id, email, role},
         process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class UserController {
    async registration(req: Request, res: Response): Promise<any> {
        const {email, password, role} = req.body
        if(!email || !password) {
            return res.status(400).json({
                message: 'Некорректный email или пароль'
            })
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return res.status(409).json({
                message: 'Такой пользователь уже существует'
            })
        }

        const hashpassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password:  hashpassword,})
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }
    

    async login(req: Request, res: Response): Promise<any> {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        let comparepassword = bcrypt.compareSync(password, user.password)
        if (!comparepassword) {
            return res.status(401).json({
                message: 'Неверный пароль'
            })
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req: any, res: Response): Promise<any> {
        const token = generateJwt(req.user.id, req.user.email, req.user.role) 
        return res.json({token})

    }
}

module.exports = new UserController()