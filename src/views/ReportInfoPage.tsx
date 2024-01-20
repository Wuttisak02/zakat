import * as React from "react";
import { useAppDispatch } from "../redux/RouteStore";
import { useNavigate } from "react-router";

export default function ReportInfoPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate;

  return <>Report Info Page</>;
}
