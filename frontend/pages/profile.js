import React from "react";
import AppLayout from "../component/Applayout";
import NicknameEditForm from "../component/NicknameEditForm";
import FollowList from "../component/FollowList";

const Profile = () => {
  const follwerList = [
    { nickname: "제로초" },
    { nickname: "멍청이" },
    { nickname: "바보" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "멍청이" },
    { nickname: "바보" },
  ];

  return (
    <>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={follwerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
