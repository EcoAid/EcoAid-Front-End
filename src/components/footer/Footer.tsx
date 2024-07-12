import React from 'react';
import { PiLinktreeLogoBold } from 'react-icons/pi';

function Footer() {
  return (
    <div className="relative flex p-8 justify-center bg-[#407C44] text-white">
      <div className="container gap-4 flex flex-col items-center py-4">
        <p className="text-xl font-bold">Projeto Eco Aid | Copyright:</p>
        <p className="text-xl font-bold">Generation Brasil</p>
        <p className="text-lg">Acesse nosso Linktree</p>
        <a className="text-lg hover:text-isabelline transition ease-in-out delay-150" href="https://linktr.ee/grupoecoaid">
                        <div className="flex items-center justify-center  ">
                            <PiLinktreeLogoBold size={72} />
                        </div>
                    </a>

      </div>
    </div>
  );
}

export default Footer;
