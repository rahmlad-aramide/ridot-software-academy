'use client';

import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const naijaStates = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT - Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
];

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Data:', {
      firstName,
      lastName,
      phone,
      email,
      location,
    });

    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setCourse('');
    setLocation('');
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-60 xs:p-10 fixed inset-0 z-50 flex items-center justify-center p-5 backdrop-blur-sm md:p-0">
      <div className="relative w-full rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(2,1,129,0.63)] backdrop-blur-[25px] md:max-w-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-gray-500"
        >
          &times;
        </button>
        <h1 className="text-xl font-bold">Enroll</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <label htmlFor="firstname" className="block">
              <span className="text-base font-medium">First Name</span>
              <input
                id="firstName"
                type="text"
                value={firstName}
                placeholder="Enter First name"
                className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </label>

            <label htmlFor="lastname" className="block">
              <span className="text-base font-medium">Last Name</span>
              <input
                id="lastName"
                type="text"
                value={lastName}
                placeholder="Enter Last name"
                className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <label htmlFor="Phone Number" className="block">
              <span className="text-base font-medium">Phone Number</span>
              <PhoneInput
                country={'ng'}
                value={phone}
                onChange={setPhone}
                inputClass="!w-full !rounded-lg !border focus:outline-none focus:ring-2 focus:ring-blue-500 !border-gray-300 !pl-13  !p-3 !text-sm"
                inputStyle={{ width: '100%' }}
                containerClass="mt-2"
                enableSearch={false}
              />
            </label>

            <label htmlFor="email" className="block">
              <span className="text-base font-medium">Email</span>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter email"
                className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="course" className="block">
                <span className="text-base font-medium">Course</span>
                <select
                  id="course"
                  value={course}
                  className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  <option value="">Select a course</option>
                  <option>Backend Development</option>
                  <option>Frontend Development</option>
                  <option>Data Science</option>
                  <option>Data Analysis</option>
                  <option>Digital Marketing</option>
                  <option>Product Design</option>
                </select>
              </label>
            </div>

            <label htmlFor="location" className="block">
              <span className="text-base font-medium">Location</span>
              <select
                id="location"
                value={location}
                className="mt-2 block w-full rounded-lg border border-[rgb(232,232,234)] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="">Lagos</option>
                {naijaStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary mt-5 w-full cursor-pointer rounded-md py-2 text-sm text-white hover:bg-blue-800"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}
