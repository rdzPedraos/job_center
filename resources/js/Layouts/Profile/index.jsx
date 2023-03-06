import React from "react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import SettingsComponent from "./Settings";
import { ExpandLess } from "@mui/icons-material";
import { Avatar, Badge, Drawer } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import UpdateProfileComponent from "./update";
import { useEffect } from "react";

export default function ProfileComponent() {
    const [open, setOpen] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [documentTypes, setDocumentTypes] = useState([]);

    const handleShowDrawer = (val) => {
        setShowDrawer((prev) => val ?? !prev);
        setOpen(false);
    };

    const user = usePage().props.auth.user;
    useEffect(() => {
        axios
            .get("api/documentTypes")
            .then((res) => setDocumentTypes(res.data));
    }, []);

    return (
        <section className="flex relative h-full gap-6 items-center">
            <p>{user.first_name + " " + user.first_surname}</p>

            <Badge
                color="secondary"
                overlap="circular"
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClick={() => setOpen((prev) => !prev)}
                badgeContent={
                    <motion.div
                        animate={open ? "open" : "close"}
                        variants={{ close: { rotate: -180 } }}
                        className="w-2 flex justify-center"
                    >
                        <ExpandLess />
                    </motion.div>
                }
                sx={{
                    "&:hover": {
                        cursor: "pointer",
                        opacity: 0.9,
                    },
                }}
            >
                <Avatar alt="Trevor" src="/storage/profile-img/trevor.jpg" />
            </Badge>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ maxHeight: 0, translateY: -10 }}
                        animate={{
                            maxHeight: 1000,
                            translateY: 0,
                        }}
                        exit={{ maxHeight: 0 }}
                        className="absolute top-24 right-0 bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <SettingsComponent
                            handleShowProfile={handleShowDrawer}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Drawer
                anchor="right"
                open={showDrawer}
                onClose={() => handleShowDrawer(false)}
            >
                <UpdateProfileComponent
                    user={user}
                    documentTypes={documentTypes}
                />
            </Drawer>
        </section>
    );
}
