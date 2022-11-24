import React from 'react'
import Sidebar from './dashbord/sidebar/sidebar'
import Topbar from './dashbord/topbar/tobbar'
import '../CSS/dashbord.css'
import Blocks from './dashbord/features/blocks'
import TinyBlock from './dashbord/features/tinyblocks'

export default function Tobbarcus() {

    return ( 

        <div>
            <Topbar/>
            <div className="dashbord">
                <Sidebar/>
                <div className="dashbord_container">
                {/* =========== kavin ============== */}

                    <div className="block_1">
                        <div className="block_2">
                            <Blocks/>
                            <TinyBlock/>
                        </div>
                    </div>

                {/* =========== kavin ============== */}

                    <div className="dashbord_container_2">
                       {/* <Blocks id={id}/> */}
                    </div>
                 </div>


                 <div className="bbBar">
                       {/* <TinyBlock/> */}
                 </div>

            </div>     

        </div>


    )
}

