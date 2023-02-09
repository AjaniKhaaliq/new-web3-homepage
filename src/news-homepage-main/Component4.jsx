import React from "react";
import pic1 from "./assets/images/image-retro-pcs.jpg";
import pic2 from "./assets/images/image-top-laptops.jpg";
import pic3 from "./assets/images/image-gaming-growth.jpg";

const Component4 = () =>{
    return(
        <div>
            <div className="flexy">
                <div className="container-1">
                    <div>
                        <img className="pic1" src={pic1}/>
                    </div>
                        <div>
                            <div className="number">01</div>
                            <div className="text-size-2">Reviving Retro PCs</div>
                            <div className="text-size-1">What happens when old PCs<br/>are given modern upgrades?</div>
                        </div>
                </div>
                

                <div className="container-2">
                    <div>
                        <img className="pic2" src={pic2}/>
                    </div>

                    <div>
                        <div className="number">02</div>
                        <div className="text-size-2">Top 10 Laptops of 2022</div>
                        <div className="text-size-1">Our best pick for various<br/>needs and budgets</div>
                    </div>
                </div>
                

                <div className="container-3">
                    <div>
                        <img className="pic3" src={pic3}/>
                    </div>

                    <div>
                        <div className="number">03</div>
                        <div className="text-size-2">The Growth of Gaming</div>
                        <div className="text-size-1">How the pandemic has sparked<br/>fresh opportunities</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component4;