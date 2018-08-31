import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import routes from './routes'

export default function configureRouter() {
    console.log('woooo testing here', routes)
    const router = createRouter(routes, {
        allowNotFound: false,
        autoCleanUp: true,
        defaultRoute: 'contacts',
        defaultParams: {},
        queryParamsMode: 'default',
        trailingSlashMode: 'default',
        strictTrailingSlash: false,
        caseSensitive: false
    })
        // Plugins
        .usePlugin(
            browserPlugin({
                useHash: false
            })
        )
    console.log('hello my friend', router)
    return router
}