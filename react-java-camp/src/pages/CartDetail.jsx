import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Table } from 'semantic-ui-react'
import { removeFromCart } from '../store/actions/cartActions';

export default function CartDetail() {
  const { cartItems } = useSelector((state) => state.cart); // Global state'e abone olduk
  const dispatch=useDispatch() // dispatch'i kullanıyoruz. Yani fonksiyon çağıracağız.

  const handleRemoveFromCart=(product)=>{ // İlgili fonksiyon için başka fonksiyon yazdık. Başka logic eklersek daha rahat yönetebiliriz.
    dispatch(removeFromCart(product));// Asıl fonksiyon 
    toast.warning(`${product.productName} sepetten silindi!`) // Eklediğimiz örnek logic
  }


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cartItems.map((cartItem) => (
            <Table.Row key={cartItem.product.id}>
              <Table.Cell>{cartItem.product.id}</Table.Cell>
              <Table.Cell>{cartItem.product.productName}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleRemoveFromCart(cartItem.product)}>Sepetten sil</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </div>
  )
}
