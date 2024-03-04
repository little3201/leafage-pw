export const pageview = (url) => {
    window.dataLayer.push({
        event: 'pageview',
        page: url,
    })
}