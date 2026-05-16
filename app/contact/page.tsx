"use client";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-md text-left">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
          How can I help?
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Fill in the form and I&apos;ll get back to you.
        </p>
        <form
          action="https://formspree.io/f/mykvgeqj"
          method="POST"
          className="mt-8 flex flex-col gap-5"
        >
          <div>
            <label className="mb-1 block text-sm text-neutral-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-600">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-600">
              Phone or WhatsApp{" "}
              <span className="text-neutral-400">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>
          <button
            type="submit"
            className="mt-2 border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Send it →
          </button>
        </form>
      </div>
    </main>
  );
}