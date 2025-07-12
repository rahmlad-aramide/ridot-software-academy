'use client'
import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted Data:", name, email, message )
        setName("");
        setEmail("");
        setMessage("");
    };

  return (
   <div className="relative flex-1 w-full md:max-w-xl">
    <div className="absolute w-[65%] h-[65%] bg-[#020181A1] blur-[50px] rounded-[10px] z-0"/>
    <div className="relative z-10 bg-white w-full rounded-[20px] shadow-2xl p-6">
      <h1 className="text-xl font-bold">Send us a message</h1>

      <form onSubmit={handleSubmit}
      className="mt-4 space-y-6">
        <label htmlFor='name' className="block">
          <span className="text-base font-medium">Fullname</span>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Enter Full Name"
            className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=> {
                setName(e.target.value)
            }}
          />
        </label>

        <label htmlFor='email' className="block">
          <span className="text-base font-medium">Email</span>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter email address"
            className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=> {
                setEmail(e.target.value)
            }}
          />
        </label>

        <label htmlFor='message' className="block">
          <span className="text-base font-medium">Message</span>
          <textarea
          id='message'
            value={message}
            placeholder="Write your details"
            className="mt-2 w-full h-[96px] rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=> {
                setMessage(e.target.value)
            }}
          >
            </textarea>
        </label>

        <button type='submit' className="w-full bg-[rgb(1,0,128)] text-sm text-white py-2 rounded-md mt-5 cursor-pointer">Send Message</button>
      </form>
    </div>
  </div>

)
}

