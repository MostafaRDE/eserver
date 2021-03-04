module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Broadcast Connections
    |--------------------------------------------------------------------------
    |
    | Here you may define all of the broadcast connections that will be used
    | to broadcast events to other systems or over websockets. Samples of
    | each available type of connection are provided inside this array.
    |
    */

    connections: {

        smsParsGreen: {
            apiKey: global.env('SMS_PARS_GREEN_API'),
            from: '5000268038',
        },

    },

}