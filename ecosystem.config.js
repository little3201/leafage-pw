module.exports = {
    apps: [
        {
            name: 'leafage',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.js'
        }
    ]
}