import Container from './container'

const Footer = () => {
  return (
    <footer className="relative bg-neutral-50">
      <div className="text-xs font-light bg-black text-white text-opacity-70">
        <Container>
          <div className='h-14 flex items-center justify-between'>
            <span className="">
              Copyright &copy; {new Date().getFullYear()} Leafage - License By MIT.
            </span>
            <a
              href="https://beian.miit.gov.cn"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline hover:text-green-600"
            > 陕ICP备19017836号-2</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer
