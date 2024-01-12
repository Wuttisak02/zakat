import * as React from "react";
import { useAppDispatch } from "../redux/RouteStore";
import { useNavigate } from "react-router";

export default function AccountInfoPage(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate;
    
    return (
        <>
        Account Info Page
        </>
    );
}