import TimelineComponent from "@/Components/TimelineComponent";
import TitleComponent from "@/Components/main/Title";
import { Head } from "@inertiajs/react";
import { Circle } from "@mui/icons-material";
import { Card, CardContent, Chip } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function SeePostulations({ JobStatuses, JobRequests }) {
    const [filter, setFilter] = useState(null);

    return (
        <>
            <Head title="Mis postulaciones" />

            <div className="md:w-5/6 lg:w-5/6 xl:w-2/3 mx-auto">
                <div className="flex gap-3 mt-10 mb-7">
                    <Chip
                        label="Todas"
                        variant={filter === null ? "filled" : "outlined"}
                        sx={{
                            backgroundColor: filter === null ? "none" : "white",
                        }}
                        onClick={() => setFilter(null)}
                    />
                    {JobStatuses.map(({ id, name }) => {
                        const label =
                            name.charAt(0).toUpperCase() +
                            name.slice(1).toLowerCase();

                        const active = filter === id;

                        return (
                            <Chip
                                label={label}
                                sx={{
                                    backgroundColor: active ? "none" : "white",
                                }}
                                onClick={() => setFilter(id)}
                                variant={active ? "filled" : "outlined"}
                            />
                        );
                    })}
                </div>

                <div className="grid grid-cols-[1fr_400px] gap-16">
                    <div className="flex flex-col gap-5">
                        {JobRequests.map(
                            (request) =>
                                (filter === null ||
                                    filter ===
                                        request.job_request_status_id) && (
                                    <Card>
                                        <CardContent>
                                            <p className="text-lg">
                                                {request.job.title}
                                            </p>
                                            <p className="lowercase first-letter:uppercase text-gray-400">
                                                {
                                                    request.job.academic_program
                                                        .name
                                                }
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                        )}
                    </div>

                    <div>
                        <Card>
                            <CardContent>
                                <img
                                    src="storage\img\focus-photo.png"
                                    className="w-2/3 mx-auto"
                                />

                                <p className="my-4">
                                    Estos son los estados en los que puede estar
                                    tú postulación:
                                </p>

                                <ul>
                                    {JobStatuses.map(({ id, name }) => (
                                        <li className="flex gap-2">
                                            <Circle
                                                fontSize="small"
                                                color={
                                                    filter === id
                                                        ? "primary"
                                                        : "secondary"
                                                }
                                                className="drop-shadow"
                                            />
                                            <p className="lowercase first-letter:uppercase">
                                                {name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
