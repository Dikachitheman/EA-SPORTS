import { Link } from 'react-router-dom'

import fc24 from "../../../assetsRatings/fc24.svg"
import ealogo from "../../../assetsEA/logo-test.png"
import mancity from "../../../assetsRatings/mancity.png"
import inter from "../../../assetsRatings/inter.png"
import judebellingham from "../../../assetsRatings/jude-bellingham.png"
import barcelona from "../../../assetsRatings/barcelona.png"
import ikaygundogan from "../../../assetsRatings/ikay-gundogan.png"
import germany from "../../../assetsRatings/germany.png"
import england from "../../../assetsRatings/england.png"
import realmadrid from "../../../assetsRatings/real-madrid.png"
import jill from "../../../assetsRatings/jill-roord.png"
import nicolo from "../../../assetsRatings/nicolo-barella.png"
import italy from "../../../assetsRatings/italy.png"
import nether from "../../../assetsRatings/netherlands.png"
import ash from "../../../assetsRatings/ashley-lawrence.png"
import chelsea from "../../../assetsRatings/chelsea.png"
import canada from "../../../assetsRatings/canada.png"
import alnasiir from "../../../assetsRatings/al-nasiir.png"
import cameroon from "../../../assetsRatings/cameroon.png"
import mane from "../../../assetsRatings/mane.png"


import netLogo from "../../../assetsEA/net-logo.png"
import esrd from "../../../assetsEA/esrd.svg"
import eagrey from "../../../assetsEA/ea-grey.png"
import truste from "../../../assetsEA/truste.svg"


import twitter from "../../logos/1x/twitter.png"
import facebook from "../../logos/1x/facebook.png"
import youtube from "../../logos/1x/youtube.png"
import tiktok from "../../logos/1x/tiktok.png"
import ig from "../../logos/1x/ig.png"

import { useState, useEffect } from 'react'


