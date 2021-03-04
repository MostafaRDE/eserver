import Notifiable from './Notifiable'
import Broadcaster from '../../../illuminate/Broadcasting/Broadcaster'

export interface INotificationRoute
{
    name: string
    broadcaster?: Broadcaster
    data?: Record<string, any>[]
}

export default class Notification implements Notifiable
{
    protected routes: INotificationRoute[] = []

    public route(name: string, ...data: Record<string, any>[])
    {
        const index = this.routes.findIndex(route => route.name = name)

        if (typeof index !== 'undefined')
        {
            if (!this.routes[ index ].data)
                this.routes[ index ].data = []

            if (Array.isArray(data))
            {
                for (let i = 0; i < data.length; i++)
                    this.routes[ index ].data.push(data[ i ])
            }
            else this.routes[ index ].data.push(data)
        }

        return this
    }

    public async notify()
    {
        const result = []

        for (let i = 0; i < this.routes.length; i++)
        {
            for(let j = 0; j < this.routes[ i ].data.length; j++)
            {
                try
                {
                    await this.routes[ i ].broadcaster.broadcast(this.routes[ i ].data[ j ])

                    result.push({ status: true, name: this.routes[ i ].name })
                }
                catch (error)
                {
                    result.push({ status: false, name: this.routes[ i ].name, error })
                }
            }
        }

        return result
    }
}