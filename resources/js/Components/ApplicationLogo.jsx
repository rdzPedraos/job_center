import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import { Button } from '@mui/material';

const logoUrl = 'storage/images/logo.png';

export default function ApplicationLogo({
    justIcon = false,
    txtSize = '2xl',
    imgSize = '10',
    gapSize = '3',
    className,
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={'flex ' + className}>
            {/* Logo */}
            <button
                onClick={() => setOpen(true)}
                className={`flex items-center gap-${gapSize} hover:opacity-80`}
                title="Ir al inicio"
            >
                <img
                    src={logoUrl}
                    className={`w-${imgSize}`}
                    alt="Escudo Universitario"
                />
                {!justIcon && (
                    <h1
                        className={`text-gray-600 font-extrabold text-${txtSize}`}
                    >
                        Logo
                    </h1>
                )}
            </button>

            {/*  Modal para salir de la página */}
            <Modal
                useOpen={[open, setOpen]}
                modalStatus="warning"
                title="¿Estás seguro de esta acción?"
                content="Serás redireccionado a la página principal ¿seguro de
                        querer hacer esto?"
                dialogActions={
                    <>
                        <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Link href="/">
                            <Button
                                variant="contained"
                                onClick={() => setOpen(false)}
                            >
                                Continuar
                            </Button>
                        </Link>
                    </>
                }
            />
        </div>
    );
}

ApplicationLogo.propTypes = {
    justIcon: PropTypes.bool,
    txtSize: PropTypes.string,
    imgSize: PropTypes.string,
    gapSize: PropTypes.string,
    className: PropTypes.string,
};