export default function ratingsPage() {
    return (
        <>
            <div className='text-white text-[12px]'>
                
                <div className='h-[44px] bg-lldark flow-root'>
                    <div className='float-left flex items-center h-[44px] pl-10 space-x-8'>
                        <div>
                            Electronic Arts
                        </div>
                    </div>
                    <div className='float-right flex items-center h-[44px] pr-10 space-x-8'>
                        <div>
                            Help
                        </div>
                        <div>
                            Account
                        </div>
                    </div>
                </div>
                
                <Nav />
            </div>

            <div className='bg-dark text-white text-7xl \
                flex flex-col pt-14 pb-6 items-center w-full h-full \
                '>

                <div className='overflow-hidden w-48 h-36 '>
                    <img src={ealogo} className='h-40 w-auto object-cover object-left'></img>
                </div>

                <div className='font-dela text-[4rem] text-center bg-eagreen text-darkt pb-2 mt-[1.2rem]'>
                    FC 24 PLAYER RATINGS
                </div>

                <div className='text-xl mt-[1.2rem]'>
                    Explore the complete Ratings and PlayStyles for the 17,000+ players available in EA SPORTS FC™ 24.
                </div>

                <div className='flex mt-[1.2rem] pl-7 pt-[4px] pb-[4px] pr-[4px] items-center w-[26rem] rounded-full  border-gray-400 border-[2px]'>
                    <div className='text-gray-400 text-[200]'>
                        Search Players
                    </div>
                    <div className='grow'>

                    </div>
                    <div className='bg-lldark rounded-full w-12 h-12 flex justify-center items-center'>
                        <span className="material-symbols-rounded bg-lldark text-gray-00">
                            search
                        </span>
                    </div>
                </div>

                <div className='w-full mt-[3.4rem] flex items-center space-x-8 pl-[5rem]'>
                    <div className='flex justify-center items-center pt-[8px] pb-[8px] w-[8rem] rounded-full  border-gr border-[0.5px] text-gray-300 space-x-2'>
                        <div>
                            Filter
                        </div>
                        <div>
                            <span className="material-symbols-rounded rotate-[270deg]">
                                tune
                            </span>
                        </div>
                    </div>
                    <div className='text-gray-500'>
                        Showing 17326 results
                    </div>
                    <div>
                        Reset all
                    </div>
                </div>
            </div>
            
            <div className='coll pl-24 text-eagreen bg-dark border-y-lr border-y-2 py-4'>
                <div className='text-[22px] flex justify-center '>
                    RANK
                </div>
                <div className='text-[22px] pl-3'>
                    PLAYER
                </div>
                <div className='text-[22px] flex justify-center '>
                    NAT
                </div>
                <div className='text-[22px] flex justify-center '>
                    TEAM
                </div>
                <div className='text-[22px] flex justify-center '>
                    POS
                </div>
                <div className='text-[22px] flex justify-center '>
                    OVR
                </div>
                <div className='text-[22px] flex justify-center '>
                    PAC
                </div>
                <div className='text-[22px] flex justify-center '>
                    SHO
                </div>
                <div className='text-[22px] flex justify-center '>
                    PAS
                </div>
                <div className='text-[22px] flex justify-center '>
                    DRI
                </div>
                <div className='text-[22px] flex justify-center '>
                    DEF
                </div>
                <div className='text-[22px] flex justify-center '>
                    PHY
                </div>
                <div>

                </div>  
            </div>

            <div className='pt-[1rem] bg-dark'>
                <Row dp={mane} 
                    name={'Sadio Mane'} 
                    nat={cameroon} 
                    team={alnasiir} 
                    pos={'CF'} 
                    ovr={'86'} 
                    pac={'62'} 
                    sho={'81'} 
                    pas={'84'} 
                    dri={'86'} 
                    def={'72'} 
                    phy={'73'}
                    />

                <Row dp={judebellingham} 
                    name={'Jude Bellingham'} 
                    nat={england} 
                    team={realmadrid} 
                    pos={'CM'} 
                    ovr={'86'} 
                    pac={'76'} 
                    sho={'75'} 
                    pas={'79'} 
                    dri={'85'} 
                    def={'78'} 
                    phy={'72'}
                    />

                <Row dp={jill} 
                    name={'Jill Roord'} 
                    nat={nether} 
                    team={mancity} 
                    pos={'CAM'} 
                    ovr={'86'} 
                    pac={'62'} 
                    sho={'81'} 
                    pas={'84'} 
                    dri={'86'} 
                    def={'72'} 
                    phy={'73'}
                    />

                <Row dp={nicolo} 
                    name={'Nicolo Barella'} 
                    nat={italy} 
                    team={inter} 
                    pos={'CM'} 
                    ovr={'86'} 
                    pac={'78'} 
                    sho={'78'} 
                    pas={'82'} 
                    dri={'85'} 
                    def={'78'} 
                    phy={'80'}
                    />

                <Row dp={ash} 
                    name={'Ashley Lawrence'} 
                    nat={canada} 
                    team={chelsea} 
                    pos={'RB'} 
                    ovr={'86'} 
                    pac={'62'} 
                    sho={'81'} 
                    pas={'84'} 
                    dri={'86'} 
                    def={'72'} 
                    phy={'73'}
                    />

                <Row dp={ikaygundogan} 
                    name={'IIkay Gundogan'} 
                    nat={germany} 
                    team={barcelona} 
                    pos={'CM'} 
                    ovr={'86'} 
                    pac={'62'} 
                    sho={'81'} 
                    pas={'84'} 
                    dri={'86'} 
                    def={'72'} 
                    phy={'73'}
                    />
            </div>

            <div className='h-[40rem] bg-dark flex'>
                <div className='pl-28 pt-28'>
                    <div className='font-dela text-[53px] text-white leading-10 pb-4'>
                        SIGN UP FOR EA 
                        <br></br>SPORTS FC™ 24 NEWS
                    </div>
                    <br></br>
                    <div className='text-white text-[24px]'>
                        <div className='text-[24px]  pb-5'>
                            Already have an EA Account? 
                            <span className='text-eagreen text-[24px] font-bold'>
                                Check your Email Preferences here.
                            </span>
                        </div>
                        Join the Club today to receive the latest EA SPORTS FC™ 24 news, 
                        <br></br>updates, behind-the-scenes content, exclusive offers, and more 
                        <br></br>(including other EA news, products, events, and promotions) by email.
                    </div>
                </div>
                <div className='flex flex-col items-start pl-10 pt-28'>
                    <div className='space-y-5'>
                        <div className='pt-3 pb-5 pl-6 w-[37rem] rounded-full text-dark text-xl border-white border-[3px]'>
                            Email
                        </div>
                        <div className='flex space-x-4'>
                            <div className='pt-3 pb-4 pl-6 w-[18rem] rounded-full text-dark text-xl border-white border-[3px]'>
                                Birthdate
                            </div>
                            <div className='pt-1 pb-2 pl-8 w-[18rem] rounded-full border-white border-[3px] space-7-2'>
                                <div className='text-[16px] text-white'>
                                    Location
                                </div>
                                <div className='text-white flex space-x-24'>
                                    <div className='text-[24px]'>
                                        United States
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex space-x-4 pt-10'>
                        <div className='text-white'>
                            <span className="material-symbols-outlined text-[1.5rem]">
                                check_box_outline_blank
                            </span>
                        </div>
                        <div className='text-white text-[18px]'>
                            I can withdraw my consent at any time by changing my <span className='text-eagreen'>email preferences</span> in my EA 
                            <br></br>Account (if I have one associated with this email address), by clicking unsubscribe at the 
                            <br></br>base of any email that I receive, or by contacting EA’s Data Protection officer by visiting 
                            <br></br><span className='text-eagreen'>https://www.ea.com/legal/privacy-portal.</span>
                        </div>
                    </div>

                    <div className='mt-4 ml-[0rem] hover:ml-[-0.25rem]'>
                        <GreenButton textValue={'Sign Up'} />
                    </div>
                </div>
            </div>

            <div className='h-96 bg-ldark flex flex-col items-center'>
                <div className='border-b h-36 w-4/5 flow-root pt-8'>
                    <div className='float-left text-white text-[24px] font-[700]'>
                        EA SPORTS FC™ 24
                    </div>
                    <div className='float-right text-white space-y-4'>
                        <div className='grid justify-items-grid justify-items-end pt-2'>
                            Follow us
                        </div>
                        <div className='flex space-x-8 items-center'>
                            <img src={ig} className='w-[26px] h-[26px]' alt="" />
                            <img src={youtube} className='w-[30px] h-[20px]' alt="" />
                            <img src={tiktok} className='w-[28px] h-auto' alt="" />
                            <img src={twitter} className='w-[30px] h-[26px]' alt="" />
                            <img src={facebook} className='w-[16px] h-auto' alt="" />
                        </div>
                    </div>
                </div>
                <div className='flow-root w-4/5'>
                    <div className='float-left pt-8'>
                        <img src={netLogo} className='w-[156px] h-auto' alt="" />
                    </div>
                    <div className='float-right pt-6'>
                        <img src={esrd} className='w-[346px] h-auto' alt="" />
                    </div>
                </div>
            </div>

            <div className='h-64 bg-gray-200 flex justify-center'>
                <div className='w-4/5 h-max flow-root'>
                    <div className='flex float-left space-x-8 pt-5'>
                        <div>
                            <img src={eagrey} className='h-auto w-14'></img>
                        </div>
                        <div>
                            <div className='flex space-x-14 mt-3'>
                                <div className='font-semibold'>Browse Games</div>
                                <div className='font-semibold'>Latest News</div>
                                <div className='font-semibold'>Help Center</div>
                                <div className='font-semibold'>EA Forums</div>
                                <div className='font-semibold'>About Us</div>
                                <div className='font-semibold'>Careers</div>
                            </div>

                            <div className='flex space-x-10 mt-6'>
                                <div>Legal & Privacy</div>
                                <div>Online Service Updates</div>
                                <div>User Agreement</div>
                            </div>

                            <div className='mt-px'>
                                Privacy & Cookie Policy (Your Privacy Rights)
                            </div>

                            <div className='mt-4'>
                                © 2023 Electronic Arts Inc.
                            </div>

                        </div>
                    </div>

                    <div className='float-right'>
                        <div className='mt-6'>
                            <div className='pt-1 pb-2 pl-8 w-[12rem] border-zinc-500 border-[3px]'>
                                <div className='text-[19px] text-zinc-700'>
                                    Location
                                </div>
                                <div className='text-zinc-900 flex space-x-7'>
                                    <div className='text-[20px]'>
                                        United States
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 grid justify-items-end'>
                            <img src={truste} className='w-[200px] h-auto' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

function Nav() {
    const [stickyClass, setStickyClass] = useState('relative')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar)

        return () => {
            window.removeEventListener('scroll', stickNavbar)
        }
    }, [])

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY
            windowHeight > 44 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative')
        }
    };

    return (
        <>
            <header className={`flow-root w-full  bg-ldark py-2 ${stickyClass}`}>
                <div className='flex space-x-12 float-left items-center'>
                    <a href="" className='ml-10'>
                        <img src={fc24} className='w-[10rem] h-auto'></img>
                    </a>
                    <Link to={'/login'} className='text-[20px]'>
                        About
                    </Link>
                    <div className='text-[20px]'>
                        Features
                    </div>
                    <div className='text-[20px]'>
                        Ultimate Team
                    </div>
                    <div className='text-[20px]'>
                        Ultimate team Hub
                    </div>
                    <div className='text-[20px]'>
                        FC 24 Ratings
                    </div>
                    <div className='text-[20px]'>
                        News & Community
                    </div>
                </div>
            
                <Link to={'/login'}>
                    <div className=' flex py-1 px-6 mr-10 bg-eagreen rounded-full text-slate-950 float-right mt-[3px]'>
                        <div className='pt-[2px] font-800 text-[16px]'>
                            Pre-Order Now
                        </div>

                        <span className="material-symbols-outlined text-[30px]">
                            expand_more
                        </span>
                    </div>
                </Link>
            </header>
        </>
    )
}

