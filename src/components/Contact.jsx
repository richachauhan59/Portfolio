import React from 'react';
import styled from "styled-components";

const Heading = styled.h1`
 text-align: center;
 font-family: 'Ubuntu', sans-serif;
 font-size: 40px;
 color: white;
`;

const Line = styled.div`
  height: 4px;
  width: 125px;
  margin: 10px auto;
  background: white;
`;

function Contact() {
 return (
    <footer>
    <div className="container-fluid page-footer font-small text-white text-center p-5"
        style={{backgroundImage: "linear-gradient(361deg, rgb(35, 39, 65), rgb(10 86 73 / 86%))", height: "360px"}}>
        <Heading id="contacts">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-back"
          >
            Get in Touch
          </div>
          <Line
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-back"
          />
        </Heading>

        <div className="row p-3">

            <div className="col-md-12 pt-2">
                <div className="my-4 flex-center">

                  
                    <a href="https://twitter.com/RichaCh00294122" target="_blank"><i
                            className="fab fa-twitter fa-lg text-white p-4  fa-2x"> </i></a>
             
                    <a href="https://github.com/richachauhan59" target="_blank"><i
                            className="fab fa-github fa-lg text-white p-4  fa-2x"> </i></a>
                   
                    <a href="https://www.linkedin.com/in/richa-chauhan-b158a2180/" target="_blank"><i
                            className="fab fa-linkedin-in fa-lg text-white p-4  fa-2x"> </i></a>

                   
                    <a href="https://www.hackerrank.com/richachauhan2019?hr_r=1" target="_blank"><i
                            className="fab fa-hackerrank fa-lg text-white p-4 fa-2x"> </i></a>
                </div>
            </div>

            <div id="contact" className="col-md-12 pb-3" style={{height:"70px"}}>
                <div className="flex-center">
                    <a href="#" target="_blank" className="h4 fas fa-map-marker text-white p-4 fa-1x">Bangalore</a>
                    <a href="#richachauhan2019@gmail.com" className="h4 fas fa-envelope-open text-white p-4 fa-1x"
                        target="_blank">richachauhan2019@gmail.com</a>
                    <a href="#" target="_blank" className="h4 fa fa-phone text-white p-4 fa-1x">8130700305</a>
                </div>
            </div>

        </div>

    </div>

</footer>
 );
}

export default Contact;
