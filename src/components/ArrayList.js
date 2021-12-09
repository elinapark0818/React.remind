import React from "react";

function ArrayList() {
  const users = [
    {
      id: 1,
      name: "elina",
      email: "a@a.com",
    },
    {
      id: 2,
      name: "brain",
      email: "b@b.com",
    },
    {
      id: 3,
      name: "carina",
      email: "c@c.com",
    },
    {
      id: 4,
      name: "delly",
      email: "d@d.com",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

function User({ user }) {
  return (
    <div>
      <b>{user.name}</b> <span>{user.email}</span>
    </div>
  );
}

export default ArrayList;
