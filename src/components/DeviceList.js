import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DeviceList() {

    const url = 'https://mern-app-k6b4.onrender.com/devices/';

    const [deviceForm, setDeviceForm] = useState([]);

    const deleteDevice = (_id) => {
        axios
            .delete(url + "delete-device/" + _id)
            .then(() => {
                console.log("Data successfully deleted!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setDeviceForm(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deviceForm]);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Device Name</th>
                        <th scope="col">Device Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Locked</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {deviceForm.map((device, index) => {
                        return (
                            <tr key={index}>
                                <td>{device.deviceName}</td>
                                <td>{device.deviceType}</td>
                                <td>{device.status}</td>
                                <td>{device.locked ? "locked" : "unlocked"}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary btn-sm me-2"
                                        to={"/edit-device/" + device._id}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteDevice(device._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default DeviceList;

