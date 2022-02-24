import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function YcTextInput({...props}) {

    const [field,meta]=useField(props) // React Hook
    // field: name, placeholder vb. özellikleri döndürüyor.
    // meta: isTouched, error vb. özellikleri döndürüyor.

  return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}/>
        {meta.touched && !!meta.error ?
        (<Label pointing basic color="red" content={meta.error}></Label>):null}
        
    </FormField>
  )
}

// meta.error normalde string dönüyor. biz bu stringin varlığını kontrol etmek için javascriptte
// !!meta.error şeklinde kullanıyoruz ve bize bool değer dönüyor.
