import React from "react"
import styled from 'styled-components';

const Logo = styled.img`
  width: 20px;
  margin: 20px;
`
export const footerStyles = {
  backgroundColor: 'rgb(255, 238, 230)',
  color :'rgb(127, 106, 94)',
  position: "fixed",
  bottom: "0",
  width: "100%",
  zIndex: "99"
}
export const footerStyles2 = {
  backgroundColor: 'rgb(204, 192, 184)',
  color :'rgb(255, 238, 230)'
}

const Footer = () => 
<footer className="page-footer font-small blue pt-2" style={footerStyles} expand="md">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-3">
                <h5 className="text-uppercase" >BAROGYM</h5>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-6 mb-md-0 mb-3">
            <Logo alt="인스타" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" />  
            <Logo alt="카카오톡" src="https://cdn-icons-png.flaticon.com/512/3884/3884256.png" />  
            <Logo alt="전화" src= "https://cdn-icons-png.flaticon.com/512/126/126509.png"/>
            <Logo alt="블로그" src="https://cdn-icons-png.flaticon.com/512/3522/3522226.png" />
            </div>
          </div>
       </div>

            <div className="footer-copyright text-center py-3" style={footerStyles2} expand="md"
            >© 2022 Copyright BAROGYM 
            </div>
        </footer>

export default Footer;