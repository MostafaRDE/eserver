import express from 'express'

import Controller from '../Controller'

export default class LoginController extends Controller
{
    public login(request: express.Request, response: express.Response)
    {
        response.json({ status: true })
    }
}
