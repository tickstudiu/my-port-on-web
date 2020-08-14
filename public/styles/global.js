import css from "styled-jsx/css";

export default css.global`
    .text-code ::before {
         content: "{ ";
    }
    
    .text-code ::after {
         content: " }";
    }

    .display-1 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 22px;
    }

    .display-2 {
        color: #E87B5A !important;
        font-size: 20px;
        margin: 0;
    }

    .container {
        margin: 44px;
        padding: 48px 70px;
        background-color: #f6f6f6;
    }

    .lead {
        max-width: 678px;
        font-size: 20px;
        color: #D0D4D5;
        text-align: center;
        margin-bottom 45px;
    }

    .list {
        margin-bottom 45px;
    }

    .item {
        float: left;
        padding-right: 45px;
        font-size: 20px;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    
        margin: 0 130px;
        height: 100vh;
    }
`;
