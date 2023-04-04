import { AssuredWorkloadOutlined, WorkOutline } from "@mui/icons-material";

export const BiografyInputs = [
    {
        id: "info_to_update",
        value: "biografy",
        type: "noDisplay",
    },
    {
        id: "biografy_title",
        label: "Breve titulo del curriculum",
        type: "textarea",
    },
    {
        id: "biografy_content",
        label: "Cuentanos sobre ti!",
        type: "textarea",
        maxRows: 5,
    },
];

export const LaboralExperienciesInputs = [
    {
        id: "info_to_update",
        value: "laboral_experiencie",
        type: "noDisplay",
    },
    {
        id: "id",
        type: "noDisplay",
    },
    {
        id: "company_name",
        label: "Nombre de la empresa",
        icon: AssuredWorkloadOutlined,
        placeholder: "Empresa...",
        type: "autocomplete",
        options: ["Google", "Universidad Nacional"],
    },
    {
        id: "company_city_id",
        label: "Ciudad donde se encuentra la empresa",
        type: "select",
        id_options: "cities",
    },
    {
        id: "position",
        label: "Cargo ocupado",
        icon: WorkOutline,
        placeholder: "Docente...",
        type: "autocomplete",
        options: ["Desarrollador FullStack", "Docente"],
    },
    {
        id: "description",
        label: "Descripción, actividades realizadas",
        type: "textarea",
    },
    {
        id: "start_date",
        label: "Fecha de inicio",
        type: "date",
    },
    {
        id: "end_date",
        label: "Fecha de terminación",
        type: "date",
    },
];

export const AcademicStudiesInputs = [
    {
        id: "info_to_update",
        value: "academic_studies",
        type: "noDisplay",
    },
    {
        id: "id",
        type: "noDisplay",
    },
    {
        id: "education_level_id",
        label: "Nivel educativo",
        type: "select",
        id_options: "education_levels",
    },
    {
        id: "degree",
        label: "Titulo académico",
        type: "autocomplete",
        options: ["Ingenieria en sistemas"],
    },
    {
        id: "institution_name",
        label: "Institución educativa",
        type: "autocomplete",
        options: ["Unitrópico"],
    },
    {
        id: "record_number",
        label: "Número de registro",
    },
    {
        id: "professional_card_number",
        label: "Tarjeta profesional (si la tiene)",
    },
    {
        id: "start_date",
        label: "Fecha de inicio",
        type: "date",
    },
    {
        id: "end_date",
        label: "Fecha de terminación",
        type: "date",
    },
];
