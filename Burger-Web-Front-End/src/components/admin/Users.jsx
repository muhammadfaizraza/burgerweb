import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import me from "../../assets/ceo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminUser } from "../../Redux/actions/admin";
import Loader from "../layout/Loader";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.admin);

  console.log(users, "aaya");

  useEffect(() => {
    dispatch(getAdminUser());
  }, [dispatch]);

  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>

                <th>Since</th>
              </tr>
            </thead>
            {users &&
              users.map((i) => (
                <tbody key={i}>
                  <tr>
                    <td> {i.googleId}</td>
                    <td>{i.name}</td>
                    <td>
                      <img src={i.photo} alt="" />
                    </td>
                    <td>{i.role} </td>
                    <td> {i.createdAt.split("T")[0]}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Users;
