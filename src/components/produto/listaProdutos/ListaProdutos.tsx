import React from 'react'
import CardProduto from '../cardProduto/CardProduto'

function ListaProdutos() {
  return (
    <div className='grid grid-cols-4 gap-11 m-16'>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
    </div>
  )
}

export default ListaProdutos