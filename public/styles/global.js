import css from "styled-jsx/css";

export default css.global`
    .text-code ::before {
        color: #A77231;
         content: "{ ";
    }
    
    .text-code ::after {
        color: #A77231;
         content: " }";
    }

    .or ::before{
        content: "|";
        color: #D0D4D5;
    }

    .display-1 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 22px;
    }

    .display-3 {
        font-size: 30px;
        font-weight: bold;
    }

    .display-2 {
        font-size: 20px;
        margin: 0;
    }

    .text-sub {
        color: #848388 !important;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }

    .text-primary {
        color: #E87B5A !important;
    }

    .text-center {
        text-align: center;
    }

    .container {
        padding: 48px 70px;
        background-color: #f6f6f6;
    }

    .lead {
        font-size: 20px;
    }

    .content-touch-me {
        max-width: 678px;
        margin-bottom 45px;
    }

    .text-muted {
        color: #D0D4D5 !important;
    }

    .list {
        margin-bottom 45px;
    }

    .item {
        padding-right: 45px;
        font-size: 20px;
    }

    .d-inline {
        display:inline;
    }

    .to-left {
        float: left;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    
        margin: 0 130px;
        min-height: 100vh;
    }

    ul {
        padding-inline-start: 20px;
        margin: 0;
    }

    .text-underline {
        text-decoration: underline;
    }

    .link {
        color: #E87B5A;
        opacity: 0.8;
        position: relative;
        transition: all 0.1s;
    }

    .link::before {
        content: " ";
    }

    .link::after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        background: #E87B5A;
        transition: all 0.2s ease-out;
        transform: scaleX(0);
        transform-origin: left;
    }

    .link:hover {
        opacity: 1;
        color: #E87B5A !important;
    }

    .link:hover::after {
        transform: scaleX(1);
    }

    .post-container {
        margin: 10px;
        overflow: hidden;
        transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
        cursor: pointer;
    }

    .post-container .post {
        background: transparent;
        height: 500px;
        width: 100%;
        position: relative;
        transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    }

    .post-container .post img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        transition: ease-in-out 600ms;
        filter: grayscale(0%);
    }

    .post-container .post .post-content {
        padding: 20px 20px 35px 20px;
        position: absolute;
        bottom: -150px;
        background: #fff;
        transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    }

    .post-container .post .post-content p{
        font-size: 18px;
    }

    .post-container:hover .post .post-content {
        bottom: -20px;
    }

    .post-container:hover .post img {
        filter: grayscale(80%) blur(2px) brightness(80%);;
    }

    .post-container:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        transform: translateY(-10px);
    }

    .footer-logo {
        position: relative;
    }

    .project-container {
        padding: 0 80px;
    }

    .title-container{
        padding: 0 80px;
    }

    .tab-container {
        width: 829px;
    }

    .about-container{
        padding: 0 80px;
    }

    .profile-image{
        width: 475px;
        height: 475px;
        border-radius: 50%;
        margin-bottom: 23px;
        border: 10px solid #fff;
        object-fit: cover;
        text-align: center;
    }

    .header {
        background: #f6f6f6;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0px;
        width: 100%;
        padding: 0 120px;
        z-index: 1000;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .text-title {
        font-size: 80px;
        font-weight: bold;
        margin-bottom: -20px;
        margin-top: -20px;
    }

    // Moblie view
    @media screen and (max-width: 576px) {
        .header {
            padding: 0 60px;
        }

        .text-title {
            font-size: 60px;
            font-weight: bold;
            margin-bottom: 23px;
            margin-top: -20px;
        }

        .container {
            padding: 15px 25px;
        }

        section {       
            margin: 0 0;
        }

        .footer-logo {
            display: none;
        }

        .project-container {
            padding: 0 0;
        }

        .title-container{
            padding: 0 0;
            transform: translateY(-60px);
        }

        .about-container{
            padding: 0 0;
        }

        .tab-container {
            width: auto;
        }

        .text-center-sm {
            text-align: center;
        }

        .tab-header a{
            display: block;
        }

        .profile-image{
            width: 300px;
            height: 300px;
        }
    }
`;
