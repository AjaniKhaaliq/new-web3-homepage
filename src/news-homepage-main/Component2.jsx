import React from "react";
import pic1 from './assets/images/image-web-3-desktop.jpg';

const Component2 = () =>{
    return(
        <div>
            <div className="to-flex yay">
                <div>
                <img src={pic1} />
                </div>
                <div className="to-design">
                    <div className="new">New</div>
                    <div>
                        <h4>Hydrogen VS Electic Cars</h4>
                        <div>Will hydrogen-fueled cars ever catch up to EVs?</div>
                    </div>
                    <hr />
                    <div>
                        <h4>The Downside of AR Artistry</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Component2;