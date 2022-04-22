export default defineEventHandler(async (event) => {
    const cookies = useCookies(event)
    return { cookies }
})