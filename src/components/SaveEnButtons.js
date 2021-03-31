import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React from "react";

const SaveEnButtons = (props) => {
    const { label, color, hcolor, mw, p,f } = props;
    return (
        <Button
            bg={color}
            _hover={{ bg: `${hcolor}` }}
            minWidth={mw}
            fontWeight="normal"
            fontSize={f}
            py={p}
            borderRadius="50"
            boxShadow="0px 5px 0px rgba(0, 0, 0, 0.2);"
            position="relative"
            onClick
        >
            {label}</Button>
    )
}


export const SpecificButton = () => {
    return (
        <Link to='/branchSelect' _hover={{ textDecoration: "none" }}>
            <SaveEnButtons
                label="Specific Branch Performance"
                color="#7CFAF2"
                hcolor="#70F3EB"
                mw="380"
                p="12"
                f="2xl">
            </SaveEnButtons>
        </Link>
    )
}

export const OverallButton = () => {
    return (
        <SaveEnButtons
            label="Overall Performance"
            color="#FDC4C4"
            hcolor="#F7BCBC"
            mw="380"
            p="12"
            f="2xl">
        </SaveEnButtons>
    )
}

export const DailyButton = (props) => {
    const { url } = props
    return (
        <Link to={url}>
            <SaveEnButtons
                label="Daily Report"
                color="#FFE6E4"
                hcolor="#FFD9D7"
                mw="200"
                p="9"
                f="xl">
            </SaveEnButtons>
        </Link>
    )
}

export const MonthlyButton = (props) => {
    const { url } = props
    return (
        <Link to={url}>
            <SaveEnButtons
                label="Monthly Report"
                color="#FFDDC5"
                hcolor="#F8D1B5"
                mw="200"
                p="9"
                f="xl">
            </SaveEnButtons>
        </Link>
    )
}

export const LoginButton = () => {
    return (
        <Link to="/main">
            <SaveEnButtons
                label="Enter"
                color="#8BD9EB"
                hcolor="#83D1E2"
                mw="150"
                p="5"
                f="xl"
            />
        </Link>
    )
}