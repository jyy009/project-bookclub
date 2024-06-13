export const ProfileCard = ({ name, email, address }) => {
  return (
    <table className="text-left font-worksans md:text-lg lg:text-xl">
      <tbody>
        <tr>
          <th className="pr-2 md:pr-6">Name:</th>
          <th>{name}</th>
        </tr>
        <tr>
          <th className="pr-2 md:pr-6">Email:</th>
          <th>{email}</th>
        </tr>
        <tr>
          <th className="pr-2 md:pr-6">Address:</th>
          <th>{address}</th>
        </tr>
      </tbody>
    </table>
  );
};
