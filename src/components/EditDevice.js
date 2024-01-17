import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditDevice() {

    const url = 'https://adorable-frog-jumpsuit.cyclic.app/devices/';

    const [userForm, setUserForm] = useState({
        deviceName: "",
        deviceType: "",
        status: "",
        locked: false
    });

    let params = useParams();
    let navigate = useNavigate();

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const onUpdate = (e) => {
        e.preventDefault();
        axios
            .put(url + "update-device/" + params.id, {
                deviceName: userForm.deviceName,
                deviceType: userForm.deviceType,
                status: userForm.status,
                locked: userForm.locked
            })
            .then((res) => {
                console.log({ status: res.status });
                navigate("/device-list");
            });
    };

    useEffect(() => {
        axios
            .get(url + "get-device/" + params.id)
            .then((res) => {
                setUserForm({
                    deviceName: res.data.data.deviceName,
                    deviceType: res.data.data.deviceType,
                    status: res.data.data.status,
                    locked: res.data.data.locked
                });
            });
    }, []);

    return (
        <div>
            <div className="form-wrapper">
                <form onSubmit={onUpdate}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditDevice;