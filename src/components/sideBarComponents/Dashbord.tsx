import React from 'react'
import UserDataDisplay from '../dashbordComponents/UserDataDisplay'
import GraphDashbord from '../dashbordComponents/pagination/GraphDashbord'

function Dashbord() {
  return (
    <>
      <p className='text-gray-200 py-1 font-light'>Analytics</p>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='w-full md:w-[56%]'>

            <div className="w-full flex flex-row items-center justify-between mb-5">

              <div className="w-[48%] bg-white rounded-lg h-[130px] relative border-[1px] border-[#199FB1]">

                <div
                  className="absolute w-full h-full bg-white rounded-lg  border-white "

                >
                  <svg
                    className="absolute left-0 w-full h-full rounded-lg"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                  >
                    <path
                      stroke="#199FB1"
                      strokeWidth="2"
                      fill="#199FB11A"
                      d="M0,64L20,80C40,96,80,112,120,104C160,96,200,80,240,96C280,112,320,144,360,136C400,128,440,96,480,88C520,80,560,112,600,128C640,144,680,160,720,152C760,144,800,112,840,104C880,96,920,112,960,120C1000,128,1040,112,1080,104C1120,96,1160,112,1200,120C1240,128,1280,112,1320,104C1360,96,1400,112,1440,120L1440,200L1400,200C1360,200,1280,200,1200,200C1120,200,1040,200,960,200C880,200,800,200,720,200C640,200,560,200,480,200C400,200,320,200,240,200C160,200,80,200,40,200L0,200Z"
                    />
                  </svg>
                  <div className="text-black">Chart 1</div>
                </div>
              </div>

              {/* Second Card */}
              <div className="w-[48%] bg-white rounded-lg h-[130px] relative border-[3px] border-[#0FD43E]">

                <div
                  className="absolute w-full h-full bg-white rounded-lg  border-white"

                >
                  <svg
                    className="absolute left-0 w-full h-full rounded-lg"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                  >
                    <path
                      stroke="#0FD43E"
                      strokeWidth="2"
                      fill="#0FD43E1A"
                      d="M0,80C60,120,120,40,180,60C240,80,300,160,360,160C420,160,480,80,540,60C600,40,660,120,720,140C780,160,840,80,900,60C960,40,1020,120,1080,140C1140,160,1200,80,1260,60C1320,40,1380,120,1440,140L1440,200L1380,200C1320,200,1260,200,1200,200C1140,200,1080,200,1020,200C960,200,900,200,840,200C780,200,720,200,660,200C600,200,540,200,480,200C420,200,360,200,300,200C240,200,180,200,120,200C60,200,0,200,0,200Z"


                    />
                  </svg>
                  <div className="text-black">Chart 2</div>
                </div>
              </div>
            </div>

            <div className='w-full flex  flex-row items-center justify-between mb-5'>
              <div className="w-[48%] bg-white rounded-lg h-[130px] relative border-[1px] border-[#FFCC40]">

                <div
                  className="absolute w-full h-full bg-white rounded-lg  border-white"

                >
                  <svg
                    className="absolute left-0 w-full h-full rounded-lg"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                  >
                    <path
                      stroke="#FFCC40"
                      strokeWidth="2"
                      fill="#FFCC401A"
                      d="M0,80C50,100,100,60,150,80C200,100,250,140,300,120C350,100,400,40,450,60C500,80,550,120,600,140C650,160,700,120,750,100C800,80,850,120,900,140C950,160,1000,120,1050,100C1100,80,1150,120,1200,140C1250,160,1300,120,1350,100C1400,80,1450,120,1500,140L1500,200L1450,200C1400,200,1350,200,1300,200C1250,200,1200,200,1150,200C1100,200,1050,200,1000,200C950,200,900,200,850,200C800,200,750,200,700,200C650,200,600,200,550,200C500,200,450,200,400,200C350,200,300,200,250,200C200,200,150,200,100,200C50,200,0,200,0,200Z"
                    />
                  </svg>
                  <div className="text-black">Chart 3</div>
                </div>
              </div>
              <div className="w-[48%] bg-white rounded-lg h-[130px] relative border-[3px] border-[#FF0838]">

                <div
                  className="absolute w-full h-full bg-white rounded-lg  border-white"

                >
                  <svg
                    className="absolute left-0 w-full h-full rounded-lg"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                  >
                    <path
                      stroke="#FF0838"
                      strokeWidth="2"
                      fill="#FF08381A"
                      d="M0,80C50,100,100,60,150,80C200,100,250,140,300,120C350,100,400,40,450,60C500,80,550,120,600,140C650,160,700,120,750,100C800,80,850,120,900,140C950,160,1000,120,1050,100C1100,80,1150,120,1200,140C1250,160,1300,120,1350,100C1400,80,1450,120,1500,140L1500,200L1450,200C1400,200,1350,200,1300,200C1250,200,1200,200,1150,200C1100,200,1050,200,1000,200C950,200,900,200,850,200C800,200,750,200,700,200C650,200,600,200,550,200C500,200,450,200,400,200C350,200,300,200,250,200C200,200,150,200,100,200C50,200,0,200,0,200Z"
                    />
                  </svg>
                  <div className="text-black">Chart 4</div>
                </div>
              </div>
            </div>


            <div className='w-full bg-white rounded-lg h-[110px] relative '>
              <div
                className="w-full h-full bg-white rounded-lg relative"
              >
                <svg
                  className="absolute  w-full h-full rounded-lg"
                  viewBox="0 0 1000 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FFCC40', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#FF0838', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    stroke="url(#wave-gradient)"
                    strokeWidth="5"
                    fill="white"
                    d="M0,80C30,100,60,60,90,80C120,100,150,140,180,120C210,100,240,40,270,60C300,80,330,140,360,160C390,180,420,120,450,100C480,80,510,140,540,160C570,180,600,100,630,80C660,60,690,120,720,140C750,160,780,100,810,80C840,60,870,120,900,140C930,160,960,80,990,60C1020,40,1050,100,1080,140C1110,180,1140,120,1170,100C1200,80,1230,140,1260,160C1290,180,1320,100,1350,80C1380,60,1410,120,1440,140L1440,200L1410,200C1380,200,1350,200,1320,200C1290,200,1260,200,1230,200C1200,200,1170,200,1140,200C1110,200,1080,200,1050,200C1020,200,990,200,960,200C930,200,900,200,870,200C840,200,810,200,780,200C750,200,720,200,690,200C660,200,630,200,600,200C570,200,540,200,510,200C480,200,450,200,420,200C390,200,360,200,330,200C300,200,270,200,240,200C210,200,180,200,150,200C120,200,90,200,60,200C30,200,0,200,0,200Z"
                  />
                </svg>
                <div className="">
                  Chart main
                </div>
              </div>

            </div>
          </div>

          <div className='w-full mt-4 md:mt-0 md:w-[42%] min-h-[390px] bg-white rounded-lg'>
             
             <GraphDashbord/>

          </div>
        </div>
        <div className='w-full  mt-5  '>
          <UserDataDisplay/>
        </div>
      </div>
    </>
  )
}

export default Dashbord