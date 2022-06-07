import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
    }
}));


export const ModalItem = ({itemApi}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const pStyle = {padding: "5px"}  
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Detalle
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div  className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Detalle del personaje</h2>
                        </div>
                            <div className="modal-body">
                                <p style={pStyle}>Nombre: <strong>{itemApi.name}</strong></p>
                                <p style={pStyle}>Genero: <strong>{itemApi.gender == "Male" ? "Masculino" : "Femenino"}</strong></p>
                                <p style={pStyle}>Especie: <strong>{itemApi.species == "Human" ? "Humano" : itemApi.species}</strong> </p>
                                <p style={pStyle}>Estado: <strong className={ itemApi.status == "Dead" ? 'label' : 'label label-green'}> { itemApi.status == "Dead" ? "Muerto" : "Vivo"}</strong></p>
                                <p style={pStyle}>Ubicación: <strong>{ itemApi.location.name}</strong></p>
                            </div>
                        <div className="modal-footer" >
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            X
                        </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}