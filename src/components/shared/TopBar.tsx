import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutation";
import { useUserContext } from "@/context/AuthContext";

const TopBar = () => {
  const navigation = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { user } = useUserContext();
  useEffect(() => {
    if (isSuccess) {
      navigation(0);
    }
  }, [isSuccess]);
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to={"/"} className="flex gap-3 items-center">
          <img src="/public/assets/images/logo.svg" alt="" />
        </Link>
        <div className="flex gap-4 items-center">
          <Button
            variant={"ghost"}
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <img src="/public/assets/icons/logout.svg" alt="" />
          </Button>
          <Link to={`profile/${user.id}`}>
            <img
              className="h-8 w-8"
              src={user.imageUrl || "/public/assets/images/profile.png"}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
