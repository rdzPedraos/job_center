import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { INPUTS } from "@/Config/offerFilterForm";
import MultiInput from "@/Components/form/MultiInput";
import { usePage } from "@inertiajs/react";

export const JobOfferFiltersContext = createContext();

export function JobOfferFiltersProvider({ children }) {
    const inputs = [];

    const [filters, setFilters] = useState({});
    const [jobs, setJobs] = useState([]);
    const [errors, setErrors] = useState({});
    const [pagination, setPagination] = useState({
        per_page: 5,
        page: 1,
    });

    INPUTS.forEach((input) => {
        const { id } = input;

        if (input.id_options) {
            input.options = usePage().props[input.id_options];
        }

        if (input.set_limits) {
            const limits = usePage().props[input.set_limits];
            input.min = parseInt(limits.min);
            input.max = parseInt(limits.max);
        }

        inputs[id] = (
            <MultiInput
                input={input}
                value={filters[id]}
                error={errors[id]}
                onHandleChange={(e) => {
                    const { name, value } = e.target;
                    delete errors[id];
                    setFilters({ ...filters, [name]: value });
                    setErrors(errors);
                }}
            />
        );
    });

    const cleanFilters = () => {
        setFilters({});
        setErrors({});
    };

    const onSubmit = ({ page, per_page } = pagination) => {
        axios
            .post(route("applicant.job.offer.filter"), {
                ...filters,
                page,
                per_page,
            })
            .then(({ data: { data, current_page, total, per_page } }) => {
                setJobs(data);
                setPagination({
                    page: current_page,
                    total,
                    per_page,
                });
            })
            .catch(({ response: { data } }) => {
                setErrors(
                    Object.keys(data.errors).reduce((acc, key) => {
                        acc[key] = data.errors[key].join(" y ");
                        return acc;
                    }, {})
                );
            });
    };
    useEffect(onSubmit, [filters]);

    return (
        <JobOfferFiltersContext.Provider
            value={{
                pagination,
                jobs,
                inputs,
                filters,
                setFilters,
                cleanFilters,
                onSubmit,
            }}
        >
            {children}
        </JobOfferFiltersContext.Provider>
    );
}
