export default function Contact() {
  async function submit() {

    // mutate data
    // revalidate cache
  }

  return (
    <section className="p-24">
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact Leafage
          </h2>
          <p className="max-w-lg mt-5">
            Have something to say? We are here to help. Fill up the
            form or send email or call phone.
          </p>

          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
              <span>1734 Sanfransico, CA 93063</span>
            </div>
          </div>
        </div>
        <div>
          <form className="my-10" action={submit}>
            <div className="mb-5">
              <input type="text" placeholder="Full Name" autoComplete="false" className="w-full px-3 py-2 rounded-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">Email Address</label>
              <input id="email_address" type="email" placeholder="Email Address" name="email" autoComplete="false" className="w-full px-3 py-2 rounded-md" />
            </div>
            <div className="mb-3">
              <textarea name="message" placeholder="Your Message" className="w-full px-3 py-2 rounded-md" />
            </div>
            <button type="submit" className="w-full py-3 font-semibold rounded-md text-white transition-colors bg-lime-600 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}