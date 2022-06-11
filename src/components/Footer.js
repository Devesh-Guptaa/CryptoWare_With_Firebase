import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    icon: {
        backgroundColor: "#EEBC1D",
        paddingTop: 10,
        paddingBottom: 5,
        alignItems: 'center',
        display: "flex",
    },
    span: {
        width: "75%",
        alignItems: 'center',
        justifyContent: 'left',
        display: "flex",
        marginLeft: 30,
        color: "black",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.icon}>
            <span className={classes.span}>
                Contact Us
            </span>
            <SocialIcon url="https://instagram.com/devesh6703/" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://linkedin.com/in/devesh-gupta-8081061a0/" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://github.com/Devesh-Guptaa" />
        </div>
    )
}

export default Footer