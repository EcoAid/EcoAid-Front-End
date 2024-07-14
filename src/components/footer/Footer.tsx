import { PiLinktreeLogoBold } from 'react-icons/pi';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="relative flex p-8 mt-16 justify-center bg-[#407C44] text-white">
      <div className="container gap-4 flex flex-col items-center py-4">
        <Link to='/home'><img className='object-cover h-12 w-max bg-isabelline rounded-md hover:opacity-50 transition ease-in-out delay-50' src="https://i.imgur.com/FteiExS.png" alt='logo id' /> </Link>
        <p className="justify-center items-center text-lg">
          Copyright: 
          <a href="https://brazil.generation.org/" target="_blank" className=" hover:opacity-50 transition ease-in-out delay-50 text-lg font-bold"> Generation Brasil</a>
        </p>

        <p className="text-lg">Acesse nosso Linktree</p>
        <a className="text-lg hover:opacity-50 transition ease-in-out delay-50" href="https://linktr.ee/grupoecoaid" target="_blank">
          <div className="flex items-center justify-center  ">
            <PiLinktreeLogoBold size={72} />
          </div>
        </a>

      </div>
    </div>
  );
}

export default Footer;
