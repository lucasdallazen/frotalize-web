// src/modules/Drivers.tsx

import FrotalizeTable from "../../components/FrotalizeTable";

export default function Drivers() {

  const driversData = [
    {
      key: '1',
      name: 'Alice Smith',
      age: 28,
      address: '123 Main St, Cityville',
      license: 'A123-4567-8901',
    },
    {
      key: '2',
      name: 'Bob Johnson',
      age: 35,
      address: '456 Oak Ave, Townsville',
      license: 'B987-6543-2109',
    },
    {
      key: '3',
      name: 'Charlie Brown',
      age: 30,
      address: '789 Elm Blvd, Villagetown',
      license: 'C567-8901-2345',
    },
    {
      key: '4',
      name: 'Diana Davis',
      age: 25,
      address: '321 Cedar Rd, Hamlet',
      license: 'D543-2109-8765',
    },
  ];


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'License Number',
      dataIndex: 'license',
      key: 'license',
    },
  ];
  return (
    <div>

      <FrotalizeTable tableTitle="Motoristas" columns={columns} dataSource={driversData} />
    </div>
  );
}
