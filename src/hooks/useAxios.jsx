import axios from "axios";
import { useSelector } from "react-redux";


const useAxios = () => {
  const {token} = useSelector((state) =>state.auth)

  const axiosPublic = axios.create({
    baseURL: "https://12256.fullstack.clarusway.com/",
    headers: { "Authorization": `Token ${ token}`}
  })
  const axiosWithToken = axios.create({
    baseURL: "https://12256.fullstack.clarusway.com/",
    headers: { "Authorization": `Token ${ token}`}
  })

  return {axiosWithToken,axiosPublic}
};

export default useAxios;



//Token : Token c5923a4a781411ed638a36e131ce62376c989f99