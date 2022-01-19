import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer(){
    return(
        <div className="footer">
            <SocialIcon url="https://www.instagram.com/my_name_is_ali_abdullah/" />
            <SocialIcon url="https://www.facebook.com/ali.abdullah.58173000/"/>
            <SocialIcon bgColor="grey" url="https://github.com/compile-run-Ali"/>
        </div>
    )
}