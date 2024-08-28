import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";
import FriendTeamSelectButton from "../buttons/FriendTeamSelectButton.tsx";
import FriendsTable from "../tables/FriendsTable.tsx";
import usersStore from "../../stores/UsersStore.ts";

const FriendsPage = () => {

  return (
    <PageBodyWrapper>
      <FriendTeamSelectButton />
      <FriendsTable friends={usersStore.friends}/>
    </PageBodyWrapper>
  );
};

export default FriendsPage;
