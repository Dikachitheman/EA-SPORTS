import { Link } from 'react-router-dom'

import headerLogo from "../../../assetsEA/headerLogo.svg"
import blackBack from "../../../assetsEA/background-video.mp4"
import whiteBack from "../../../assetsEA/white-background.jpg"
import trailer from "../../../assetsEA/EA_SPORTS_FC_24___Official_Announce_Trailer(1080p).mp4"
import belly from "../../../assetsEA/dortmund-belly.mp4"
import chelGirl from "../../../assetsEA/chelsea-girl.mp4"
import anime from "../../../assetsEA/anime-logo.mp4"
import wrighty from "../../../assetsEA/rocky-and-wrighty.jpg"
import netLogo from "../../../assetsEA/net-logo.png"
import futures from "../../../assetsEA/fcfutures.png"
import esrd from "../../../assetsEA/esrd.svg"
import ealogo from "../../../assetsEA/logo-test.png"
import eagrey from "../../../assetsEA/ea-grey.png"
import truste from "../../../assetsEA/truste.svg"


import twitter from "../../logos/1x/twitter.png"
import ea from "../../logos/1x/ea.png"
import ealight from "../../logos/1x/ealight.png"
import eawhite from "../../logos/1x/eawhite.png"
import eamid from "../../logos/1x/eamid.png"
import facebook from "../../logos/1x/facebook.png"
import youtube from "../../logos/1x/youtube.png"
import tiktok from "../../logos/1x/tiktok.png"
import ig from "../../logos/1x/ig.png"

import wsl from "../../../assetsEA/logo/wsl.png"
import arkema from "../../../assetsEA/logo/d1-arkema.png"
import rsl from "../../../assetsEA/logo/saudi-football-league.png"
import kLeage from "../../../assetsEA/logo/korean-k-league.png"
import csl from "../../../assetsEA/logo/chinese-super-league.png"
import nwsl from "../../../assetsEA/logo/nwsl.png"
import eredivise from "../../../assetsEA/logo/eredivisie.png"
import portugal from "../../../assetsEA/logo/liga-portugal.png"

import serieA from "../../../assetsEA/logo/serie-a.png"
import wcl from "../../../assetsEA/logo/uefa-womens-champions-league.png"
import ucl from "../../../assetsEA/logo/uefa-champions-league.png"
import europa from "../../../assetsEA/logo/uefa-europa-champion-league.png"
import conference from "../../../assetsEA/logo/uefa-europa-conference-league.png"
import limbert from "../../../assetsEA/logo/conmebol-libertadores.png"
import suda from "../../../assetsEA/logo/conmebol-sudamericana.png"

import bundesliga from "../../../assetsEA/logo/bundesliga.png"
import mls from "../../../assetsEA/logo/mls.png"
import afa from "../../../assetsEA/logo/liga-argentina.png"
import ligueOne from "../../../assetsEA/logo/ligue-1.png"
import laliga from "../../../assetsEA/logo/lalgiga.png"
import epl from "../../../assetsEA/logo/premiere-league.png"
import efl from "../../../assetsEA/logo/efl-championship.png"
import spfl from "../../../assetsEA/logo/scottish-premiere-league.png"

import '../slide.css'

import { useState, useEffect } from 'react'



