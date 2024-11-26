import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const BilgiList = ({ tutorials, deleteBilgi }) => {
  // console.log(tutorials);
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((a) => (
            <tr>
              <th>{a.id}</th>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td className="text-center">
                <AiFillDelete
                  type="button"
                  className="text-danger"
                  size={22}
                  onClick={() => deleteBilgi(a.id)}
                />

                <FaEdit
                size={20}
                className="text-warning"
                 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
    </div>
  );
};

export default BilgiList;
