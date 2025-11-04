import React, { useState } from 'react';

const SimpleForm = () => {

    const [password, setPssword] = useState('secrst');
    const [error, setError] = useState('')

    const handaleFormAction = (e) => {
       e.preventDefault();
       console.log('submitrd');  
    }

    const handleSubmited = (e) => {
        console.log(e.target.value);
        setPssword(e.target.value);
        if(password.length < 6){
            setError('password is uses minimam 6 character')
        }
    }


const [products, setProducts] = useState([])

const handleAddProducts = newProduct => {
    const newProducts = [...products, newProduct]
    setProducts(newProducts);
}



    return (
        <div>
            <div className='mt-6'>
                <form onSubmit={handleSubmited}>
                    <input className='py-2 border px-2' name='name' type="text" placeholder='Enter your name' />
                    <br />
                    <br />
                    <input className='py-2 border px-2' type="text"  name='email' placeholder='enter your email'/>
                    <br />
                    <br />
                    <input className='btn' type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;