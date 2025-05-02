import React from "react";
import UserNavbar from "../../components/userNavigation";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>Welcome to Campus Plug</h1>
          <p className="lead">You have successfully logged in.</p>
        </div>
      </div>
      <footer className=" text-white py-3">
        <UserNavbar />
      </footer>
    </div>
  );
};

export default Home;