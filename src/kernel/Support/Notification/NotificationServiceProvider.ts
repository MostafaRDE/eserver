import ServiceProvider from '../../illuminate/ServiceProvider/ServiceProvider'
import Notification from './core/Notification'

export class NotificationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public register()
    {
        // Store Notification-class as globally with create new instance with every calls
        Object.defineProperty(global, 'AppNotification', {
            get: () => new Notification(),
        })
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public boot()
    {
        //
    }
}