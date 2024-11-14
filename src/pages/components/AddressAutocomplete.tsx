import React, { useState, useEffect } from 'react';

export interface Address{
  zipCode: string;
  addressLine: string;
  uf: string;
  location: string;
}

interface AddressAutocompleteProps{
  onChange: (address: Address) => void;
}

function AddressAutocomplete({onChange}: AddressAutocompleteProps){
    const [ cep, setCep ] = useState<string>('');
    const [ address, setAddress] = useState('');

    useEffect(() => {
      if(cep){
        let cepFiltered = (cep.match(/\d+/g) || []).join('');
        if(cepFiltered && cepFiltered.length === 8){
          fetch(`https://viacep.com.br/ws/${cepFiltered}/json`)
          .then(response => response.json())
          .then(data => {
            if(data.erro){
              console.error('CEP inválido');
            } else {
              let addressVector = [];
              if(data.logradouro){
                addressVector.push(data.logradouro)
              }
              if(data.bairro){
                addressVector.push(data.bairro)
              }
              if(data.localidade){
                addressVector.push(data.localidade)
              }
              if(data.uf){
                addressVector.push(data.uf)
              }
              const addressLine = addressVector.join(', ');
              setAddress(addressLine);
              onChange({
                zipCode: data.cep,
                addressLine,
                uf: data.uf,
                location: data.localidade,
              })
            }
          })
          .catch(error => console.error('Erro ao buscar o endereço:', error));
        } else {
            setAddress('');
        }
      }else{
        onChange({} as Address)
      }
    }, [cep]);


    return(
        <>
          <div className='mb-2'>
            <input className='form-control' type="text" placeholder="Digite o CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
          </div>
            {
              address && 
              <div>
                <input className='form-control' type="text" placeholder='Endereço' value={address} />
              </div>
            }
        </>
    )
}

export default AddressAutocomplete;