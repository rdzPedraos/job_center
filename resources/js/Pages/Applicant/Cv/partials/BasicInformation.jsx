//Lugar de nacimiento, lugar de expediciion, fechas
import React, { useContext } from "react";
import { ProfileMenuContext } from "@/Context/ProfileContext";
import { Button } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

function BasicInformation() {
    const { setShowProfileDrawer, user } = useContext(ProfileMenuContext);

    return (
        <section>
            <div className="float-right">
                <Button onClick={() => setShowProfileDrawer(true)}>
                    <EditOutlined />
                </Button>
            </div>

            <div className="flex gap-10 items-center">
                <img
                    alt="Tú imágen"
                    src={
                        "storage/" + user.photo_url + "?" + new Date().getTime()
                    }
                    className="w-[150px] h-[150px] object-cover object-center"
                    style={{
                        borderRadius: " 116px 100px 116px 8px",
                    }}
                />

                <div>
                    <p className="text-2xl font-bold">{user.name}</p>
                    <p>{user.document_type_info.str}</p>
                    <p>
                        {user.email}, {user.phone_number}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default BasicInformation;
