import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";

const ProfilePage = () => {
  return (
    <PageBodyWrapper>
      <div className="flex flex-col items-center mt-4 mb-4">
        <img
          src={new URL("/photo.jpg", import.meta.url).href}
          alt=""
          className="rounded-2xl size-1/3"
        />
        <p className="text-copy-primary font-poppins">username</p>
      </div>
    </PageBodyWrapper>
  );
};

export default ProfilePage;
