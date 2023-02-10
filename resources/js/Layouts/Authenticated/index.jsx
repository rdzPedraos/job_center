import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { NotificationsOutlined } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import ItemMenu from "./ItemMenu";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="h-screen w-screen flex flex-col">
            <header className="px-10 grid grid-cols-[auto,1fr,auto] gap-24 border-b-2">
                <div className="my-4">
                    <ApplicationLogo txtSize="xl" imgSize="7" />
                </div>

                <nav>
                    <ul className="h-full flex gap-4">
                        <ItemMenu text="Encontrar Trabajo" active={true} />
                        <ItemMenu text="Postulaciones" />
                        <ItemMenu text="Hoja de Vida" />
                    </ul>
                </nav>

                {/* notifications and users */}
                <section className="h-full flex gap-6 items-center">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsOutlined />
                    </Badge>
                    <Avatar alt="Trevor" src="storage/profile-img/trevor.jpg" />
                </section>
            </header>

            <main className="bg-base_white h-full">
                <Link method="post" href={route("logout")} as="button">
                    Salir
                </Link>
                {children}
            </main>
        </div>
    );
}