function GreenButton( {textValue} ) {
    return (
        <Link to={'/login'}>
            <div className='py-3 hover:py-4 px-6 hover:px-7 mt-4 hover:mt-3 bg-eagreen rounded-full text-xl text-blue-950'>{textValue}</div>
        </Link>
    )
}

function Row({dp, name, nat, team, pos, ovr, pac, sho, pas, dri, def, phy}) {
    return (
        <>
            <div className='coll w-full bg-dark text-white py- pl-24 \
                 h-[4.4rem]'>
                <div className='text-[22px] flex justify-center items-center font-dela'>
                    1
                </div>
                <div className='flex space-x-6 items-center'>
                    <div className='bg-goldCard bg-contain w-[3rem] h-[4.2rem] flex justify-center pb-[24px] pt-[10px]'>
                        <img src={dp} alt="" />
                    </div>
                    <div className='text-[22px]'>
                        {name}
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={nat} className='w-[72px]' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={team} className='w-[44px]' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-[22px] text-xdark bg-lldark w-fit h-fit \
                        py-[1px] px-[6px] rounded-[10px]' >
                        {pos}
                    </div>
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark w-[94%] rounded-[6px]'>
                    {ovr}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark rounded-l-[6px]'>
                    {pac}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark'>
                    {sho}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark'>
                    {pas}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark'>
                    {dri}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark'>
                    {def}
                </div>
                <div className='text-[22px] flex justify-center items-center bg-ldark rounded-r-[6px]'>
                    {phy}
                </div>
                <div>

                </div>
            </div>
        </>
    )
}