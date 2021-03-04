export default abstract class Broadcaster
{
    public name = ''

    public get config()
    {
        return global.config[ 'broadcasting' ][ 'connections' ][ this.name ] || {}
    }

    abstract boot()

    abstract broadcast(data: any): Promise<any>
}