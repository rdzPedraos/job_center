export const INPUTS = [
    {
        id: "title",
        label: "Palabra Clave",
        placeholder: "Busca una palabra clave...",
        format: "text",
    },
    {
        id: "faculty",
        type: "autocomplete",
        label: "Ingrese la facultad",
        placeholder: "Facultad...",
        id_options: "academicFaculties",
    },

    {
        id: "academic_program",
        type: "autocomplete",
        label: "Ingrese el programa académico",
        placeholder: "Carrera...",
        id_options: "academicPrograms",
    },

    {
        id: "salary",
        type: "slider",
        set_limits: "salaryLimits",
        step: 1000,
    },

    /* {
        id: "laboral_experience",
        type: "checkbox_group",
        options: [
            "Sin Experiencia",
            "1-2 años de experiencia",
            "3-5 años de experiencia",
            "+5 años de experiencia",
        ],
    },

    {
        id: "academic_experience",
        type: "checkbox_group",
        id_options: "vinculationTypes",
        options: ["Bachiller", "Pregrado", "Posgrado"],
    }, */

    {
        id: "vinculation_type",
        type: "checkbox_group",
        id_options: "vinculationTypes",
    },

    {
        id: "dedication_time",
        type: "checkbox_group",
        id_options: "dedicationTimes",
    },
];
