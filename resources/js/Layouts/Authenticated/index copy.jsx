import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { Drawer } from "@mui/material";

export default function AuthenticatedLayout({ children }) {
    const [open, setOpen] = useState(false);
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleDrawerToggle = () => {
        setOpen(false);
    };

    return (
        <div className="flex w-full">
            <Drawer
                variant="temporary"
                open={true}
                onClose={handleDrawerToggle}
            >
                <ul>
                    <li>Lista 1</li>
                    <li>Lista 2</li>
                    <li>Lista 3</li>
                </ul>
            </Drawer>
            <main>
                <Link href={route("logout")} method="post" as="button">
                    Salir
                </Link>
            </main>
        </div>
    );
}
