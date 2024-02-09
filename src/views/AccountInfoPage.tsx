import * as React from "react";
import { useAppDispatch } from "../redux/RouteStore";
import { useNavigate } from "react-router";
import TableAxios from "../list/TableAxios";
import TableBasic from "../list/TableBasic";
import TableJson from "../list/TableJson";
import Protofile from "../inform/protofile";
import Inform from "../inform/inform";
import Health from "../inform/health";
import Family from "../inform/family";

export default function AccountInfoPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate;

  return (
    <>
      <TableBasic />
      <br />
      <React.StrictMode>
        <Protofile />
        <Inform />
        <br />
        <Health />
        <br />
        <Family />
      </React.StrictMode>
    </>
  );
}
