const Safety = () => {
    return (
        <div className='w-[95%] mx-auto bg-[#EDF0FB] my-8 text-center rounded-[15px] p-16'>
            <h2 className='text-black font-semibold text-6xl'>Artificial Intelligence and Privacy</h2>
            <p className='pt-4'>We take security seriously. Every byte of a child's data is safeguarded within our closed system. <br />Miko sets a new standard for family-friendly AI.</p>
            <div className='grid grid-cols-3 gap-4 my-12'>
                <div className='flex flex-col items-center justify-center'>
                    <img src="https://miko.ai/cdn/shop/files/MiniPDP_Features_Parents.svg?v=1727687496&width=150" alt='' />
                    <h3 className='pt-2 font-semibold text-lg'>Useful For Parents</h3>
                    <p className='pt-2'>From secure calls to real-time progress reports</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src="https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Tools.svg?v=1727687496&width=150" alt='' />
                    <h3 className='pt-2 font-semibold text-lg'>Better Parenting Tools
                    </h3>
                    <p className='pt-2'>The Parent App that provides clear learning plans and identifies milestones
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src="https://miko.ai/cdn/shop/files/Mini_PDP_Privacy_Icon_Secure.svg?v=1727687496&width=150" alt='' />
                    <h3 className='pt-2 font-semibold text-lg'>Safe, Secure & Private
                    </h3>
                    <p className='pt-2'>kidSAFE+ COPPA certified device with customizable security and privacy settings                    </p>
                </div>
            </div>
        </div>
    )
}

export default Safety