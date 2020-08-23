export default interface IRoute
{
    method: string,
    path: string,
    middleware?: ((...args) => void)[],
    controller: ((req, res) => void),
}
