import { useState, useEffect } from "react";

export default function Modelform({ isopen, onclose, onSubmit, mode, clientdata }) {
  const [rate, setRate] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(null); // store string, not boolean

  // ✅ Handle dropdown change (simplified)
  const handlestatuschange = (e) => {
    setStatus(e.target.value);
  };

  // ✅ Prefill or reset form when modal opens
  useEffect(() => {
    if (mode === "edit" && clientdata) {
      setName(clientdata.name || "");
      setEmail(clientdata.email || "");
      setJob(clientdata.job || "");
      setRate(clientdata.Rate || 0);
      setStatus(clientdata.status || "Inactive");
    } else if (mode === "add") {
      setName("");
      setEmail("");
      setJob("");
      setRate(0);
      setStatus("Inactive");
    }
  }, [mode, clientdata, isopen]);

  // ✅ Handle submit
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const newClientData = {
        name,
        email,
        job,
        rate: String(rate),
        status,
      };
      await onSubmit(newClientData);
      onclose();
    } catch (err) {
      console.error("❌ Error submitting form:", err);
    }
  };

  if (!isopen) return null;

  return (
    <dialog id="my_modal_2" className="modal" open={isopen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === "add" ? "Add New Item" : "Edit Item"}
        </h3>

        <form onSubmit={handlesubmit}>
          {/* Name */}
          <label className="input input-bordered my-4 flex items-center gap-2">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="grow"
              placeholder="Enter name"
            />
          </label>

          {/* Email */}
          <label className="input input-bordered my-4 flex items-center gap-2">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="grow"
              placeholder="Enter email"
            />
          </label>

          {/* Job */}
          <label className="input input-bordered my-4 flex items-center gap-2">
            Job
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              type="text"
              className="grow"
              placeholder="Enter job title"
            />
          </label>

          {/* Rate + Status */}
          <div className="flex mb-4 justify-between my-4 gap-3">
            <label className="input input-bordered flex items-center gap-2 w-1/2">
              Rate
              <input
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                type="number"
                className="grow"
                placeholder="Enter rate"
              />
            </label>

            {/* ✅ Correct status dropdown */}
            <select
              value={status}
              onChange={handlestatuschange}
              className="select select-bordered w-1/2"
            >
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-accent w-24"
              onClick={onclose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-success btn-primary w-24">
              {mode === "edit" ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
