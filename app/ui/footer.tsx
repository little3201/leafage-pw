export default function Footer() {
  return (
    <footer className="container mx-auto p-4">
      <div className=" text-neutral-700 dark:text-neutral-300 text-opacity-70">
        <div className='flex items-center justify-center text-sm'>
          <span>
            Copyright &copy; {new Date().getFullYear()} Leafage - License By
            <a href="https://github.com/little3201/leafage-pw/blob/main/LICENSE"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-lime-600"> MIT</a>.
          </span>
        </div>
      </div>
    </footer>
  )
}