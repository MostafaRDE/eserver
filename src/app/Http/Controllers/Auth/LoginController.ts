import * as ControllerImporter from '../Controller'
import express from 'express'

export namespace App.Router.Controllers
{
    import Controller = ControllerImporter.App.Router.Controllers.Controller

    export class LoginController extends Controller
    {
        login(req: express.Request, res: express.Response)
        {
            //
        }
    }
}
