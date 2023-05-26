import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Card from './Card';
import Info from './Info';
import Waiting from './Waiting';
import Header from '../JobCard/Header';

import { Button } from '@mui/material';
import { Diversity1, Style } from '@mui/icons-material';

function JobDrawer({ jobId }) {
    const [jobInfo, setJobInfo] = useState(null);
    const [requirements, setRequeriments] = useState([]);
    const [functions, setFunctions] = useState([]);

    //Bring job information
    useEffect(() => {
        if (jobId === null) return;

        axios
            .post(route('applicant.job.offer.show', jobId))
            .then(({ data }) => {
                setJobInfo(data);
            })
            .catch(() => {
                console.log('error');
            });
    }, [jobId]);

    //We separate information between requirements and functions
    useEffect(() => {
        if (jobInfo === null) return;
        const { details } = jobInfo;

        setRequeriments(
            details
                .filter(({ detail_type }) => detail_type == 'R')
                .map(({ description }) => description)
        );

        setFunctions(
            details
                .filter(({ detail_type }) => detail_type == 'F')
                .map(({ description }) => description)
        );
    }, [jobInfo]);

    const toApply = e => {
        e.preventDefault();
        axios
            .post(route('applicant.job.offer.store'), { id: jobInfo.id })
            .then(data => {
                setJobInfo(prev => ({ ...prev, is_registered: true }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (jobInfo === null) {
        return <Waiting />;
    }

    return (
        <div className="grid gap-5 relative">
            <Header job={jobInfo} />

            {/* Cards con información de las vacantes y el programa */}
            <div className="grid grid-cols-2 gap-5">
                <Card
                    icon={<Diversity1 />}
                    content={
                        <>
                            <p className="font-bold">Vacantes</p>
                            <p className="text-sm lowercase first-letter:uppercase">
                                {jobInfo.vacancies +
                                    (jobInfo.vacancies > 1 ? ' Vacantes' : ' Vacante')}
                            </p>
                        </>
                    }
                />
                <Card
                    icon={<Style />}
                    content={
                        <>
                            <p className="font-bold">Programa</p>
                            <p className="text-sm lowercase first-letter:uppercase">
                                {jobInfo.academic_program.name} <br />
                            </p>
                        </>
                    }
                />
            </div>

            <Info jobInfo={jobInfo} requirements={requirements} functions={functions} />

            <form onSubmit={toApply}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={jobInfo.is_registered}
                >
                    {jobInfo.is_registered ? 'Ya has aplicado' : 'aplicar'}
                </Button>
            </form>
        </div>
    );
}

JobDrawer.propTypes = {
    jobId: PropTypes.number,
};

export default JobDrawer;
