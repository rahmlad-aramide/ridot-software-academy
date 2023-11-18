import ridotLogo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='w-[90%] max-w-[1200px] flex flex-col md:flex-row justify-between items-center py-10 mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className=''>
            <img src={ridotLogo} alt="Logo white" className='bg-white p-2 rounded-lg max-w-[110px] md:max-w-[132px] mb-5 md:mb-0 mx-auto md:mr-[30px]' />
          </div>
          <div className='flex items-center max-w-[64ch] text-sm text-center md:text-justify font-poppins mb-5 md:mb-0'>
            At Ridot Software Academy, we are empowering future developers with cutting-edge training in software development. Explore our comprehensive programs, expert instructors, and hands-on learning to kickstart your career in the world of coding.
          </div>
        </div>
        <div className='mt-5 md:mt-0 ml-0 md:ml-8'>
          <div className="text-xl font-semibold mb-[10px] w-fit whitespace-nowrap">
            We&lsquo;re social
          </div>
          <div className="flex justify-center gap-5">
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                <path d="M7.13101 10.3885H6.63101V10.8885V19.5H3.26866V10.9364V10.4364H2.76866H1V7.68056H2.76866H3.26866V7.18056V4.22411C3.26866 2.92103 3.61072 2.0221 4.24453 1.43962C4.8868 0.849368 5.91891 0.5 7.47844 0.5H10V3.34835H8.13847C7.67376 3.34835 7.21565 3.44172 6.92303 3.82976C6.6641 4.17312 6.63101 4.63831 6.63101 5.06893V7.18056V7.68056H7.13101H9.95425L9.71687 10.3885H7.13101Z" stroke="#F8F8F8" />
              </svg>
            </Link>
            <a target='_blank' rel="noreferrer" href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M10.4997 7.27274C8.99588 7.27274 7.77246 8.49619 7.77246 10C7.77246 11.5038 8.99591 12.7273 10.4997 12.7273C12.0036 12.7273 13.227 11.5038 13.227 10C13.227 8.49619 12.0036 7.27274 10.4997 7.27274Z" fill="#F8F8F8" />
                <path d="M15.3805 5.11953L15.7341 4.76598L15.3805 5.11953C15.5835 5.32252 15.862 5.43746 16.1486 5.43746C16.4351 5.43746 16.7128 5.32258 16.9155 5.12022C17.1196 4.91695 17.2345 4.63811 17.2345 4.35152C17.2345 4.06508 17.1197 3.78706 16.9164 3.58409C16.7133 3.38052 16.4347 3.26559 16.1486 3.26559C15.8621 3.26559 15.5835 3.38039 15.3802 3.58422C15.1776 3.78697 15.0626 4.06489 15.0626 4.35152C15.0626 4.6381 15.1776 4.91654 15.3805 5.11953ZM4.22398 0.5H16.7761C18.5533 0.5 20 1.94669 20 3.72395V16.2761C20 18.0533 18.5533 19.5 16.7761 19.5H4.22398C2.44672 19.5 1 18.0533 1 16.2761V3.72395C1 1.9467 2.44672 0.5 4.22398 0.5ZM5.64844 10C5.64844 12.6756 7.82436 14.8516 10.5 14.8516C13.1756 14.8516 15.3516 12.6756 15.3516 10C15.3516 7.32441 13.1756 5.14844 10.5 5.14844C7.82436 5.14844 5.64844 7.32445 5.64844 10Z" stroke="#F8F8F8" />
              </svg>
            </a>
            <a target='_blank' rel="noreferrer" href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                <path d="M0.548666 0L8.27043 10.4796L0.5 19H2.24895L9.05211 11.5401L14.5487 19H20.5L12.3436 7.93106L19.5764 0H17.8274L11.5623 6.87022L6.5 0H0.548666ZM3.12057 1.30748H5.85459L17.9278 17.6925H15.1937L3.12057 1.30748Z" fill="white" />
              </svg>
            </a>
            <a target='_blank' rel="noreferrer" href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                <path d="M3.21673 18.2486H3.21632C2.53526 18.2491 1.97353 18.015 1.50133 17.5369C1.02821 17.0579 0.794923 16.4881 0.794923 15.7981L0.794923 3.91418L0.794923 3.91376C0.794336 3.22534 1.02952 2.64559 1.51258 2.1484C1.99461 1.65228 2.554 1.41473 3.21673 1.41473H18.8744C19.538 1.41473 20.0972 1.65235 20.5784 2.14818C21.0609 2.64544 21.2963 3.22543 21.2963 3.91418V15.7981C21.2963 16.4889 21.0629 17.0585 20.5901 17.5367C20.1178 18.0143 19.5558 18.2486 18.8744 18.2486H3.21673ZM8.03587 5.40412L7.92606 5.43832L7.84223 5.51706C7.67469 5.67443 7.6154 5.87815 7.6154 6.06135V13.6509C7.6154 13.8825 7.73927 14.0473 7.83719 14.1414C7.98856 14.2881 8.17208 14.3148 8.28721 14.3148C8.42988 14.3148 8.54351 14.2634 8.6255 14.2059L16.0762 10.4249L16.1401 10.3925L16.1923 10.3435C16.2942 10.2477 16.4191 10.0814 16.4191 9.84813C16.4191 9.64996 16.3428 9.46337 16.1951 9.32244L16.1418 9.27168L16.0762 9.2384L8.58262 5.43563L8.51851 5.4031L8.44783 5.38995L8.36192 5.37396L8.31657 5.36552H8.27045C8.17713 5.36552 8.09465 5.38582 8.03587 5.40412ZM8.6154 13.6509V13.6503V13.6509Z" stroke="#F8F8F8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='pb-4 text-center text-xs font-medium font-poppins mt-5 md:mt-0'>
        &copy; Copyright 2023 Ridot Software Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer