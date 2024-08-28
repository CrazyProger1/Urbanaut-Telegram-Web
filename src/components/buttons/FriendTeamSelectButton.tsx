const FriendTeamSelectButton = () => {
  return (
    <div className="flex flex-row mt-4 mb-4">
      <div className="bg-card rounded-l-2xl w-1/2 text-center text-copy-primary hover:bg-selection">
        <p className="p-2">Friends</p>
      </div>
      <div className="bg-card rounded-r-2xl  w-1/2 text-center text-copy-primary hover:bg-selection">
        <p className="p-2">Teams</p>
      </div>
    </div>
  );
};

export default FriendTeamSelectButton;
