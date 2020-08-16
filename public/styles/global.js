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
        margin: 44px;
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
`;
