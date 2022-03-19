import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    return (
        <div className="flex bg-green-400 font-merri font-black rounded-b-3xl justify-center h-16 items-center">
            <div className="flex text-white text-2xl ml-6">
                <h1>Bookstore</h1>
                <ul className="grid grid-cols-5 text-black text-sm justify-end text-center leading-7 list-none">
                    <li>Home</li>
                    <input type="search" class="form-control relative flex-auto block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <button className='bg-green-500 w-16 pointer-cursor' type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className='w-4 m-4' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                    <img width="30" height="30" className='ml-4 mt-2 pointer:cursor' src='assets/cart.png'></img>
                    <button className="border border-black hover:border-gray-500 px-2 rounded-full font-black">
                        Log in / Sign up
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;