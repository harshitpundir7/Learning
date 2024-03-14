import Image from "next/image";
import axios from "axios";

async function getUserData(){
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
};
// create this an async component this concpt is not in React and in next js but recently they introduce the asyncronous component feature
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails.name}
                </div>
                
                {userDetails.email}
            </div>
        </div>
    </div>
    );
}
