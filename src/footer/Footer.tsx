import React from 'react';
import { PiLinktreeLogoBold } from 'react-icons/pi';

function Footer() {
  return (
    <div className="flex justify-center bg-green-500 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Projeto Eco Aid | Copyright:</p>
        <p className="text-xl font-bold">Generation Brasil</p>
        <p className="text-lg">Acesse nosso Linktree</p>
        <div className="flex gap-2">
          <PiLinktreeLogoBold size={48} weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
