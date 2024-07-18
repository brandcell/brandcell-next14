import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='py-14 px-6 bg-bc-darkblue'>
            <div className='flex justify-between flex-wrap'>
                <Image src={"/brandcell-white.svg"} width={155} height={40} alt='brandcell-white' />

                <div id='socials-bar' className='flex gap-5'>
                    <Image alt='linkedin-logo' src={'/soc1.svg'} width={38} height={38}></Image>
                    <Image alt='x-logo' src={'/soc2.svg'} width={38} height={38}></Image>

                    <Image alt='fb-logo' src={'/soc3.svg'} width={38} height={38}></Image>
                    <Image alt='ig-logo' src={'/soc4.svg'} width={38} height={38}></Image>


                </div>



            </div>




        </div>
    )
}

export default Footer