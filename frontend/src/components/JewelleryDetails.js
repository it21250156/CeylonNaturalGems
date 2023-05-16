import { Link } from "react-router-dom";
import { useJewelleryesContext } from "../hooks/useJewelleryesContext";
import ConfirmationModal from './ConfirmationModal';
import { useState } from "react";

import '../CSS/JewellAdmin.css';

const JewelleryDetails = ({ jewellery }) => {
  const { dispatch } = useJewelleryesContext();
  const [showModal, setShowModal] = useState(false);
  
  const handleDelete = async () => {
    const response = await fetch("/api/jewelleryes/" + jewellery._id, {
      method: "DELETE",
    });
    

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JEWELLERY", payload: json });
      window.location.reload();
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    handleDelete();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleUpdate = async () => {
    const response = await fetch("/api/jewelleryes/" + jewellery._id, {
      method: "PATCH",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_JEWELLERY", payload: json });
    }
  };

  return (
    <>
      <div className="jewellery-details">
        <div className="jewBox">
        <h4>{jewellery.name}</h4>
        <p>
          <strong>Type: </strong>
          {jewellery.type}
        </p>
        <p>
          <strong>Gender: </strong>
          {jewellery.gender}
        </p>
       
        <p>
          <strong>Metal: </strong>
          {jewellery.metal}
        </p>
        <p>
          <strong>Gemstone: </strong>
          {jewellery.gemstone}
        </p>
        <p>
          <strong>Description: </strong>
          {jewellery.description}
        </p>
        <p>
          <strong>Price: $.</strong>
          {jewellery.price}/=
        </p>
        <p>
          <strong>Added Date: </strong>
          {jewellery.createdAt}
        </p>
        <button className="JewdeleteButton" onClick={() => setShowModal(true)}>
          delete
        </button>
        

        <button 
          className="JewupdateButton"
          onClick={() => window.location.href = `/UpdateJewelleryes/${jewellery._id}`}
        >
          Update
        </button>

        {showModal && (
          <ConfirmationModal
            message="Are you sure you want to delete this jewellery?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
        </div>
      </div>
    </>
  );
};

export default JewelleryDetails;
