import React from "react";
import { useState, useContext } from "react";
import { ProfileMenuContext } from "./MenuContext";

import SettingsComponent from "./Settings";
import ProfileComponent from "./update";

import { ExpandLess } from "@mui/icons-material";
import { Avatar, Badge, Drawer } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const { user, showProfileDrawer, setShowProfileDrawer } =
        useContext(ProfileMenuContext);

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
                        <SettingsComponent />
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
