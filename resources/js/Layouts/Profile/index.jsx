import React, { useState, useContext } from "react";
import { ProfileMenuContext } from "@/Context/ProfileContext";

import SettingsComponent from "./Settings";
import ProfileComponent from "./update";

import { ExpandLess } from "@mui/icons-material";
import { Avatar, Badge, Drawer } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileMenu({ addOptions = [] }) {
    const [open, setOpen] = useState(false);

    const { user, showProfileDrawer, setShowProfileDrawer } =
        useContext(ProfileMenuContext);

    return (
        <section className="flex relative h-full gap-6 items-center">
            <p className="text-right">
                {user.first_name + " " + user.first_surname}
            </p>

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
                <Avatar
                    alt="Tú foto"
                    src={
                        "storage/" + user.photo_url + "?" + new Date().getTime()
                    }
                />
            </Badge>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="absolute z-10 top-20 right-0 bg-white shadow-md rounded-lg overflow-hidden"
                        initial={{ height: 0, translateY: -10 }}
                        animate={{
                            height: "auto",
                            translateY: 0,
                        }}
                        exit={{ height: 0 }}
                    >
                        <SettingsComponent addOptions={addOptions} />
                    </motion.div>
                )}
            </AnimatePresence>

            <Drawer
                anchor="right"
                open={showProfileDrawer}
                onClose={() => setShowProfileDrawer(false)}
            >
                <ProfileComponent />
            </Drawer>
        </section>
    );
}
