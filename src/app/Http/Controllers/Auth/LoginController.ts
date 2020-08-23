import { Request, Response } from 'express'

import Controller from '../Controller'

export default class LoginController extends Controller
{
    public login(request: Request, response: Response)
    {
        response.json({ status: true })
    }
}
