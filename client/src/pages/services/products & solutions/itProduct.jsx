import React from 'react'

const ItProduct = () => {
  return (
    <>
     <div className="flex flex-col text-black bg-white font-poppins">
      <img
        loading="lazy"
        srcSet="/it_product/image.png"
        alt='Techsol Solutions'
        className="w-full aspect-[2.5] max-md:max-w-full"
      />
      <div className="justify-center text-center px-16 py-10 w-full text-6xl font-semibold text-white bg-red-900 leading-[76.16px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        IT PRODUCT & SOLUTIONS
      </div>
      <div className="flex z-10 flex-col items-start px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="text-3xl font-semibold leading-9 max-md:max-w-full">
          Infrastructure Solutions
        </div>
        <img
          loading="lazy"
          srcSet="/it_product/image2.png"
          alt='Techsol Solutions'
          className="self-center mt-6 w-full aspect-[3.7] max-w-[1700px] max-md:max-w-full"
        />
        <div className="mt-12 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
          Being a partner of Dell EMC, VMWare, Sangfor, H3C, and Lenovo, gives
          us an edge in providing the capability and the best combination to
          provide optimal converged & hyper converged Infrastructure Solutions.
          With servers / storage solutions, Backup solutions & Racks & Micro
          data centers, we cover all your IT infrastructure needs like,
          <br />
          Server/Storage & Solutions
          <br />
          Backup Solutions
          <br />
          Rack & Micro Data Center Solutions
        </div>
      </div>
      <div className="flex flex-col items-start px-20 py-16 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="text-3xl font-semibold leading-9 max-md:max-w-full">
          Backup Solutions
        </div>
        <img
          loading="lazy"
          srcSet="/it_product/image3.png"
          alt='Techsol Solutions'
          className="self-center mt-5 w-full aspect-[3.7] max-w-[1700px] max-md:max-w-full"
        />
        <div className="mt-12 mb-2 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
          Techsol Solutions safeguards your business data with a comprehensive
          suite of backup solutions. We offer industry-leading technologies from
          brands like Dell and Veeam, ensuring robust protection for your
          operating systems, compute power, and storage needs. Our team of
          experts can design and implement a customized solution, guaranteeing
          peace of mind and data security in today's ever-evolving digital
          landscape.
        </div>
      </div>
      <div className="flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mx-4 text-3xl font-semibold leading-9 max-md:mr-2.5 max-md:max-w-full">
          IP/Networking & Security
        </div>
        <img
          loading="lazy"
          srcSet="/it_product/image4.png"
          alt='Techsol Solutions'
          className="self-center mt-5 w-full aspect-[3.7] max-w-[1700px] max-md:max-w-full"
        />
        <div className="mx-4 mt-12 text-xl leading-7 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          As partners of companies such as Huawei, Dell, H3C and TP Link, we can
          help you with LAN, WAN, and Wireless LAN solutions, from planning,
          designing, and implementing setting up, putting into practice, and
          continuing to offer support for both the passive (such as structured
          cabling and related components) and active (such as switches, routers,
          access points, etc.) parts of the network for,
          <br />
          IP/Network & Solutions
          <br />
          Network Security
          <br />
          Surveillance Solutions
        </div>
      </div>
      <div className="flex flex-col items-start px-20 py-16 mt-8 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="text-3xl font-semibold leading-9 max-md:max-w-full">
          Client Computing & printing solutions
        </div>
        <img
          loading="lazy"
          srcSet="/it_product/image5.png"
          alt='Techsol Solutions'
          className="self-center mt-5 w-full aspect-[3.7] max-w-[1700px] max-md:max-w-full"
        />
        <div className="mt-12 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
          We offer Notebooks, Business or Commercial Desktop PCs, Graphics
          Workstations, All in One PCs, Thin-Clients, VDI and Printing
          Solutions. Dell, HP and Lenovo are the brands we are carrying to
          fulfill customer’s requirements of,
          <br />
          Laptops/ Desktops & VDI Solutions
          <br />
          Printers & Printing Solutions
        </div>
      </div>
      <div className="flex flex-col items-start px-20 pt-20 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-1.5 text-3xl font-semibold leading-9 max-md:max-w-full">
          SURVILLIANCE & VIDEO ANALYTICS SOLUTIONS
        </div>
        <img
          loading="lazy"
          srcSet="/it_product/image6.png"
          alt='Techsol Solutions'
          className="self-center mt-6 w-full aspect-[3.7] max-w-[1700px] max-md:max-w-full"
        />
        <div className="mt-12 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
          We offer advanced surveillance solutions, including cutting-edge video
          analytics, to provide you with real-time insights and improve
          security. Our comprehensive services encompass system design,
          installation, and ongoing maintenance, ensuring your surveillance
          system functions optimally. We cater to a wide range of needs, from
          basic monitoring to advanced video analytics that can identify
          anomalies and potential threats.
        </div>
      </div>
    </div> 
    </>
  )
}

export default ItProduct
