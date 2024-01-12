import { useState } from "react";
import { iconArrow, iconError } from "../assets";

function Form() {

    const [form, setForm] = useState({
        email: ""
    });

    const [ errors, setErrors ] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate(form);

        setErrors(errors)
    }

    const validate = (form) => {
        let errors = {};

        if(!form.email)errors.email = "Please provide a valid Email"

        return errors;
    }

    return(

        <form onSubmit={handleSubmit}>

            <div className="relative max-w-[100%] w-[600px] mx-auto lg:ml-0">

                <div className="relative">

                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className={`border border-desaturatedRed w-full py-5 pl-10 rounded-[40px] placeholder:text-desaturatedRed block focus:outline-none ${errors.email && 'border-2 border-softRed'}`} 
                        name="email"
                        onChange={handleChange}
                    />
                    {errors.email && <img src={iconError} alt="Error" className="absolute bottom-[50px] right-[120px] w-[35px]" />}
                    {errors.email && <p className="text-softRed font-semiBold ml-10 mt-3">{errors.email}</p>}

                </div>

                <button type="submit" className="absolute top-[-2px] right-[-1px] bg-desaturatedRed rounded-full w-[90px] h-[70px] flex items-center justify-center"><img src={iconArrow} alt="Icon Arrow" className="w-[15px]"/></button>

            </div>

        </form>

    )
}

export default Form;