export default function IndexPage() {
    return (
        <>
            <div className='text-white'>
                <div className='h-[44px] bg-ldark flow-root'>
                    <div className='float-right flex items-center h-[44px] pr-10 space-x-8'>
                        <span class="material-symbols-outlined text-[30px] text-zinc-400">
                            question_mark
                        </span>
                        <span class="material-symbols-outlined text-[35px] text-zinc-400">
                            person
                        </span>
                        <img src={eamid} className='w-[44px]'></img>
                    </div>
                </div>

                <Nav />
            </div>

            <div className="bg-blackback ">
                <video src={blackBack} autoPlay muted loop></video>
                <div className='top-0 absolute text-white text-7xl \
                flex flex-col mt-56 items-center w-full h-full \
                space-y-6\
                '>
                    <div className='overflow-hidden w-60 h-52'>
                        <img src={ealogo} className='h-52 w-auto object-cover object-left'></img>
                    </div>

                    <div className='font-dela text-6xl text-center'>WELCOME TO THE <br></br>CLUB.</div>
                    <div className='text-center leading-7 mt-4 text-xl text-500'>
                        EA SPORTS FC™ is here—the next chapter in The World's Game. Join us in building the future of 
                        <br></br>football on a foundation of innovation and authenticity with more than 19,000 fully licensed 
                        <br></br>players, 700 teams, and 30 leagues.
                    </div>

                    <div className='float-right'>
                        <GreenButton textValue={'EA SPORTS FC™ 24'} />
                    </div>
                </div>
            </div>

            {/* <div className="h-100 overflow-hidden"> */}
            <div className=
                'bg-whitebackground bg-cover bg-bottom w-full \
                flex flex-col justify-center items-center \
                py-20 space-y-6 \
                '>

                <img style={{width: '20rem', height: 'auto'}} src={netLogo}></img>

                <div className='font-dela text-6xl'>THE WORLD'S GAME</div>

                <div className='text-xl'>
                    The EA SPORTS FC platform is home to the biggest competitions, leagues, and players across the men's and women's game.
                </div>
            </div>

            <div style={{ height: '600px', overflow: 'hidden'}}>
                <video style={{ marginTop: '-200px'}} src={trailer} autoPlay loop muted></video>
            </div>

            <div className='bg-blackbackground h-max py-24 space-y-20 overflow-hidden'>

                <div className='first space-x-16'>
                    <div className='first-slide space-x-16'>
                        <div>
                            <img className='w-16 h-auto' src={serieA} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={wcl} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={ucl} alt="" />
                        </div>
                        <div>
                            <img className='w-20 h-auto' src={europa} alt="" />
                        </div>
                        <div>
                            <img className='w-20 h-auto' src={conference} alt="" />
                        </div>
                        <div>
                            <img className='w-36 h-auto' src={limbert} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={suda} alt="" />
                        </div>
                    </div>
                    <div className='first-slide space-x-16'>
                        <div>
                            <img className='w-16 h-auto' src={serieA} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={wcl} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={ucl} alt="" />
                        </div>
                        <div>
                            <img className='w-20 h-auto' src={europa} alt="" />
                        </div>
                        <div>
                            <img className='w-20 h-auto' src={conference} alt="" />
                        </div>
                        <div>
                            <img className='w-36 h-auto' src={limbert} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={suda} alt="" />
                        </div>
                    </div>
                </div>

                <div className='second space-x-20'>
                    
                    <div className=' second-slide flex space-x-20'>
                        <div>
                            <img className='w-40 h-auto' src={bundesliga} alt="" />
                        </div>
                        <div>
                            <img className='w-44 h-auto' src={mls} alt="" />
                        </div>
                        <div>
                            <img className='w-48 h-auto' src={afa} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={ligueOne} alt="" />
                        </div>
                        <div>
                            <img className='w-96 h-auto' src={laliga} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={epl} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={efl} alt="" />
                        </div>
                        <div>
                            <img className='w-48 h-auto' src={spfl} alt="" />
                        </div>
                    </div>
                    <div className='second-slide flex space-x-20'>
                        <div>
                            <img className='w-40 h-auto' src={bundesliga} alt="" />
                        </div>
                        <div>
                            <img className='w-44 h-auto' src={mls} alt="" />
                        </div>
                        <div>
                            <img className='w-48 h-auto' src={afa} alt="" />
                        </div>
                        <div>
                            <img className='w-28 h-auto' src={ligueOne} alt="" />
                        </div>
                        <div>
                            <img className='w-96 h-auto' src={laliga} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={epl} alt="" />
                        </div>
                        <div>
                            <img className='w-32 h-auto' src={efl} alt="" />
                        </div>
                        <div>
                            <img className='w-48 h-auto' src={spfl} alt="" />
                        </div>
                    </div>
               </div>
            
                <div className='third space-x-7'>
                    <div className='third-slide flex space-x-9'>
                        <div>
                            <img className='w-4/5 h-auto' src={wsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={nwsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={eredivise} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={portugal} alt="" />
                        </div>
                        <div>
                            <img className='w-72 h-auto' src={rsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={kLeage} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={csl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={arkema} alt="" />
                        </div>
                    </div>
                    <div className='third-slide flex space-x-9'>
                        <div>
                            <img className='w-4/5 h-auto' src={wsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={nwsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={eredivise} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={portugal} alt="" />
                        </div>
                        <div>
                            <img className='w-72 h-auto' src={rsl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={kLeage} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={csl} alt="" />
                        </div>
                        <div>
                            <img className='w-4/5 h-auto' src={arkema} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className='bg-whitebackground bg-[length:2200px_1600px] w-1/2 text-center leading-7 flex justify-center items-center'>
                    Premier League, UEFA Champions League, UEFA Women's Champions
                    <br></br>League, LALIGA EA SPORTS, Bundesliga, Ligue 1, Serie A, CONMEBOL 
                    <br></br>Libertadores, Barclays Women's Super League, NWSL and many more are 
                    <br></br>partners of EA SPORTS FC.
                </div>
                <div className='w-1/2'>
                    <video src={belly} autoPlay loop muted></video>
                </div>
            </div>

            <div className='flex'>
                <div className='w-1/2'>
                    <video src={chelGirl} autoPlay loop muted></video>
                </div>
                <div className='bg-whitebackground bg-[length:2200px_1600px] w-1/2 text-center leading-7 flex flex-col items-center pt-60'>
                    Created for fans by fans, EA SPORTS FC is a new Football Club for the 
                    <br></br>future of football we want to build together.
                    <br></br>
                    <br></br>Our new brand identity is inspired by the triangles that have been part of EA 
                    <br></br>SPORTS football for the past 30 years, from the isometric polygons that 
                    <br></br>make up our game to the chemistry triangles that exist in Ultimate Team™ 
                    <br></br>to the player indicator across every match.

                    <div>
                        <GreenButton textValue={'Learn More'} />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className='bg-dark w-1/2 text-white text-center leading-7 flex justify-center items-center'>
                    <p>
                    The triangle has revolutionized football again and again 
                    since the birth of <br></br> Total Football in the 70’s, now it can 
                    serve as a proud badge for the <br></br>evolutions of football to come.
                    </p>
                </div>
                <div className='w-1/2'>
                    <video src={anime} autoPlay loop muted></video>
                </div>
            </div>

            <div className='flex'>
                <div className='bg-whitebackground bg-[length:2200px_1600px] w-1/2 text-center leading-7 flex flex-col items-center pt-60'>
                    <div>
                        <img src={futures} className='h-[80px] mb-2'></img>

                        <span className='font-black text-[21px]'>A PLAN TO INVEST $10M GLOBALLY TO GROW COMMUNITY FOOTBALL</span>

                        <br></br>FC FUTURES is a plan to meaningfully invest in the World’s Game with the 
                        <br></br>purpose of growing football for all. The plan will see $10 million invested over 
                        <br></br>the next three years across multiple community-level football projects.
                    </div>

                    <div>
                        <GreenButton textValue={'Learn More'} />
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={wrighty} autoPlay loop muted></img>
                </div>
            </div>

            <Bottom />
            
        </>
    )


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
                <header className={`flow-root w-full  bg-black py-1 ${stickyClass}`}>
                    <div className='flex space-x-12 float-left'>
                        <a href="" className='ml-10 pt-2'>
                            <img src={headerLogo} className='w-4/5 h-auto'></img>
                        </a>
                        <Link to={'/login'} className='text-xl pt-3 '>
                            Games
                        </Link>
                        <div className='text-xl pt-3'>
                            FC Futures
                        </div>
                        <div className='text-xl pt-3'>
                            News & Updates
                        </div>
                        <div className='text-xl pt-3'>
                            Community
                        </div>
                    </div>
                
                    <Link to={'/login'}>
                        <div className='py-3 px-14 bg-eagreen rounded-full text-slate-950 float-right'>Buy Now</div>
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
}