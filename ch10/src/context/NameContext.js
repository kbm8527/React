import { createContext } from "react";
//전역으로 관리할 데이터 생성

const NameContext = createContext({ name: "noname" });
export default NameContext;
