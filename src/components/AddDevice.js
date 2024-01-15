import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddDevice() {

    const url = 'http://localhost:4000/devices/add-device';

    const [userForm, setUserForm] = useState({
        deviceName: "",
        deviceType: "",
        status: "",
        locked: false
    });

    let navigate = useNavigate();

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(url, userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    deviceName: "",
                    deviceType: "",
                    status: "",
                    locked: false
                });
            });
        navigate("/device-list");
    };

    useEffect(() => { }, []);
    return (
        <div>
            <div className="form-wrapper">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Device Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="deviceName"
                            id="deviceName"
                            value={userForm.deviceName}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Device Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="deviceType"
                            id="deviceType"
                            value={userForm.deviceType}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            name="status"
                            id="status"
                            value={userForm.status}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddDevice;