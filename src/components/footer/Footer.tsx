import React from 'react';
import { PiLinktreeLogoBold } from 'react-icons/pi';

function Footer() {
  return (
    <div className="flex mt-32 p-8 justify-center bg-[#407C44] text-white">
      <div className="container gap-4 flex flex-col items-center py-4">
        <p className="text-xl font-bold">Projeto Eco Aid | Copyright:</p>
        <p className="text-xl font-bold">Generation Brasil</p>
        <p className="text-lg">Acesse nosso Linktree</p>
        <div className="flex gap-2 font-bold">
          <PiLinktreeLogoBold size={48} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
