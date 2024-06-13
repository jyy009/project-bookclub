export const ProfileCard = ({ name, email, address }) => {
  return (
    <table className="text-left font-worksans md:text-lg lg:text-xl">
      <tbody>
        <tr>
          <th>Name:</th>
          <th>{name}</th>
        </tr>
        <tr>
          <th>Email:</th>
          <th>{email}</th>
        </tr>
        <tr>
          <th>Address:</th>
          <th>{address}</th>
        </tr>
      </tbody>
    </table>
  );
};
