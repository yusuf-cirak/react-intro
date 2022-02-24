import * as actionTypes from './actionTypes'

export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER, // aksiyon tipini doğrulamak için actionTypes'dan alıyoruz
    payload:1 // 1 artacak
})

// increaseCounter diye değişkenimiz var, o değişken bir fonksiyondur.
// değişken bir fonksiyon döndürdüğü için parantez içinde yazıyoruz. (fonksiyonun değeri de bir fonksiyon ve parametresi obje)
// fonksiyon da bir obje döndüreceği için obje içinde yazıyoruz.

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1 // 1 azalacak
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2 // 2 artacak
})

// Bunlar bizim componentlerimizde kullanacağımız aksiyonlar