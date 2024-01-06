import React, { Component } from "react"

import netLogo from "../../../assetsEA/net-logo.png"
import esrd from "../../../assetsEA/esrd.svg"
import eagrey from "../../../assetsEA/ea-grey.png"
import truste from "../../../assetsEA/truste.svg"


import twitter from "../../logos/1x/twitter.png"
import facebook from "../../logos/1x/facebook.png"
import youtube from "../../logos/1x/youtube.png"
import tiktok from "../../logos/1x/tiktok.png"
import ig from "../../logos/1x/ig.png"



function Bottom() {
    return (
        <>
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

module.exports = Bottom