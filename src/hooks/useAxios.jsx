import axios from "axios";



const useAxios = () => {
  const axiosWithToken = axios.create({
    baseURL: "https://12256.fullstack.clarusway.com/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return <div>useAxios</div>;
};

export default useAxios;
