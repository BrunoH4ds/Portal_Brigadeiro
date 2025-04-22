import SingleItemUsers from "./SingleItemUsers";

export interface UserListProps {
  usersToDisplay: any[];
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  allFilteredUsers: any[];
  openModal: (user?: any) => void;
}

export default function UserList({
  usersToDisplay,
  visibleCount,
  setVisibleCount,
  allFilteredUsers,
  openModal,
}: UserListProps) {
  return (
    <>
      {usersToDisplay.map((user) => (
        <SingleItemUsers key={user._id} {...user} openModal={openModal} />
      ))}
      {visibleCount < allFilteredUsers.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="self-center cursor-pointer text-white px-6 py-2 rounded bg-blue-900 hover:bg-blue-800"
        >
          Mostrar mais
        </button>
      )}
    </>
  );
}
