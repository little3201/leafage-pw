import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-60 h-60 mx-auto rounded-full overflow-hidden shadow-2xl dark:shadow-gray-500 transition-shadow duration-200">
        <Image
          src="/avatar-cartoon.jpg"
          alt="avatar"
          width={240}
          height={240}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="text-center mt-12">
        <h5 className="text-xl text-neutral-600 font-semibold">Hello, I&apos;m <span className='text-green-600'>WQ Li</span></h5>
        <h2 className="text-5xl font-bold my-3 text-green-600" >
          A developer
        </h2>
        <p className="max-w-2xl mb-8 text-lg text-neutral-500 break-words">I&apos;m a Java developer based in China, over {new Date().getFullYear() - 2015} years of
          professional experience with front-end like React、Vue, and learning the Rust language.</p>
      </div>
    </main>
  );
}
