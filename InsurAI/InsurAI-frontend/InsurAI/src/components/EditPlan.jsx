import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios.js";



export default function EditPlan() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [plan, setPlan] = useState({
    planName: "",
    description: "",
    premium: "",
    coverageAmount: "",
    type: ""
  });

  useEffect(() => {
    if (id !== "new") {
      api.get(`/admin/plans/${id}`).then((res) => setPlan(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (id === "new") {
      api.post(`/admin/plans`, plan).then(() => navigate("/admin/plans"));
    } else {
      api.put(`/admin/plans/${id}`, plan).then(() => navigate("/admin/plans"));
    }
  };

  return (
    <div>
      <h1>{id === "new" ? "Create Plan" : "Edit Plan"}</h1>

      <input name="planName" placeholder="Plan Name" value={plan.planName} onChange={handleChange} /><br />
      <input name="description" placeholder="Description" value={plan.description} onChange={handleChange} /><br />
      <input name="premium" placeholder="Premium" value={plan.premium} onChange={handleChange} /><br />
      <input name="coverageAmount" placeholder="Coverage Amount" value={plan.coverageAmount} onChange={handleChange} /><br />
      <input name="type" placeholder="Type" value={plan.type} onChange={handleChange} /><br />

      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        {id === "new" ? "Create" : "Update"}
      </button>
    </div>
  );
}
