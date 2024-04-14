export default function Footer() {
    return (
        <footer className="container mx-auto p-5">
            <div className=" text-neutral-700 dark:text-neutral-300 text-opacity-70">
                <div className='flex items-center justify-between text-sm'>
                    <span>
                        Copyright &copy; {new Date().getFullYear()} Leafage - License By 
                        <a href="https://github.com/little3201/leafage-pw/blob/main/LICENSE"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hover:text-green-600"> MIT</a>.
                    </span>
                    <a
                        href="https://beian.miit.gov.cn"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hover:text-green-600"
                    > 陕ICP备19017836号-2</a>
                </div>
            </div>
        </footer>
    )
}