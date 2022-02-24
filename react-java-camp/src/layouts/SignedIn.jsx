import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) { // Navi'de SignedIn için verilen propları sadece props geçerek de alabilirsin.
  // Ama props da bir obje olduğu için direkt obje geçip ilgili prop'ın ismini geçersen daha kullanışlı olur.
  return (
        <Menu.Item>
            <Image avatar spaced="right" src="https://react.semantic-ui.com/logo.png"/>
            <Dropdown pointing="top right" text="Yusuf">
              <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
  )
}
