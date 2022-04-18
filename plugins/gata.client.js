const onLoad = (callback, delay = 1) => {
    // missed the load event, run now
    if (document.readyState === 'complete') {
      setTimeout(() => callback(), delay)
    } else {
      window.addEventListener('load', function () {
        setTimeout(() => callback(), delay)
      })
    }
  }
  
  export default function () {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'GTM-PCWTSKQ')
  
    onLoad(() => {
      // manually add the script to the DOM
      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-PCWTSKQ'
      script.async = true
      document.head.appendChild(script)
    })
  }