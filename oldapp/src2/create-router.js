import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import routes from './routes2'

export default function configureRouter() {
    const router = createRouter(routes, {
        defaultRoute: 'contacts',
        strictTrailingSlash: true
    })
        // Plugins
        .usePlugin(
            browserPlugin({
                useHash: false
            })
        )

    return router
}
