import axios from "axios";
import { server_domain } from "./server_domain";

const serverApi = `${server_domain}/api` ;



export const getRoomExist = async (roomId) => {
    const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
    return response.data; 
}



