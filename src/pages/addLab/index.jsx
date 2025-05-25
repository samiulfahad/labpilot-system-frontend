import React, { useState } from "react";
import LabFormPublic from "../../components/forms/labForm/LabForm";
import api from "../../service/http";
import Modal from "../../components/modal";

const AddLab = () => {
  const [status, setStatus] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (labData) => {
    try {
      console.log(labData)
      setStatus("processing")
      setMsg("Submitting Data....")
      const response = await api.post('/v1/system/add/lab', labData)
      if (response.data.success) {
        setStatus("success")
        setMsg("Lab Added Successfully")
      } else {
        setStatus("error")
        setMsg("Something went wrong. Check console for details")
        console.log(response.data)
      }

    } catch (e) {
      setStatus("error")
      setMsg("Something went wrong. Check console for details")
      console.log(response.data)
    }
  };

  const closeModal = () => {
    setStatus("")
    setMsg("")
  }

  const handleStatus = status => {
    setStatus(status)
  }

  const handleMsg = msg => {
    console.log(msg)
    setMsg(msg)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {status === "processing" && <Modal type="processing" title={msg} />}
      {status === "error" && <Modal type="error" title={msg} onClose={closeModal} />}
      {status === "success" && <Modal type="success" onCloFse={closeModal} />}
      <LabFormPublic onSubmit={handleSubmit} setStatus={handleStatus} setMsg={handleMsg} />
    </div>
  );
};

export default AddLab;